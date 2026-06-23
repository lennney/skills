---
name: gate-plan
description: Gate 1 — Write an implementation plan. Start here before any multi-file change. Use when starting a new feature, fixing a bug, or planning a refactor.
---

# Gate 1: Plan

Write an implementation plan before writing any code.

## Workflow

```
1. Understand requirements (ask if unclear)
2. Explore codebase (read relevant files)
3. Write plan to docs/plans/YYYY-MM-DD-feature-name.md
```

## Plan Format

Each plan is a markdown file with:

- **Goal**: One sentence
- **Architecture**: 2-3 sentences
- **Tasks**: Each task is 2-5 minutes of focused work
- **Acceptance criteria**: 3-5 per task

### Each Task Must Include

| Field | Example |
|-------|---------|
| **Exact file path** | `src/config/settings.ts` (not "the config file") |
| **Complete code** | Copy-pasteable, not pseudocode |
| **Exact commands** | `npm test src/foo.test.ts -v` (with expected output) |
| **Verification** | How to prove this task works |

### Relevant Skills

- `/project-init` — if you're scaffolding a new project
- `/component-design` — if you're designing component APIs
- `/data-fetching` — if you're planning data layer
- `/layouts-routing` — if you're planning page structure
- `/styling-tailwind` — if you're planning styling approach

## Acceptance Criteria (for the plan itself)

1. Each task is 2-5 minutes of focused work
2. File paths are exact (not vague)
3. Code examples are complete and copy-pasteable
4. Commands include expected output
5. Acceptance criteria exist per task
