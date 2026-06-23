# Frontend Skills

前端/Next.js 专项 [Claude Code](https://claude.ai/code) Skills 集合。包含从社区收集的优质 skills 和自建专项技能。

## 安装

```bash
npx skills@latest add lennney/skills
```

然后运行 `/setup-matt-pocock-skills` 完成初始化配置。

## 内容

| 分类 | 数量 | 说明 |
|------|------|------|
| 📦 Curated | 15 | 来自 mattpocock, daymade, jamesrochabrun, awesome-skills 等社区仓库 |
| ✨ Next.js | 7 | 组件设计、数据获取、性能、E2E 测试、无障碍、错误处理、Vercel 部署 |
| 📂 自有技能 | 10 | UI/UX、设计系统、PRD、验收标准等 |

## 技能清单

### Engineering
`/tdd` · `/diagnosing-bugs` · `/prototype` · `/codebase-design` · `/code-review` · `/styleseed-design-review`

### Productivity
`/grill-me` · `/grilling` · `/handoff` · `/domain-modeling`

### Design
`/ui-designer` · `/product-analysis` · `/frontend-designer` · `/ui-modernizer` · `/web-design-engineer`

### Next.js
`/component-design` · `/data-fetching` · `/performance` · `/e2e-playwright` · `/accessibility` · `/error-handling` · `/vercel-deploy`

## 项目结构

```
skills/
├── curated/       # 社区收集
│   ├── engineering/
│   ├── productivity/
│   └── design/
├── own/           # 自建
│   ├── nextjs/
│   ├── design/
│   └── product/
├── plugin.json    # Claude Code 注册
└── README.md
```

## License

MIT