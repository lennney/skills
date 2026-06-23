---
name: gate
description: Development workflow router — guides you through Plan → Review → Implement → Code Review → Reflect. The single entry point for structured development. Use when starting any development task, or when you're unsure which workflow phase to use.
---

# Gate — Workflow Router

Single entry point to the 5-gate development workflow.

## Which phase are you in?

### Gate 1: Plan
Write an implementation plan before writing code.

> Load: `/gate-plan`

**When**: Starting a new feature, fixing a bug, or making any change that requires 2+ files.

### Gate 2: Plan Review
Have a subagent review the plan against 12 criteria.

> Load: `/gate-review`

**When**: After the plan is written, before any code is written.

### Gate 3: Implement
Execute the plan task-by-task with TDD.

> Load: `/gate-impl`

**When**: Plan is approved, ready to write code.

### Gate 4: Code Review
Review the implementation and tests.

> Load: `/gate-code`

**When**: All tasks are implemented, tests pass.

### Gate 5: Reflect
Post-task reflection — extract learnings, update skills.

> Load: `/gate-reflect`

**When**: Code review passed, before moving to next task.

---

## Quick Reference

```
┌─────────┐   ┌──────────┐   ┌──────────┐   ┌────────────┐   ┌──────────┐
│ Gate 1  │ → │ Gate 2   │ → │ Gate 3   │ → │ Gate 4     │ → │ Gate 5  │
│ Plan    │   │ Review   │   │ Impl     │   │ Code Review│   │ Reflect │
└─────────┘   └──────────┘   └──────────┘   └────────────┘   └──────────┘
                                                   │
                                           ┌───────┴───────┐
                                           │   AI Workflow  │
                                           │  (辅助, 非Gate) │
                                           ├───────────────┤
                                           │ ai-coding-workflow│
                                           │ ai-code-review │
                                           │ ai-testing     │
                                           │ ai-debugging   │
                                           │ ai-refactoring │
                                           │ ai-git-workflow│
                                           └───────────────┘
```

### Gate ≠ AI Workflow

The **5 Gates** are the development pipeline (mandatory for quality).
The **AI Workflow skills** are general-purpose AI usage patterns (optional, use anywhere).

Use `/gate` to start a pipeline phase. Use individual AI skills when you need specific help.
