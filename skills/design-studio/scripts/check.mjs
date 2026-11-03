#!/usr/bin/env node
// design-studio checks. No dependencies; Node 18+.
// Manual / any AI tool:   node check.mjs build | done | status | ci
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
  if (!String(s.direction || "").trim()) p.push(s.job === "polish"
    ? "The user hasn't approved which fixes to apply (step 6, polish list)."
    : "The user hasn't picked a direction yet (step 6). Show the three directions and wait for their pick.");
  if (!fs.existsSync(path.join(root, "DESIGN.md"))) p.push("DESIGN.md doesn't exist yet (step 7). Write the spec first.");
  return p;
}
function doneProblems(root, s) {
  const p = [];
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
    fail("Unknown command. Use: status | build | done | ci | hook-pre | hook-post | hook-stop | hook-prompt", 1);
}
