---
name: gate-impl
description: Gate 3 — Execute plan tasks with TDD. Use after plan review is approved.
---

# Gate 3: Implementation

Execute the plan task-by-task with TDD.

## Workflow

For each task in the plan:

```
1. Write failing test    → "Write a test for the expected behavior"
2. Verify test fails      → Run: pytest <test-file> -v (expected: FAIL)
3. Write minimal code     → "Write just enough to make the test pass"
4. Verify test passes     → Run: pytest <test-file> -v (expected: PASS)
5. Commit                 → git commit -m "feat: <description>"
```

## TDD Discipline

- **RED**: Write the test first. It should fail because the feature doesn't exist yet.
- **GREEN**: Write the minimal code to pass the test. No extra features.
- **REFACTOR**: Clean up the code while keeping tests green.

```
// RED — write failing test
it("returns formatted date", () => {
  expect(formatDate(new Date("2024-01-01"))).toBe("Jan 1, 2024")
})
// → FAIL: formatDate is not defined

// GREEN — write minimal code  
function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}
// → PASS

// REFACTOR — clean up, extract helper if needed
```

## After All Tasks

1. Run full test suite: `npm test` or `python -m pytest`
2. Verify all tests pass
3. Mark plan tasks as complete
4. Proceed to `/gate-code`

## Relevant Skills

- `/tdd` — test-driven development deep dive
- `/ai-coding-workflow` — AI pair programming loop
- `/ai-testing` — AI-assisted test generation
- `/ai-refactoring` — AI-assisted refactoring
- `/ai-debugging` — if tests fail unexpectedly
