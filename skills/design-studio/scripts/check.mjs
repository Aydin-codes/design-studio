#!/usr/bin/env node
// design-studio checks. No dependencies; Node 18+.
// Manual / any AI tool:   node check.mjs build | done | tells | status | ci
// Claude Code hooks:      node check.mjs hook-pre | hook-post | hook-stop | hook-prompt   (JSON on stdin)
import fs from "node:fs";
import path from "node:path";

const UI_EXT = new Set([".html", ".htm", ".css", ".scss", ".sass", ".less", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte", ".astro", ".mdx"]);
const STEPS = ["", "find the project", "setup", "job, output, depth", "interview", "references", "directions", "spec", "build", "critique and check-in"];

function readStdin() {
  try { const t = fs.readFileSync(0, "utf8"); return t.trim() ? JSON.parse(t) : {}; } catch { return {}; }
}
function findRoot(start) {
  let dir = path.resolve(start || process.cwd());
  for (;;) {
    if (fs.existsSync(path.join(dir, ".studio", "state.json"))) return dir;
    const up = path.dirname(dir);
    if (up === dir) return null;
    dir = up;
  }
}
function load(root) {
  try { return JSON.parse(fs.readFileSync(path.join(root, ".studio", "state.json"), "utf8")); } catch { return null; }
}
function save(root, s) {
  fs.writeFileSync(path.join(root, ".studio", "state.json"), JSON.stringify(s, null, 2) + "\n");
}
function buildProblems(root, s) {
  const p = [];
  if (!s.frozen_confirmed) p.push("The user hasn't confirmed the job's keep/change lists (step 3b). Show them and wait for confirmation.");
  if (s.job !== "polish" && !(Array.isArray(s.references) && s.references.length)) p.push("No human-made reference recorded yet (step 5, rule 8). Ask the user for one, or show two or three real ones, and record what to take from each in references.");
  if (!String(s.direction || "").trim()) p.push(s.job === "polish"
    ? "The user hasn't approved which fixes to apply (step 6, polish list)."
    : "The user hasn't picked a direction yet (step 6). Show the three directions and wait for their pick.");
  if (!fs.existsSync(path.join(root, "DESIGN.md"))) p.push("DESIGN.md doesn't exist yet (step 7). Write the spec first.");
  return p;
}
function doneProblems(root, s) {
  const p = [];
  const t = tellScan(root);
  if (t.hard.length) p.push("The tell scan found problems (run: node check.mjs tells):\n  " + t.hard.slice(0, 10).join("\n  "));
  if (!s.critique_done || !fs.existsSync(path.join(root, ".studio", "critique.md")))
    p.push("The critique isn't done (step 9). Run the checks in reference/critique.md, fix what fails, write .studio/critique.md, set critique_done: true, then do the check-in.");
  return p;
}
function isUiFile(root, file) {
  if (!file) return false;
  const abs = path.resolve(root, file);
  const rel = path.relative(root, abs);
  if (rel.startsWith("..") || rel.split(path.sep)[0] === ".studio") return false;
  if (path.basename(abs) === "DESIGN.md") return false;
  return UI_EXT.has(path.extname(abs).toLowerCase());
}

// ---- tell scan: searches built files for known AI-design tells ----
const SKIP_DIRS = new Set(["node_modules", ".git", ".studio", ".next", "dist", "build", "vendor", ".expo", "coverage"]);
const HARD = [
  [/lorem ipsum|\bTODO\b|group colou?r \d|\bItem \d\b|\bFeature \d\b|John Doe|Jane Doe|\bAcme\b/i, "placeholder text left in"],
  [/trusted by [\d,]+|[\d,]{2,}\+ (users|customers|teams|happy)|★★★★★|\b4\.\d\/5\b/i, "social proof or numbers the user didn't give (check they're real)"],
];
const SOFT = [
  [/font-family[^;"}]*\b(Inter|Geist|Space Grotesk|Instrument Serif)\b|family=(Inter|Geist|Space\+Grotesk|Instrument\+Serif)\b|@fontsource\/(inter|geist|space-grotesk|instrument-serif)\b/i, "default AI font"],
  [/\buppercase\b[^"'\n]*\btracking-|text-transform:\s*uppercase[^}]*letter-spacing|letter-spacing[^}]*text-transform:\s*uppercase/i, "uppercase spaced label (eyebrow)"],
  [/from-(purple|violet|indigo|fuchsia)-\d|linear-gradient\([^)]*(#(7c3aed|8b5cf6|6366f1|a855f7|9333ea|4f46e5)|purple|violet|indigo)/i, "purple/indigo gradient"],
  [/background-clip:\s*text|bg-clip-text/i, "gradient text"],
  [/backdrop-filter:\s*blur|backdrop-blur/i, "frosted glass blur"],
  [/width:\s*(32|40|48|56|60|64|72|80)px;\s*height:\s*[2-4]px|height:\s*[2-4]px;\s*width:\s*(32|40|48|56|60|64|72|80)px|\bw-(8|10|12|14|16|20) h-(0\.5|1)\b/i, "short accent bar (often under headings)"],
  [/\b(seamless(ly)?|revolutioni[sz]e|supercharge|game[- ]changer|cutting[- ]edge|unlock (your|the)|elevate your|empower(s|ing)? (you|teams))\b/i, "generic marketing words (any-product test)"],
];
const LEAK = /\b(Radix( Colors)?|Fontshare|Google Fonts|color scale|colour scale|mock-?up|picking sheet|design[- ]studio)\b/i;

function walk(dir, out) {
  let ents = [];
  try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of ents) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name) && !e.name.startsWith(".")) walk(path.join(dir, e.name), out); }
    else if (UI_EXT.has(path.extname(e.name).toLowerCase()) && !/\.min\./.test(e.name)) out.push(path.join(dir, e.name));
  }
  return out;
}
function visibleText(html) {
  return html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi, m => m.replace(/[^\n]/g, " "))
             .replace(/<[^>]*>/g, m => m.replace(/[^\n]/g, " "));
}
function tellScan(root) {
  const hard = [], soft = [];
  for (const file of walk(root, [])) {
    let text; try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
    if (text.length > 2_000_000) continue;
    const rel = path.relative(root, file);
    const lines = text.split("\n");
    const vis = /\.html?$/i.test(file) ? visibleText(text).split("\n") : null;
    lines.forEach((line, i) => {
      for (const [re, why] of HARD) if (re.test(line)) hard.push(`${rel}:${i + 1}  ${why}`);
      for (const [re, why] of SOFT) if (re.test(line)) soft.push(`${rel}:${i + 1}  ${why}`);
      if (vis && LEAK.test(vis[i] || "")) hard.push(`${rel}:${i + 1}  design notes or tool names visible on the page`);
    });
  }
  return { hard, soft };
}

function out(msg) { process.stdout.write(msg + "\n"); }
function fail(msg, code) { process.stderr.write(msg + "\n"); process.exit(code); }

const cmd = process.argv[2] || "status";
const hook = cmd.startsWith("hook-");
const input = hook ? readStdin() : {};
const root = findRoot(input.cwd || process.cwd());
const state = root ? load(root) : null;
const active = !!(state && state.active);

switch (cmd) {
  case "status": {
    if (!active) { out("design-studio: not active in this project (no .studio/state.json with active: true)."); break; }
    out(`design-studio: step ${state.step} (${STEPS[state.step] || "?"}); job ${state.job || "?"}, output ${state.output || "?"}, depth ${state.depth || "?"}.`);
    const b = buildProblems(root, state), d = doneProblems(root, state);
    out(b.length ? "Not ready to build:\n- " + b.join("\n- ") : "Ready to build.");
    if (state.built) out(d.length ? "Not done:\n- " + d.join("\n- ") : "Critique done.");
    break;
  }
  case "build": {
    if (!active) { out("design-studio not active; nothing to check."); break; }
    const b = buildProblems(root, state);
    if (b.length) fail("design-studio: not ready to build.\n- " + b.join("\n- "), 1);
    out("design-studio: ready to build.");
    break;
  }
  case "done": {
    if (!active) { out("design-studio not active; nothing to check."); break; }
    const d = doneProblems(root, state);
    if (d.length) fail("design-studio: not done yet.\n- " + d.join("\n- "), 1);
    out("design-studio: critique done. Finish with the check-in, then set active: false.");
    break;
  }
  case "tells": {
    const r = root || process.cwd();
    const t = tellScan(r);
    if (!t.hard.length && !t.soft.length) { out("No known tells found. That's the floor, not the ceiling: still run the critique."); break; }
    if (t.soft.length) out("Possible tells (check each; fine if the user chose it):\n  " + t.soft.join("\n  "));
    if (t.hard.length) fail("Must fix:\n  " + t.hard.join("\n  "), 1);
    break;
  }
  case "ci": {
    const r = root || process.cwd();
    const f = path.join(r, "DESIGN.md");
    if (!fs.existsSync(f)) { out("No DESIGN.md; nothing to check."); break; }
    const text = fs.readFileSync(f, "utf8");
    const need = ["Job", "Thesis", "Readers", "Tokens", "Layout", "Look order", "Components and states", "Motion"];
    const missing = need.filter(h => !new RegExp("^##\\s*" + h, "mi").test(text));
    if (missing.length) fail("DESIGN.md is missing sections: " + missing.join(", "), 1);
    out("DESIGN.md has all required sections.");
    break;
  }
  case "hook-pre": {
    if (!active) process.exit(0);
    const file = input.tool_input && (input.tool_input.file_path || input.tool_input.notebook_path);
    if (!isUiFile(root, file)) process.exit(0);
    const b = buildProblems(root, state);
    if (b.length) fail("design-studio blocked this edit: you're not at the build step yet.\n- " + b.join("\n- ") +
      "\nIf this edit isn't part of the design work, ask the user; if they agree, set active: false in .studio/state.json.", 2);
    process.exit(0);
  }
  case "hook-post": {
    if (!active) process.exit(0);
    const file = input.tool_input && (input.tool_input.file_path || input.tool_input.notebook_path);
    if (isUiFile(root, file) && !state.built) { state.built = true; if ((state.step || 0) < 8) state.step = 8; save(root, state); }
    process.exit(0);
  }
  case "hook-stop": {
    if (!active || !state.built || input.stop_hook_active || state.stop_reminded) process.exit(0);
    const d = doneProblems(root, state);
    if (d.length) { state.stop_reminded = true; save(root, state); fail("design-studio: before finishing: " + d.join(" ") + " If you're stopping to ask the user something, ask it now.", 2); }
    process.exit(0);
  }
  case "hook-prompt": {
    if (!active) process.exit(0);
    const next = state.built ? (doneProblems(root, state).length ? "critique (step 9)" : "check-in, then set active: false")
      : (buildProblems(root, state)[0] || "build (step 8)");
    out(`[design-studio is active] Step ${state.step} (${STEPS[state.step] || "?"}); job ${state.job || "?"}, output ${state.output || "?"}, depth ${state.depth || "?"}. Next: ${next} Re-open the branch file for the current step before continuing. Start your reply with the step line.`);
    process.exit(0);
  }
  default:
    fail("Unknown command. Use: status | build | done | tells | ci | hook-pre | hook-post | hook-stop | hook-prompt", 1);
}
