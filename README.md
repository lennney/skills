# Skills For Building Websites With AI

[![skills.sh](https://skills.sh/b/lennney/skills)](https://skills.sh/lennney/skills)

> **用 AI 搭网站，从 0 到 3，一个命令搞定。**
> Build websites with AI — from zero to production, one command at a time.

---

## 🚀 快速开始

```bash
npx skills@latest add lennney/skills
```

装完执行 `/gate`，AI 带你走完建站全过程。

---

## 为什么要用 Skills

### 1. AI 不再跑偏

你只说一句话，AI 自己脑补了身份认证、数据库、博客系统——你根本没让做。

`/gate` 把建站拆成 **探讨 → 初始化 → 前端 → SEO → 部署** 五个阶段。AI 在哪个阶段就只做什么，不乱猜。

### 2. 不用每次重教 AI

每次新开对话，你都得重复：用 Tailwind、组件放 `src/components/`、shadcn 初始化。

Skills 把这些写成了文档——`/styling-tailwind` 加载，AI 自动照做。你的规范，自动执行。

### 3. 非技术同事也能用

设计师问"怎么用这个 AI？"你解释一堆命令，他们放弃了。

Skills 的设计原则：**AI 在后台干活，前台只提问。** 同事只需要回答问题，不需要打命令。

---

## 目录结构

```
skills/
├── website/       (12)  建站：组件、布局、样式、SEO、部署
├── discussion/    (5)   探讨：需求澄清、领域建模
├── engineering/   (6)   工程：TDD、调试、代码审查
├── design/        (11)  设计：UI/UX、设计系统
├── product/       (3)   产品：PRD、验收标准
├── ai/            (6)   AI 使用：编码/审查/测试/调试/重构/Git
└── workflow/      (12)  路由系统 —— 入口 `/gate`
```

## Workflow

```
/gate   → 路由入口
├── 🆕 从零搭建（0→1）
│   ├── /gate-discuss    → 🗣️ 探讨：聊需求、定功能
│   ├── /gate-init       → 🚀 初始化：搭脚手架
│   ├── /gate-frontend   → 🎨 前端：组件+布局+样式
│   ├── /gate-seo        → 🔍 SEO：Metadata+检查清单
│   └── /gate-deploy     → 🚢 部署：Vercel 上线
│
├── 📈 已有网站优化（1→2→3）
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

---

## Philosophy

- **Background execution** — AI 做技术活，你只回答问题
- **Plain language** — AI 做完用大白话解释做了什么
- **Progressive** — 从 `/gate` 开始，自然深入到具体技能
- **Open** — 每个技能只是一个 Markdown 文件，随便改

---

## Skill 清单

### Website / 建站 (12)

| Skill | 用途 |
|-------|------|
| `project-init` | 项目初始化 + 脚手架 |
| `layouts-routing` | App Router 布局模式 |
| `component-design` | 组件设计 + Server/Client 边界 |
| `styling-tailwind` | Tailwind CSS 实践 |
| `data-fetching` | RSC / Server Actions |
| `seo-metadata` | Metadata API + Sitemap |
| `seo-checklist` | SEO 10 项检查清单 |
| `performance` | Core Web Vitals 优化 |
| `accessibility` | WCAG 无障碍 |
| `error-handling` | 错误边界 + 用户反馈 |
| `vercel-deploy` | Vercel 部署 |
| `e2e-playwright` | Playwright E2E 测试 |

### Discussion / 探讨 (5)

| Skill | 来源 | 用途 |
|-------|------|------|
| `gate-discuss` | 自建 | 探讨阶段路由 |
| `grill-me` | mattpocock | 需求深度访谈 |
| `grilling` | mattpocock | 追问方法论 |
| `handoff` | mattpocock | 上下文交接 |
| `domain-modeling` | mattpocock | 领域建模 |

### Engineering / 工程 (6)

| Skill | 来源 | 用途 |
|-------|------|------|
| `tdd` | mattpocock | 测试驱动开发 |
| `diagnosing-bugs` | mattpocock | 调试方法论 |
| `prototype` | mattpocock | 快速原型 |
| `codebase-design` | mattpocock | 深模块设计 |
| `code-review` | awesome-skills | 代码审查 |
| `styleseed-design-review` | bitjaru | UI 设计评分 |

### Design / 设计 (11)

| Skill | 来源 | 用途 |
|-------|------|------|
| `ui-designer` | daymade | 从截图提取设计系统 |
| `product-analysis` | daymade | 产品多维分析 |
| `frontend-designer` | jamesrochabrun | 前端组件设计 |
| `ui-modernizer` | Rosalina7515 | UI 升级 |
| `web-design-engineer` | Luispitik | Next.js 落地页 |
| `ui-ux-pro-max` | 自建 | 全栈 UI/UX 设计 |
| `frontend-design` | 自建 | 前端设计规范 |
| `anti-ai-slop` | 自建 | 反 AI 味设计 |
| `ckm-design` | 自建 | CKM 设计 |
| `ckm-design-system` | 自建 | CKM 设计系统 |
| `ckm-ui-styling` | 自建 | CKM UI 样式 |

### Product / 产品 (3)

| Skill | 用途 |
|-------|------|
| `prd-development` | PRD 文档生成 |
| `acceptance-criteria` | 验收标准编写 |
| `user-story` | User Story 编写 |

### AI / AI 使用 (6)

| Skill | 用途 |
|-------|------|
| `ai-coding-workflow` | AI 结对编程 |
| `ai-code-review` | AI 代码审查 |
| `ai-testing` | AI 测试生成 |
| `ai-debugging` | AI 调试 |
| `ai-refactoring` | AI 安全重构 |
| `ai-git-workflow` | AI Git 操作 |

### Workflow / 路由系统 (12)

| Skill | 用途 |
|-------|------|
| `gate` | 路由入口 |
| `gate-discuss` | 🗣️ 探讨 |
| `gate-init` | 🚀 初始化 |
| `gate-frontend` | 🎨 前端 |
| `gate-seo` | 🔍 SEO |
| `gate-deploy` | 🚢 部署 |
| `gate-optimize` | 📈 优化路由 |
| `gate-perf` | ⚡ 性能 |
| `gate-a11y` | ♿ 无障碍 |
| `gate-testcov` | 🧪 测试 |
| `gate-ci` | 🔄 CI/CD |
| `gate-animate` | ✨ 动效 |
| `gate-ai` | 🤖 AI 辅助 |

---

## 安装

```bash
# 安装全部技能
npx skills@latest add lennney/skills

# 开始使用
/gate
```

---

## License

MIT — 随意修改，按需使用。
