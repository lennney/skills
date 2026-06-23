---
name: seo-metadata
description: Next.js SEO 配置。设置 Metadata API、Open Graph、Sitemap、Robots.txt 时加载。
---

Set up these 4 files:

**layout.tsx** — `metadata` export with `title: { default, template }`, `description`, `openGraph: { images }`
**每个 page.tsx** — `generateMetadata` 导出返回动态 title + description + OG
**sitemap.ts** — 列出所有公开页面，含优先级和最后修改时间
**robots.ts** — `allow: "/"`, `disallow: "/api/"`, 指向 sitemap

结构化数据：**非**首页可以不加 JSON-LD。首页可加 `VideoGame` 或 `WebSite` 类型的 JSON-LD。
