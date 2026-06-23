# CLAUDE.md

## 仓库用途

前端/Next.js 专项的 Claude Code Skills 集合。按功能分类，不区分来源。

## 技能分类

- `skills/website/` — 建站：组件、布局、样式、SEO、部署
- `skills/discussion/` — 探讨：需求访谈、领域建模
- `skills/engineering/` — 工程：TDD、调试、代码审查
- `skills/design/` — 设计：UI/UX、设计系统
- `skills/product/` — 产品：PRD、验收标准
- `skills/ai/` — AI 使用：编码、审查、测试、调试、重构、Git
- `skills/workflow/` — 工作流路由：从 0 到 3 的建站引导

来自社区的技能在 SKILL.md 顶部标注了 `source:` 字段。

## 用户调用 vs 模型调用

- **用户调用**（`disable-model-invocation: true`）：grill-me, handoff, prototype, ui-modernizer, web-design-engineer
- **模型调用**（默认）：tdd, diagnosing-bugs, codebase-design, code-review, component-design, data-fetching, performance, accessibilty, error-handling 等

## 使用方式

1. `npx skills@latest add lennney/skills`
2. 或者在项目中执行 `/gate` 开始工作流
