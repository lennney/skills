---
name: ai-code-review
description: Use AI to review pull requests — configure review scope, run automated checks, focus on meaningful issues. Use when reviewing PRs, checking code quality, or catching bugs before merge.
---

# AI Code Review

Systematic approach to code review using AI assistants.

## Setup: Configure AI for Review

Before starting, give the AI context:

```
/git diff main -- src/    → feed this to the AI
/project CLAUDE.md        → project conventions
/commit messages          → what changed and why
```

## Review Checklist

Feed PR changes through this checklist:

### 1. Correctness
```
- Edge cases: empty state, null, error
- Type safety: any? type casting? missing generics?
- Logic: does the condition cover all cases?
```

### 2. Maintainability
```
- Duplication: is this logic repeated elsewhere?
- Naming: does it say what it does?
- Complexity: can it be simplified?
```

### 3. Performance
```
- Unnecessary re-renders (missing memo/deps)
- Large bundles (dynamic imports? tree-shakeable?)
- Expensive computations in render path
```

### 4. Security
```
- User input sanitized?
- API endpoints authenticated?
- Secrets hardcoded?
```

### 5. Accessibility
```
- Images have alt text?
- Interactive elements keyboard-accessible?
- Color contrast sufficient?
```

## Review Prompt Templates

### Full PR review
> "Review this PR. Focus on correctness issues first, then maintainability. Ignore formatting/style (we have formatters for that). List issues by severity (critical > major > minor)."

### Quick check
> "Check this file for correctness only. Ignore style and naming."

### Focused check
> "Review only the error handling in this PR. Are there uncaught edge cases?"

## Handling AI Findings

| Finding | Action |
|---------|--------|
| False positive | Note it and move on |
| Minor issue | File as follow-up issue |
| Real bug | Fix before merge |
| Pattern issue | Add to team guidelines |

## Acceptance Criteria

1. Every PR gets at least a correctness check before merge
2. AI review findings are triaged: bug → fix, pattern → doc, style → ignore
3. Review context includes the diff + project conventions
