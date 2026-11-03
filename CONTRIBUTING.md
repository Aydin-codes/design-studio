# Contributing

Thanks for helping. design-studio is small and opinionated, so please open an issue before a large change.

## Good contributions

- **Skill improvements from real runs.** At the end of each run the skill suggests changes labeled "Skill". If you agree with one, open an issue with the suggestion and what happened in the run.
- **New tells.** Patterns that make a design look AI-made. Include a before/after or a screenshot.
- **New job or output rules** (`skills/design-studio/jobs/`, `outputs/`). Keep them short and checkable.
- **Fixes to `check.mjs`.** It must stay dependency-free and must never block when design-studio isn't active.

## Rules for changes

- Taste stays with the user. Don't add rules that pick colors, fonts or styles for people.
- Don't add rules about readers that the user didn't give.
- Keep `SKILL.md` short. Detail goes in a branch file that opens at its step.
- Run `claude plugin validate .` and test the hooks before opening a PR.
