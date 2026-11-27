# For agents editing this repo

- The skill is `skills/design-studio/`. `SKILL.md` is the core; keep it short and put detail in a branch file under `jobs/`, `outputs/` or `reference/` that opens at its step.
- `skills/toolkit/` is a copy of [Aydin-codes/toolkit](https://github.com/Aydin-codes/toolkit). Change the toolkit there, then copy it over; don't edit the copy here.
- `scripts/check.mjs` stays dependency-free (Node built-ins only) and must never block when design-studio isn't active.
- Taste stays with the user: don't add rules that pick colors, fonts or styles, or rules about readers the user didn't give.
- Before finishing: `node --test` and `claude plugin validate .` both pass.
- Bump `version` in `.claude-plugin/plugin.json` and add a `CHANGELOG.md` entry for each release; tags are `vX.Y.Z`.
- Commits: no AI co-author lines.
