# Start building with Codex in VS Code

This is the Codex-specific entry point. Both Codex and Claude use the same
`PROJECT-STATE.md`, `CURRENT-BUILD-TASK.md` and `APPROVAL-REGISTER.md` files.
Set `Assigned builder: Codex` before starting a task.

## First message

Open the participant repository in VS Code and tell Codex:

```text
Read AGENTS.md, PROJECT-STATE.md, APPROVAL-REGISTER.md,
CURRENT-BUILD-TASK.md and PROGRESS.md. Explain our current position in simple
terms. Do not change any file until CURRENT-BUILD-TASK.md contains an approved
task.
```

## Build an approved task

After pasting the Deesha GPT's handoff into `CURRENT-BUILD-TASK.md`, say:

```text
Build only the approved task in CURRENT-BUILD-TASK.md. First explain what you
will change and what you will preserve. Then implement it, run the relevant
checks and show me how to review the local preview. Stop before committing.
```

## Approve a checkpoint

After reviewing the preview, say:

```text
I approve this preview. Show me the checkpoint summary, run the final relevant
checks, save one logical Git checkpoint and push it. Then report the commit and
the matching Vercel preview. Do not promote it to production.
```

If you want changes, describe the visible result instead:

```text
Do not save this checkpoint yet. Keep [approved items] unchanged and change
[specific visible item] so that [desired outcome]. Show me the revised preview.
```

Never paste passwords, API keys, tokens or one-time codes into Codex.
