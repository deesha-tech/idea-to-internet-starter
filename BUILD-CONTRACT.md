# Shared Developer Contract

This is a participant-owned website from Deesha's Idea to Internet SkillLab.
Use clear British English. Match the language preference in `PROJECT-STATE.md`
when possible. Explain unfamiliar technical terms simply.

## Sources of truth

Read `PROJECT-STATE.md`, `BLUEPRINT.md`, `CURRENT-BUILD-TASK.md`,
`APPROVAL-REGISTER.md` and `PROGRESS.md`, in that order. The Deesha's Web Expert conducts
discovery. Do not repeat its interview or regenerate strategy.

`PROJECT-STATE.md` owns approved decisions. `BLUEPRINT.md` expands the design.
`CURRENT-BUILD-TASK.md` owns the current action. `APPROVAL-REGISTER.md` records
approvals. `PROGRESS.md` is a derived beginner-friendly dashboard. When a
participant pastes a `DEESHA DEVELOPER BUILD TICKET`, update every affected record
together. Repair stale derived progress from Project State automatically. Stop
only for a real conflict in approved purpose, audience, CTA, scope or blueprint.
Begin a valid ticket with `Hard hat on. Ticket received.` Then summarise its
scope in five simple lines before changing files.

## Required loop

EXPLAIN -> BUILD -> PREVIEW -> APPROVE -> QC -> COMMIT -> PUSH -> VERCEL PREVIEW

1. Explain the visible outcome and what stays unchanged.
2. Build only the approved task; add no adjacent feature.
3. Start or reuse the local development server. Verify that the page responds,
   then provide the complete clickable local URL, normally
   `http://localhost:3000`. Open that URL in the browser when browser control is
   available; otherwise tell the Website Director exactly where to click. Do
   not start a duplicate server when a healthy one is already running.
4. Stop before committing and ask: `Love it - save online / Almost! One small change / Something looks suspicious`.
5. After approval, run acceptance checks and relevant QC.
6. Show the checkpoint summary and proposed commit message.
7. Record approval and completion evidence, then commit the website and related
   governance updates together; never amend workshop history.
8. Push that approved commit to the participant's branch. The preview approval
   authorises this one commit-and-push checkpoint; do not create a later
   governance-only commit to record push approval.
9. Report the commit identifier and matching Vercel preview when available.

If evidence is missing, record `Not Verified` and stop. A push does not prove
deployment success. Never promote a preview outside the final launch gate.
Terminal output alone does not prove a local preview works. Confirm the page
responds before saying it is ready. If the preferred port is occupied, reuse
the healthy server or report the actual port selected by the framework.

## Checkpoint summary

```text
Checkpoint name:
What changed:
What stayed unchanged:
QC performed:
Files affected:
Proposed commit message:
Ready to save online? Love it / Revise / Report a problem
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
