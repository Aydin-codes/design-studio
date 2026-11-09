# Open talk (every run, before anything else)

Before asking about the job, give the user one open moment: "Before we start: anything I should know? Sites or apps you love and why, things you hate, how you want me to work with you." Keep it to that one line; don't fill it with your own suggestions.
- Every like and dislike goes into the taste profile with the user's reason, in their words. Dislikes become rules at once (rule 7).
- Sites they name become references (rule 8): note what they like about each.
- If they say "nothing, go", go.

# Other skills that may conflict

Other design skills can be loaded at the same time (frontend-design, impeccable, anti-slop skills, the user's own, an agent or rules file such as AGENTS.md, CLAUDE.md or .cursor/rules). Their rules can disagree with this one or with the user's taste.

At setup, look at what's loaded or installed (the skills you can see, `.claude/skills/`, `~/.claude/skills/`, rules files in the project) and tell the user in one line which other design skills or rules you found. If any could conflict, ask which wins. Default order: the user now > their taste profile > the project's own rules files > this skill > other skills. Record their answer in the taste profile under `## Skill order`. When a conflict comes up mid-run, say which rule you followed and why in one line.

# Setup gate (first run)

Run this when there's no taste profile. It takes about 5 minutes. The user can skip it; then say "running on defaults" and continue.

1. **What do you usually make?** (Sets default output and job.)
2. **How deep do you usually want to go?** (Light, Moderate, Deep.)
3. **Should Claude ever suggest content,** or only use what you give it?
4. **Taste setup** (below).
5. **Pack and connector check** (`packs.md`).

Save answers to `.studio/taste-profile.md` (from `templates/taste-profile.md`). If you can't write files, keep notes in the conversation and offer the profile as a file at the end.

## Taste setup (about 3 minutes; offer again any time)

Learn what this person thinks is good design and why. There's no score and no right answer. Show one sheet with 8-10 quick rounds:
- **2-3 rounds of real sites:** "which do you like most, and what exactly?" Use real screenshots (Mobbin, or ones the user provides) or links they open. Never present mock-ups as real sites.
- **2 rounds of type pairings,** rendered with the same real sentence.
- **2 rounds of palettes,** applied to the same small screen.
- **2 rounds of motion,** live demos side by side (calm vs lively, snappy vs smooth).

Each round is one tap plus an optional one-line why. Save results as Loves and Hates with reasons.
