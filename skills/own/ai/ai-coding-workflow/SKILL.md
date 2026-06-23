---
name: ai-coding-workflow
description: Step-by-step workflow for coding with AI assistants (Codex, Claude Code) — prompt structure, review loop, iteration discipline. Use when starting a new coding task with AI, debugging with AI help, or refactoring with AI.
---

# AI Coding Workflow

A repeatable loop for getting quality code out of AI coding assistants.

## The Loop

```
1. PLAN    → Write clear task description
2. GENERATE → Let AI write code
3. REVIEW  → Read diff carefully
4. ITERATE → Fix issues, repeat until clean
5. COMMIT  → Only after review passes
```

## Step 1: Write a Good Task Description

**Bad:**
> "Add a login page"

**Good:**
> "Create a login page at /login with email/password fields, form validation using react-hook-form + zod, shadcn/ui input components, and error display. Submit to POST /api/auth/login. Loading state on submit, redirect to /dashboard on success."

Good task descriptions include:
- **File paths** — "Create `src/app/login/page.tsx`"
- **Constraints** — "Use server actions, no client-side fetch"
- **Existing code** — "Follow the pattern in `src/app/register/page.tsx`"
- **Non-goals** — "Don't add forgot-password yet"

## Step 2: Review the Diff Before Accepting

Always run the diff through these checks:

```bash
git diff --stat   # Which files changed?
```

| Check | Ask yourself |
|-------|-------------|
| **Scope creep** | Did it change files I didn't ask for? |
| **Duplication** | Is there already a function that does this? |
| **Over-engineering** | Is there abstraction that nothing uses? |
| **Missing cases** | Loading, empty, error, edge cases? |
| **Style match** | Does it match the existing code style? |

## Step 3: Iterate with Specific Fixes

When something is wrong, be specific:

**Vague:**
> "Fix the button"

**Specific:**
> "In `src/components/submit-button.tsx`, change the loading state from `text-center` to `flex items-center justify-center gap-2` so the spinner and label sit side by side."

## Step 4: When to Reset

If the AI goes in circles (3+ iterations on the same issue):

1. `git checkout -- .` — revert all changes
2. Rewrite the task description with more constraints
3. Start fresh

This is faster than fighting a bad direction.

## Step 5: Commit Discipline

- **One concern per commit**: "feat: add login page", not "add login and fix header"
- **Review the final diff** before staging: `git add -p` for selective staging
- **Don't commit AI-generated code you don't understand**

## Common Patterns

| Situation | Approach |
|-----------|----------|
| New feature | Write spec first → AI implements → review |
| Bug fix | Write failing test → AI fixes → verify test passes |
| Refactor | Write target interface → AI migrates → verify outputs match |
| Exploration | Set a timebox ("spend 5 minutes researching") |

## Acceptance Criteria

1. Each coding session starts with a written task description
2. Every AI-generated diff is reviewed before staging
3. Iterations are bounded (max 3 rounds before reset)
4. Commits are single-concern
