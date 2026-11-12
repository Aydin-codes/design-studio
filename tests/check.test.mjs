// Tests for skills/design-studio/scripts/check.mjs. Run: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CHECK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "skills", "design-studio", "scripts", "check.mjs");

function project(state, files = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ds-test-"));
  if (state !== undefined) {
    fs.mkdirSync(path.join(dir, ".studio"));
    fs.writeFileSync(path.join(dir, ".studio", "state.json"), typeof state === "string" ? state : JSON.stringify(state));
  }
  for (const [f, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
    fs.writeFileSync(path.join(dir, f), body);
  }
  return dir;
}
function run(cmd, dir, input) {
  const r = spawnSync(process.execPath, [CHECK, cmd], { cwd: dir, input: input ? JSON.stringify(input) : "", encoding: "utf8" });
  return { code: r.status, out: r.stdout, err: r.stderr };
}
const edit = (dir, file) => ({ cwd: dir, tool_name: "Edit", tool_input: { file_path: path.join(dir, file) } });
const READY = { active: true, step: 8, job: "new", output: "landing", depth: "moderate", frozen_confirmed: true, references: ["linear.app: the type"], direction: "A", built: false, critique_done: false };

test("no state file: hooks never block", () => {
  const d = project();
  assert.equal(run("hook-pre", d, edit(d, "src/App.tsx")).code, 0);
  assert.equal(run("hook-stop", d, { cwd: d }).code, 0);
  assert.equal(run("hook-prompt", d, { cwd: d }).out, "");
});

test("corrupt state file: hooks never block", () => {
  const d = project("{ not json");
  assert.equal(run("hook-pre", d, edit(d, "src/App.tsx")).code, 0);
  assert.equal(run("hook-stop", d, { cwd: d }).code, 0);
});

test("empty or garbage stdin: hooks never block", () => {
  const d = project({ ...READY, frozen_confirmed: false });
  const r = spawnSync(process.execPath, [CHECK, "hook-pre"], { cwd: d, input: "garbage", encoding: "utf8" });
  assert.equal(r.status, 0);
});

test("inactive: never blocks", () => {
  const d = project({ ...READY, active: false, frozen_confirmed: false });
  assert.equal(run("hook-pre", d, edit(d, "src/App.tsx")).code, 0);
});

test("blocks UI edits before the build step", () => {
  const d = project({ ...READY, frozen_confirmed: false, references: [], direction: "" });
  const r = run("hook-pre", d, edit(d, "src/App.tsx"));
  assert.equal(r.code, 2);
  assert.match(r.err, /keep\/change/);
  assert.match(r.err, /reference/);
  assert.match(r.err, /direction/);
});

test("always allows .studio files and DESIGN.md", () => {
  const d = project({ ...READY, frozen_confirmed: false });
  assert.equal(run("hook-pre", d, edit(d, ".studio/notes.md")).code, 0);
  assert.equal(run("hook-pre", d, edit(d, "DESIGN.md")).code, 0);
});

test("plain .js/.ts logic files are not blocked; UI-folder ones are", () => {
  const d = project({ ...READY, frozen_confirmed: false });
  assert.equal(run("hook-pre", d, edit(d, "src/api/client.ts")).code, 0);
  assert.equal(run("hook-pre", d, edit(d, "lib/math.js")).code, 0);
  assert.equal(run("hook-pre", d, edit(d, "vite.config.ts")).code, 0);
  assert.equal(run("hook-pre", d, edit(d, "src/components/Button.ts")).code, 2);
});

test("allow list in state lets listed paths through", () => {
  const d = project({ ...READY, frozen_confirmed: false, allow: ["src/legacy/"] });
  assert.equal(run("hook-pre", d, edit(d, "src/legacy/Old.tsx")).code, 0);
  assert.equal(run("hook-pre", d, edit(d, "src/New.tsx")).code, 2);
});

test("ready to build: allows UI edits, post-hook marks built", () => {
  const d = project(READY, { "DESIGN.md": "# Plan" });
  assert.equal(run("hook-pre", d, edit(d, "src/App.tsx")).code, 0);
  assert.equal(run("hook-post", d, edit(d, "src/App.tsx")).code, 0);
  assert.equal(JSON.parse(fs.readFileSync(path.join(d, ".studio", "state.json"), "utf8")).built, true);
});

test("polish job needs no references", () => {
  const d = project({ ...READY, job: "polish", references: [] }, { "DESIGN.md": "# Plan" });
  assert.equal(run("build", d).code, 0);
});

test("stop blocks once without a critique, then lets go", () => {
  const d = project({ ...READY, built: true }, { "DESIGN.md": "# Plan" });
  assert.equal(run("hook-stop", d, { cwd: d }).code, 2);
  assert.equal(run("hook-stop", d, { cwd: d }).code, 0);
});

test("stop respects stop_hook_active", () => {
  const d = project({ ...READY, built: true }, { "DESIGN.md": "# Plan" });
  assert.equal(run("hook-stop", d, { cwd: d, stop_hook_active: true }).code, 0);
});

test("done passes with a critique and a clean page", () => {
  const d = project({ ...READY, built: true, critique_done: true }, { "DESIGN.md": "# Plan", ".studio/critique.md": "ok", "site/index.html": "<h1>Spoke &amp; Chain</h1>" });
  assert.equal(run("done", d).code, 0);
});

test("tell scan: placeholders and design notes block, soft tells only warn", () => {
  const bad = project(READY, { "site/index.html": "<p>Lorem ipsum</p>\n<footer>Colors: Radix Colors</footer>" });
  const r = run("tells", bad);
  assert.equal(r.code, 1);
  assert.match(r.err, /placeholder/);
  assert.match(r.err, /design notes/);
  const soft = project(READY, { "site/style.css": "h1{font-family:Inter}" });
  const s = run("tells", soft);
  assert.equal(s.code, 0);
  assert.match(s.out, /default AI font/);
});

test("tell scan flags tilts and second-tier fonts as possible tells", () => {
  const d = project(READY, { "site/style.css": ".card{transform:rotate(-1.5deg)}\nh1{font-family:\"Plus Jakarta Sans\"}" });
  const r = run("tells", d);
  assert.equal(r.code, 0);
  assert.match(r.out, /slight tilt/);
  assert.match(r.out, /second-tier default font/);
});

test("fix-a-part job needs no references", () => {
  const d = project({ ...READY, job: "fix-part", references: [] }, { "DESIGN.md": "# Plan" });
  assert.equal(run("build", d).code, 0);
});

test("tell scan skips node_modules", () => {
  const d = project(READY, { "node_modules/x/index.html": "<p>Lorem ipsum</p>" });
  assert.equal(run("tells", d).code, 0);
});

test("prompt hook prints the current step", () => {
  const d = project(READY);
  assert.match(run("hook-prompt", d, { cwd: d }).out, /design-studio is active/);
});

test("ci: checks DESIGN.md sections", () => {
  const full = ["Job", "Thesis", "Readers", "Tokens", "Layout", "Look order", "Components and states", "Motion"].map(h => "## " + h).join("\n");
  assert.equal(run("ci", project(undefined, { "DESIGN.md": full })).code, 0);
  assert.equal(run("ci", project(undefined, { "DESIGN.md": "## Job" })).code, 1);
  assert.equal(run("ci", project()).code, 0);
});
