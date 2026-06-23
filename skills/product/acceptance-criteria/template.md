# Acceptance Criteria Template

Use this template to write acceptance criteria for requirements.

## Template

```markdown
# Acceptance Criteria: [Requirement ID / Story ID]

**Requirement:** [Full requirement statement]
**Format:** [Given/When/Then | Checklist | Rule-Based]

---

## Given/When/Then Format

**[AC-ID]:**
Given [precondition],
and [additional precondition],
When [action or trigger],
Then [expected result].

## Checklist Format

- [ ] [Testable condition 1]
- [ ] [Testable condition 2]
- [ ] [Negative condition -- what should NOT happen]

## Rule-Based Format

**Rule:** [Business rule statement]
- Example: [Input scenario] -> [Expected output]
- Example: [Boundary scenario] -> [Expected output]
- Example: [Error scenario] -> [Expected output]

---

## Validation Checklist
- [ ] Each criterion tests one specific condition
- [ ] Boundary conditions are covered
- [ ] At least one negative test case is included
- [ ] A tester can determine pass/fail without asking for clarification
- [ ] Criteria trace to the parent requirement
```

## Notes
- Choose one format per requirement (do not mix formats within a single requirement).
- 3-7 criteria per requirement is the target range.
- Always include at least one negative case (what should NOT happen).
