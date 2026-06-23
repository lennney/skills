# Skills 仓库

前端/Next.js 专项 Claude Code Skills 集合，包含从各处收集的优质 skills 和自建的专项技能。

## 快速安装

```bash
npx skills@latest add <your-github>/<repo-name>
```

## 目录说明

```
skills/
├── curated/         # 📦 从社区收集的优质 skills
│   ├── engineering/ #  TDD、调试、原型、设计、代码审查
│   ├── productivity/#  需求访谈、交接、领域建模
│   └── design/      #  UI 设计、产品分析、设计系统
├── own/             # ✨ 自建技能
│   ├── nextjs/      #  Component Design、Data Fetching、Project Init 等
│   ├── design/      #  UI/UX、设计系统、Anti-AI-Slop
│   ├── product/     #  PRD、验收标准、User Story
│   ├── ai/          #  AI 编码/审查/测试/调试/重构/Git
│   └── workflow/    #  🚦 建站工作流（从0到3，入口：/gate）
├── plugin.json      #  Claude Code 注册文件
├── CLAUDE.md        #  Agent 行为指南
└── CONTEXT.md       #  领域术语表
```

## 🚦 建站工作流路由

一个命令 `/gate` 开始。从 0 → 1 → 2 → 3，按阶段推进。

```
/gate   → 路由入口
├── 🆕 从零搭建
│   ├── /gate-discuss    → 🗣️ 探讨：需求+技术选型
│   ├── /gate-init       → 🚀 初始化：搭脚手架
│   ├── /gate-frontend   → 🎨 前端：组件+布局+样式
│   ├── /gate-seo        → 🔍 SEO：Metadata+Sitemap
│   └── /gate-deploy     → 🚢 部署：Vercel 上线
│
├── 📈 已有网站优化
│   └── /gate-optimize   → 选方向：性能·无障碍·测试·CI·动效
│       ├── /gate-perf    → ⚡ 性能优化
│       ├── /gate-a11y    → ♿ 无障碍
│       ├── /gate-testcov → 🧪 测试覆盖
│       ├── /gate-ci      → 🔄 CI/CD
│       └── /gate-animate → ✨ 动效
│
└── 🤖 AI 辅助（贯穿全程）
    └── /gate-ai
```

**使用方式：**
```bash
/gate            # 进入路由 → 选阶段
/gate-frontend   # 直接跳到前端开发
/gate-optimize   # 上线后想优化
```

---

## Skills 清单

### Curated

| Skill | 来源 | 用途 |
|-------|------|------|
| `tdd` | mattpocock | 测试驱动开发 |
| `diagnosing-bugs` | mattpocock | Bug 调试方法论 |
| `prototype` | mattpocock | 快速原型 |
| `codebase-design` | mattpocock | 深模块设计 |
| `code-review` | awesome-skills | React/TS 代码审查 |
| `styleseed-design-review` | bitjaru | UI 设计评分 |
| `grill-me` | mattpocock | 需求深度访谈 |
| `grilling` | mattpocock | 持续追问方法论 |
| `handoff` | mattpocock | 上下文交接 |
| `domain-modeling` | mattpocock | 领域建模 |
| `ui-designer` | daymade | 从截图提取设计系统 |
| `product-analysis` | daymade | 产品多维度分析 |
| `frontend-designer` | jamesrochabrun | 前端组件设计 |
| `ui-modernizer` | Rosalina7515 | UI 升级到 SaaS 级设计 |
| `web-design-engineer` | Luispitik | Next.js 落地页全流程 |

### Own

| Skill | 分类 | 用途 |
|-------|------|------|
| `component-design` | Next.js | 组件 API + Server/Client 边界 |
| `data-fetching` | Next.js | RSC / Server Actions / React Query |
| `performance` | Next.js | Core Web Vitals / bundle 优化 |
| `e2e-playwright` | Next.js | Playwright 端到端测试 |
| `accessibility` | Web | WCAG 无障碍 |
| `error-handling` | Web | 错误边界 / 用户反馈 |
| `vercel-deploy` | DevOps | Vercel 部署 / 日志 / 回滚 |
| `ui-ux-pro-max` | Design | 全栈 UI/UX 设计系统 |
| `frontend-design` | Design | 前端设计规范 |
| `all-good-ui` | Design | All-Good-UI 设计方法论 |
| `anti-ai-slop` | Design | 反 AI 味设计 |
| `ckm-design` | Design | CKM 设计 |
| `ckm-design-system` | Design | CKM 设计系统 |
| `ckm-ui-styling` | Design | CKM UI 样式 |
| `prd-development` | Product | PRD 文档生成 |
| `acceptance-criteria` | Product | 验收标准编写 |
| `user-story` | Product | User Story 编写 |
| `project-init` | Next.js | 项目初始化 + 目录结构 |
| `layouts-routing` | Next.js | App Router 布局模式 |
| `styling-tailwind` | Next.js | Tailwind CSS 实践模式 |
| `seo-metadata` | Next.js | SEO + Open Graph + Sitemap |
| `ai-coding-workflow` | AI | AI 结对编程循环 |
| `ai-code-review` | AI | AI 代码审查流程 |
| `ai-testing` | AI | AI 测试生成与维护 |
| `ai-debugging` | AI | AI 调试工作流 |
| `ai-refactoring` | AI | AI 安全重构 |
| `ai-git-workflow` | AI | AI 辅助 Git 操作 |
| `gate` | Workflow 🚦 | 建站路由入口（选阶段） |
| `gate-discuss` | Workflow 🚦 | 🗣️ 探讨：需求+技术选型 |
| `gate-init` | Workflow 🚦 | 🚀 初始化：搭脚手架 |
| `gate-frontend` | Workflow 🚦 | 🎨 前端：组件+布局+样式 |
| `gate-seo` | Workflow 🚦 | 🔍 SEO：Metadata+Sitemap |
| `gate-deploy` | Workflow 🚦 | 🚢 部署：Vercel 上线 |
| `gate-ai` | Workflow 🚦 | 🤖 AI 辅助路由 |
| `gate-optimize` | Workflow 🚦 | 📈 优化路由（1→2→3） |
| `gate-perf` | Workflow 🚦 | ⚡ 性能优化 |
| `gate-a11y` | Workflow 🚦 | ♿ 无障碍 |
| `gate-testcov` | Workflow 🚦 | 🧪 测试覆盖 |
| `gate-ci` | Workflow 🚦 | 🔄 CI/CD |
| `gate-animate` | Workflow 🚦 | ✨ 动效与交互 |