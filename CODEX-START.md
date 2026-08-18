# Start building with Codex in VS Code

This is the Codex-specific entry point. Do not edit project-state files
yourself. Codex imports the GPT handoff into the files already in this starter.

## One-paste start

Open this repository in VS Code. Ask the Deesha GPT for a `DEESHA BUILD
HANDOFF` assigned to Codex. Paste that entire block into Codex. Nothing else is
needed.

Codex will:

- read the project contract;
- synchronise the existing state files;
- explain the approved outcome in five simple lines;
- build only that outcome;
- run checks and show the local preview;
- stop before saving the Git checkpoint.

## Approve a checkpoint

After reviewing the preview, say:

```text
I love this preview. Save this one logical checkpoint online: update the
completion records, run final relevant checks, commit the website and related
records together, push once, and report the commit plus matching Vercel
preview. Do not promote it to production.
```

If you want changes, describe the visible result instead:

```text
Do not save this checkpoint yet. Keep [approved items] unchanged and change
[specific visible item] so that [desired outcome]. Show me the revised preview.
```

Never paste passwords, API keys, tokens or one-time codes into Codex.
