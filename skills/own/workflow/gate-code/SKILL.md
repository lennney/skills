---
name: gate-code
description: Gate 4 — Review implementation code and tests before merging. Use after all plan tasks are done and tests pass.
---

# Gate 4: Code Review

Review the implementation and tests before committing.

## Pre-Review Check

```bash
npm run typecheck    # No type errors
npm test             # All tests pass
npm run build        # Build succeeds
git diff --stat      # Review which files changed
```

## Dispatch Code Reviewer

```
/goal: Review code implementation and tests

CHECK:
- [ ] Spec compliance (implementation matches plan)
- [ ] Code quality (naming, errors, types, DRY)
- [ ] Test coverage (edge cases, exceptions)
- [ ] No scope creep (only implemented what was planned)
- [ ] No security issues (input validation, XSS, secrets)
- [ ] Tests actually pass

Run: npm test

Output: APPROVED or REQUEST_CHANGES with specific fix instructions.
```

## After Review

| Verdict | Action |
|---------|--------|
| **APPROVED** | `git commit -m "[verified] feat: <description>"` → proceed to `/gate-reflect` |
| **REQUEST_CHANGES** | Fix issues → re-review (max 3 rounds) → escalate |

## Relevant Skills

- `/ai-code-review` — AI-assisted code review deep dive
- `/code-review` — comprehensive review checklist
- `/ai-git-workflow` — commit message + PR generation
