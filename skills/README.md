# Skills 仓库

前端/Next.js 专项 Claude Code Skills 集合。按**功能分类**，不区分来源。

## 快速安装

```bash
npx skills@latest add lennney/skills
```

## 目录说明

```
skills/
├── website/      建站（12）— 组件、布局、样式、SEO、部署
├── discussion/   探讨（5）— 需求访谈、领域建模
├── engineering/  工程（6）— TDD、调试、代码审查
├── design/       设计（11）— UI/UX、设计系统
├── product/      产品（3）— PRD、验收标准
├── ai/           AI 使用（6）— 编码/审查/测试/调试/重构/Git
└── workflow/     工作流路由（12）— 🚦 从 0 到 3 的建站引导
```

> 来自社区的技能在 SKILL.md 顶部标注了 `source:` 字段。

## 🚦 建站工作流路由

一个命令 `/gate` 开始。从 0 → 1 → 2 → 3，按阶段推进。

```
/gate   → 路由入口
├── 🆕 从零搭建
│   ├── /gate-discuss    → 🗣️ 探讨：需求+技术选型
│   ├── /gate-init       → 🚀 初始化：搭脚手架
│   ├── /gate-frontend   → 🎨 前端：组件+布局+样式
│   ├── /gate-seo        → 🔍 SEO：Metadata+检查清单
│   └── /gate-deploy     → 🚢 部署：Vercel 上线
│
├── 📈 已有网站优化
│   └── /gate-optimize   → 选方向
│       ├── /gate-perf    → ⚡ 性能优化
│       ├── /gate-a11y    → ♿ 无障碍
│       ├── /gate-testcov → 🧪 测试覆盖
│       ├── /gate-ci      → 🔄 CI/CD
│       └── /gate-animate → ✨ 动效
│
└── 🤖 AI 辅助（贯穿全程）
    └── /gate-ai
```

**使用方式：** 用户只需要说想做什么，AI 在后台完成，用大白话解释。

## Skills 清单

### Website（建站）

| Skill | 用途 |
|-------|------|
| `project-init` | 项目初始化 + 脚手架 |
| `layouts-routing` | App Router 布局模式 |
| `component-design` | 组件 API + Server/Client 边界 |
| `styling-tailwind` | Tailwind CSS 实践 |
| `data-fetching` | RSC / Server Actions |
| `seo-metadata` | Metadata API + Sitemap |
| `seo-checklist` | SEO 10 项检查清单 |
| `performance` | Core Web Vitals 优化 |
| `accessibility` | WCAG 无障碍 |
| `error-handling` | 错误边界 + 用户反馈 |
| `vercel-deploy` | Vercel 部署 |
| `e2e-playwright` | Playwright E2E 测试 |

### Discussion（探讨）

| Skill | 来源 | 用途 |
|-------|------|------|
| `gate-discuss` | 自建 | 探讨阶段路由 |
| `grill-me` | mattpocock | 需求深度访谈 |
| `grilling` | mattpocock | 持续追问方法论 |
| `handoff` | mattpocock | 上下文交接 |
| `domain-modeling` | mattpocock | 领域建模 |

### Engineering（工程）

| Skill | 来源 | 用途 |
|-------|------|------|
| `tdd` | mattpocock | 测试驱动开发 |
| `diagnosing-bugs` | mattpocock | Bug 调试方法论 |
| `prototype` | mattpocock | 快速原型 |
| `codebase-design` | mattpocock | 深模块设计 |
| `code-review` | awesome-skills | 代码审查 |
| `styleseed-design-review` | bitjaru | UI 设计评分 |

### Design（设计）

| Skill | 来源 | 用途 |
|-------|------|------|
| `ui-designer` | daymade | 从截图提取设计系统 |
| `product-analysis` | daymade | 产品多维度分析 |
| `frontend-designer` | jamesrochabrun | 前端组件设计 |
| `ui-modernizer` | Rosalina7515 | UI 升级 |
| `web-design-engineer` | Luispitik | Next.js 落地页 |
| `ui-ux-pro-max` | 自建 | 全栈 UI/UX 设计系统 |
| `frontend-design` | 自建 | 前端设计规范 |
| `anti-ai-slop` | 自建 | 反 AI 味设计 |
| `ckm-design` | 自建 | CKM 设计 |
| `ckm-design-system` | 自建 | CKM 设计系统 |
| `ckm-ui-styling` | 自建 | CKM UI 样式 |

### Product（产品）

| Skill | 用途 |
|-------|------|
| `prd-development` | PRD 文档生成 |
| `acceptance-criteria` | 验收标准编写 |
| `user-story` | User Story 编写 |

### AI（AI 使用）

| Skill | 用途 |
|-------|------|
| `ai-coding-workflow` | AI 结对编程 |
| `ai-code-review` | AI 代码审查 |
| `ai-testing` | AI 测试生成 |
| `ai-debugging` | AI 调试 |
| `ai-refactoring` | AI 安全重构 |
| `ai-git-workflow` | AI Git 操作 |

### Workflow（工作流路由 🚦）

| Skill | 用途 |
|-------|------|
| `gate` | 建站路由入口 |
| `gate-discuss` | 🗣️ 探讨阶段 |
| `gate-init` | 🚀 初始化 |
| `gate-frontend` | 🎨 前端开发 |
| `gate-seo` | 🔍 SEO |
| `gate-deploy` | 🚢 部署 |
| `gate-optimize` | 📈 优化路由 |
| `gate-perf` | ⚡ 性能 |
| `gate-a11y` | ♿ 无障碍 |
| `gate-testcov` | 🧪 测试 |
| `gate-ci` | 🔄 CI/CD |
| `gate-animate` | ✨ 动效 |
| `gate-ai` | 🤖 AI 辅助路由 |
