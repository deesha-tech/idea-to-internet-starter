# Choose your AI builder

Use one builder for each logical task. Both follow the same approved Project
State and checkpoint history.

## If you are using Codex

Open `CODEX-START.md` and set `Assigned builder: Codex` in
`CURRENT-BUILD-TASK.md`.

## If you are using Claude

Open `CLAUDE-START.md` and set `Assigned builder: Claude` in
`CURRENT-BUILD-TASK.md`.

## Switching builders

Switch only after the current task has one of these states:

- not started;
- completed, committed and pushed; or
- explicitly stopped with the changed files and unresolved checks recorded.

Before switching, ask the new builder to read the shared state and inspect the
existing work. Never ask it to recreate a completed checkpoint.
