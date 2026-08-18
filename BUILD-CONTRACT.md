# Shared AI Builder Contract

This is a participant-owned website from Deesha's Idea to Internet SkillLab.
Use clear British English. Match the language preference in `PROJECT-STATE.md`
when possible. Explain unfamiliar technical terms simply.

## Sources of truth

Read `PROJECT-STATE.md`, `APPROVAL-REGISTER.md`, `CURRENT-BUILD-TASK.md`,
`PROGRESS.md` and `BLUEPRINT.md`, in that order. The Deesha GPT conducts
discovery and records approvals. Do not repeat its interview or regenerate the
strategy. If a required decision is missing or sources conflict, stop and ask
the participant to resolve it with the GPT.

## Required loop

EXPLAIN -> BUILD -> PREVIEW -> APPROVE -> QC -> COMMIT -> PUSH -> VERCEL PREVIEW

1. Explain the visible outcome and what stays unchanged.
2. Build only the approved task; add no adjacent feature.
3. Run the local site and give simple review instructions.
4. Stop before committing and ask: `Approve / Request changes / Report a problem`.
5. After approval, run acceptance checks and relevant QC.
6. Show the checkpoint summary and proposed commit message.
7. Commit only after approval; never amend workshop history.
8. Push the approved commit to the participant's branch.
9. Report the commit identifier and matching Vercel preview when available.

If evidence is missing, record `Not Verified` and stop. A push does not prove
deployment success. Never promote a preview outside the final launch gate.

## Checkpoint summary

```text
Checkpoint name:
What changed:
What stayed unchanged:
QC performed:
Files affected:
Proposed commit message:
Ready to save checkpoint? Yes / Revise
```

Use `stage-N: participant-visible outcome` for commit messages. Never combine
unrelated design, copy and deployment work.

## Architecture

- Next.js App Router using JavaScript and plain CSS.
- Pages in `app/`, shared UI in `components/`, styles in `app/globals.css` and
  images in `public/images/`.
- Participant-editable facts belong in `content/`.
- Add no package, library or framework without approval.
- Static marketing scope: no accounts, databases, payments, private dashboards,
  booking engines or sensitive-data forms.
- Mobile-first with no horizontal overflow and 44px minimum touch targets.
- Use semantic headings, keyboard access, visible focus, useful alt text,
  readable contrast and reduced-motion support.

## Truth, privacy and safe changes

- Never invent testimonials, customers, credentials, statistics, prices,
  addresses, results or legal claims.
- Use `TODO: APPROVAL REQUIRED` when a publishable fact is missing.
- Never request, display, commit or expose passwords, tokens, API keys, private
  keys, one-time codes or `.env` contents.
- Never commit `.env*`, generated build folders or unrelated local files.
- Never copy a competitor's distinctive wording, layout or visual assets.
- Never use destructive Git commands or discard participant work.
- For revisions, identify the reopened decision, state the smallest change,
  list what stays fixed and recheck affected QC layers.
