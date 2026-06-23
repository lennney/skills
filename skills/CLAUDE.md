# CLAUDE.md

## 仓库用途

这是一个前端/Next.js 专项的 Claude Code Skills 仓库。包含社区收集的优质 skills 和自建技能，适用于 Next.js + Tailwind + Vercel 技术栈的 Web 开发。

## 技能分类

- `skills/curated/` — 来自社区的技能，每个 SKILL.md 内注明来源
- `skills/own/` — 自建技能，包含 Next.js 专项、设计、产品、AI 使用四类

## 用户调用 vs 模型调用

- **用户调用**（`disable-model-invocation: true`）：grill-me, handoff, prototype, ui-modernizer, web-design-engineer
- **模型调用**（默认）：tdd, diagnosing-bugs, codebase-design, code-review, component-design, data-fetching, performance, accessibilty, error-handling 等

用户调用的技能可以调用模型调用的技能，但不能调用其他用户调用的技能。

## 使用方式

1. 通过 `npx skills@latest add <repo>` 安装
2. 或者手动将 `skills/` 目录链接到 `~/.claude/skills/`