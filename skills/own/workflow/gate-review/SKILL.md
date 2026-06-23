---
name: gate-review
description: Gate 2 — Have a subagent review your plan against 12 criteria. Use after writing a plan, before any code is written.
---

# Gate 2: Plan Review

Dispatch a subagent to review the implementation plan.

## Dispatch Template

```
/goal: Review the implementation plan at <path-to-plan>

Context:
Read the plan, then read existing codebase files it references.
Check against these 12 criteria:

1. Task granularity (2-5 min each?)
2. File paths (exact, not vague?)
3. Code examples (complete, copy-pasteable?)
4. Commands (exact with expected output?)
5. TDD (test first, code second?)
6. Verification steps (prove each task works?)
7. DRY (no unnecessary repetition?)
8. YAGNI (nothing over-engineered?)
9. No missing context (implementer can execute without guessing?)
10. Backward compatible (won't break existing tests?)
11. Dependencies (tasks in correct order?)
12. Integration (new code integrates cleanly?)

Output: Verdict (APPROVED/REQUEST_CHANGES), checklist, issues.
```

## After Review

| Verdict | Action |
|---------|--------|
| **APPROVED** | Proceed to `/gate-impl` |
| **REQUEST_CHANGES** | Fix issues → re-review (max 3 rounds) → escalate to user |
| **Critical issues after 3 rounds** | Escalate: present options to user |

## Relevant Skills

- `/plan` — if the plan needs restructuring
- `/writing-plans` — for plan format guidance
