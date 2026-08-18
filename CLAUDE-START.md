# Start building with Claude in VS Code

Do not edit project-state files yourself. Claude imports the GPT handoff into
the files already in this starter. Do not give the same unfinished task to
both assistants.

## One-paste start

Ask the Deesha GPT for a `DEESHA BUILD HANDOFF` assigned to Claude. Paste that
entire block into Claude while this repository is open. Claude synchronises the
existing records, explains the scope, builds, checks and shows the local
preview. It stops before saving the Git checkpoint.

## Approve a checkpoint

```text
I love this preview. Save this one logical checkpoint online: update the
completion records, run final relevant checks, commit the website and related
records together, push once, and report the commit plus matching Vercel
preview. Do not promote it to production.
```

If changes are needed:

```text
Do not save this checkpoint yet. Keep [approved items] unchanged and change
[specific visible item] so that [desired outcome]. Show me the revised preview.
```

Never paste passwords, API keys, tokens or one-time codes into Claude.
