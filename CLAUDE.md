# emotionlesshank.github.io — Project Rules

> Hank Dong's personal portfolio portal. A minimalist static landing page (bio sourced from
> the master CV) that links out to 3 live project demos. Served via **GitHub Pages** at the
> repository root URL `https://emotionlesshank.github.io`.

## ⚠️ Public portfolio — English only
This is a public, job-hunting showcase. **All repo-committed content — code, comments, docs,
README, commit messages — MUST be in English.** No AI co-author trailers or `🤖` marks in any
commit. Internal AI working files (`.progress/`, `.omc/`, `.claude/`) are gitignored and may
stay in the author's working language.

## Workflows enabled
- **`/feat`** — feature lifecycle: branch check → DD doc → **grill** (interrogate requirements)
  → confirmation gate → batched implementation → completion trio. See `.claude/skills/feat/SKILL.md`.
  No business code is written before an explicit human "confirm".
- **`autopilot`** (`/oh-my-claudecode:autopilot`) — full autonomous idea→code lifecycle for
  self-contained sub-tasks (e.g. building a section, wiring a demo card).
- **DD requirement workflow** — one requirement = one folder under `.progress/designs/DD-NNN-<topic>/`
  (DD.md + INDEX.md + reviews/ + CHANGES/TEST_PLAN/ACCEPTANCE trio). Rules: `.claude/rules/dd-workflow.md`.
  After any new/archived DD or Status change, run `bash bin/update-designs-index.sh`.

## Harness practices in play
- **prd-dd-lifecycle** — the `/feat` + DD machinery above.
- **lessons-rag** — pitfalls captured under `docs/lessons/`; read the tag map before dev, append `L-NNN` on new pitfalls.
- **live-acceptance-smoke** — before claiming a demo "done", smoke it end-to-end over real HTTPS
  (translation stream / citation answer / seeded dashboard), not just a build pass. See the plan's acceptance criteria.
- **pencil-design-loop / figma-pixel-review-loop** — when building UI, keep authoring and visual
  review as separate passes; never self-approve a design in the same context.

## Tech conventions (per plan D1)
- **Next.js 14 + shadcn/ui + Magic UI**, static export (`output: 'export'`) → GitHub Pages artifact.
- A GitHub Action rebuilds + redeploys Pages on push to `main`.
- No secrets in the repo. Demo backend URLs (sslip.io) are public and may be committed; API keys never are.

## Source of truth
- The migration plan lives at `.omc/plans/portfolio-portal-and-demos.md` (status: pending approval).
- Bio content is sourced from the master CV (English) — do not invent facts.
