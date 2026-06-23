---
name: ai-testing
description: Use AI to generate and maintain tests — test strategy, test generation, and test maintenance patterns for frontend projects. Use when writing new tests, fixing broken tests, or setting up test infrastructure.
---

# AI Testing

Systematic approach to generating and maintaining tests with AI assistance.

## Test Strategy for Frontend

| Layer | Tool | What to test | AI best for |
|-------|------|-------------|-------------|
| **Unit** | Vitest | Functions, hooks, utilities | Generate test cases for pure functions |
| **Component** | Vitest + Testing Library | Component rendering, user interactions | Write component render + interaction tests |
| **E2E** | Playwright | User flows, critical paths | Write page object + flow scripts |

## AI Test Generation Workflow

### Step 1: Describe what to test

```
In src/lib/format.ts, there's a function formatDate(date: Date): string.
It should return "Jan 1, 2024" format.
Edge cases: null input, invalid date, Unix epoch.
Write unit tests using Vitest.
```

### Step 2: Review generated tests

```ts
// ❌ Bad test — tests implementation, not behavior
it("calls toLocaleDateString", () => {
  const spy = vi.spyOn(date, "toLocaleDateString")
  formatDate(new Date("2024-01-01"))
  expect(spy).toHaveBeenCalled()
})

// ✅ Good test — tests output behavior
it("formats date as 'Jan 1, 2024'", () => {
  expect(formatDate(new Date("2024-01-01"))).toBe("Jan 1, 2024")
})
```

### Step 3: Use AI for test maintenance

**Fixing broken tests:**
> "The test `should render user name` is failing. The component now uses `displayName` instead of `name`. Update the test."

**Adding missing coverage:**
> "Run coverage report. Generate tests for uncovered branches in `src/lib/validation.ts`."

## Common Patterns

### Component test template

```tsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when loading", () => {
    render(<Button loading>Click</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
```

## Acceptance Criteria

1. Tests cover: happy path, error state, edge cases, loading state
2. Tests test behavior (output), not implementation (internals)
3. Generated tests are reviewed before committing
4. Coverage report identifies untested code paths
