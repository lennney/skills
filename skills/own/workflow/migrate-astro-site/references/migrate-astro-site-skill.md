# migrate-astro-site

> v3 — 2026-06-11 更新：TBH 迁移实战经验 — 半成品骨架检测加强、各站 Footer 差异处理、TypeScript optional 字段修复、图片/数据残留清理

将 Astro 静态站按 1:1 原则迁移到 Next.js 16。从 ssr-fatekeeper 黄金模板复制基础设施，只替换站点专属内容。

## 调用方式

用户说 `/migrate-astro-site <site-slug>` 时执行此 Skill。

site-slug 可选值：`i-have-no-change` | `tbh-taskbar-hero` | `soul-land-awakening`

## 核心原则

> **内容一字不改拷贝，样式一行不差复制，组件结构保持一致。**
> 只做语法转换（class→className 等），绝不重写内容。

---

## 执行流程

### Phase 0：判断骨架状态 ⚠️

先检查 `ssr-{slug}` 目录是否已存在：

**A. 不存在**（首次迁移）→ 进入 Phase 1 创建骨架

**B. 已存在**（之前跑过一次 `create-next-app`）→ 跳过 Phase 1，但必须先做**骨架清洗**：
1. 检查 `src/lib/site.ts` — 如果还是 fatekeeper 的 domain/site 配置，需要替换
2. 检查 `src/components/` — 如果不存在或为空（typical），从 ssr-fatekeeper 复制全部 13 个共享组件 + hooks/
3. 检查 `layout.tsx` — 如果 metadata 是手写的（没用 `generateSiteMetadata`）或还是 Geist 字体 + "Create Next App"，需要重写
4. 检查 `page.tsx` — 如果还是 Next.js logo 页面或 JSON-LD 是内联脚本（没用 `<StructuredData>`），需要重写
5. 检查 `package.json` — 缺少 `upload:r2` 脚本或 `sharp` 依赖时需要补
6. 检查 `content/` — 如果有之前站点的数据目录（如 ihnc 的 data），需要清理并创建新站数据
7. 检查 `public/images/` — 如果残留前一个站点的图片，需要清理并从 Astro 源站重新复制

**典型半成品症状**：`lib/site.ts` 和 `content/{slug}/data.ts` 已经替换为正确数据，但 `layout.tsx` 和 `page.tsx` 的 SEO 接线没完成。

### Phase 1：项目骨架创建

1. 在 `D:\newweb\` 下创建 `ssr-{slug}` 目录
2. 运行：
```bash
cd D:\newweb && npx create-next-app@latest ssr-{slug} --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```
3. 进入目录安装依赖：
```bash
cd D:\newweb\ssr-{slug} && npm install
```

### Phase 2：复制基础设施（从 ssr-fatekeeper）

以下文件**原样复制**（不需要任何修改）：
```
D:\newweb\ssr-fatekeeper\scripts\upload-to-r2.js  → D:\newweb\ssr-{slug}\scripts\upload-to-r2.js
D:\newweb\ssr-fatekeeper\postcss.config.mjs        → D:\newweb\ssr-{slug}\postcss.config.mjs
D:\newweb\ssr-fatekeeper\next.config.ts             → D:\newweb\ssr-{slug}\next.config.ts
```

以下文件复制后**需修改**：
- `src/lib/types.ts` — 可能需要扩展接口（如果有该站特有的数据字段）
- `src/lib/site.ts` — 替换站点配置
- `src/lib/seo.ts` — 通常不需要改

以下为**所有 13 个共享组件**（从 `src/components/` 复制）：
```
Breadcrumbs.tsx, CTAButton.tsx, FAQ.tsx, Features.tsx, Footer.tsx,
Gallery.tsx, GameIntro.tsx, Header.tsx, Hero.tsx, HomePage.tsx,
ProsCons.tsx, ScrollReveal.tsx, StructuredData.tsx, SystemReq.tsx
```
其中 `ScrollReveal.tsx` 还需要同目录下的 `hooks/useScrollReveal.ts`。

**⚠️ 最容易漏掉的是 StructuredData.tsx** — 这个组件是 SEO JSON-LD 输出核心，如果不复制，page.tsx 会报导入错误，只能回退手写 `<script>` 标签。

复制后需要调整的组件：
- **Header.tsx**：修改 navLinks 数组和 steamUrl（改为该站 Steam 链接）。可能有或没有 Guides 下拉菜单、可能有不同 CTA 文案
- **Footer.tsx**：修改链接列表和版权信息。⚠️ 某些站的 Footer 布局完全不同于 fatekeeper（如 TBH 用 `<details>` accordion，IHNC 有特殊 logo），需要对照 Astro 源的 `Footer.astro` 重写
- **HomePage.tsx**：修改组件组合。⚠️ 不要假设所有站都用相同 section — 必须对照 Astro 源 `index.astro` 确认实际使用的组件列表和顺序

不需要改的组件（纯渲染，通过 props 接收数据）：Breadcrumbs, CTAButton, FAQ, Features, Gallery, GameIntro, Hero, ProsCons, SystemReq

### Phase 3：数据层转换

1. 读取 `D:\newweb\{astro-site}\src\data\game.js`
2. 在 Next.js 项目中创建 `content/{slug}/data.ts`
3. 将 game.js 的内容转为 TypeScript：
```typescript
import type { GameData } from '@/lib/types'
export const data: GameData = { /* 原 game.js 的 export const game 内容 */ }
```
4. 保持所有字段名不变，只加类型标注
5. 如果 game.js 有 types.ts 没定义的字段，扩展 types.ts 接口

### Phase 4：CSS 转换

1. 读取 `D:\newweb\{astro-site}\src\styles\global.css`
2. 写入 Next.js 的 `src/app/globals.css`
3. **仅在第一行加** `@import "tailwindcss";`
4. 其余内容完全不变

### Phase 5：Layout 转换

1. 读取 `D:\newweb\{astro-site}\src\layouts\BaseLayout.astro`
2. 创建 `src/app/layout.tsx`

Layout 转换模板：
```tsx
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getSiteConfig } from '@/lib/site'
import { generateSiteMetadata } from '@/lib/seo'

const site = getSiteConfig()

// ⚠️ 必须用 generateSiteMetadata()，不要手写 metadata
export const metadata: Metadata = generateSiteMetadata(site, {
  pageTitle: 'Guide — Reviews, Builds, System Requirements & FAQ',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts link（从 BaseLayout.astro 的 <link> 提取） */}
        {/* favicon, theme-color meta */}
      </head>
      <body style={{ /* CSS 变量定义 */ } as React.CSSProperties}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

CSS 变量从 globals.css 的 `@theme` 块提取，同时包括字体变量。

**⚠️ 关键：layout.tsx 必须用 `generateSiteMetadata(getSiteConfig(), ...)` 生成 metadata。**
常见错误：手写了 `export const metadata: Metadata = { title: '...' }` 而没用到 `lib/seo.ts` 和 `lib/site.ts` 的工具函数，导致 SEO 管道断连。

### Phase 6：页面转换

遍历 Astro 站点的 `src/pages/` 目录，对每个 `.astro` 页面：

1. 读 Astro 源文件
2. 创建 Next.js 页面 `src/app/{route}/page.tsx`
3. 转换规则：

| Astro | React |
|-------|-------|
| `class="foo"` | `className="foo"` |
| `set:html={str}` | `dangerouslySetInnerHTML={{ __html: str }}` |
| `style="prop:val"` | `style={{ prop: 'val' }}` |
| `style={`prop:${v}`}` | `style={{ prop: v }}` |
| `---` frontmatter 中的 import | 移到文件顶部 |
| `---` frontmatter 中的逻辑 | 移到组件函数体内 |
| `{game.field}` | `{data.field}` |
| `{`expr`}` | `{`expr`}` |
| `<Component />` | `<Component ... />`（通过 props 传数据） |
| `<style>` 块 | 追加到 globals.css |
| `<script>` 块 | useEffect 或独立 `<script>` 标签 |

4. Page Hero 区域的 section 加 `style={{ paddingTop: '8rem' }}`（因为 Next.js 没有 BaseLayout 的 header offset）

5. **首页必须加 StructuredData**：
```tsx
import { getSiteConfig } from '@/lib/site'
import { StructuredData } from '@/components/StructuredData'

const site = getSiteConfig()

export default function Page() {
  return (
    <>
      <StructuredData site={site} data={data} />
      <HomePage data={data} />
    </>
  )
}
```
这会输出 VideoGame + FAQPage JSON-LD。子页面（如 `/review`、`/guide`）也建议加，传 `breadcrumbs` prop 可额外输出 BreadcrumbList。

### Phase 7：独有组件转换

每个站只有 1 个独有组件：
- **I Have No Change**: `WishlistCapture.astro` → `WishlistCapture.tsx`
- **TBH Task Bar Hero**: `TaskbarShowcase.astro` → `TaskbarShowcase.tsx`
- **Soul Land Awakening**: `VideoSection.astro` → `VideoSection.tsx`

转换规则同页面转换。

### Phase 8：站点配置

修改 `src/lib/site.ts`：
```typescript
const sites: SiteConfig = {
  id: '{slug}',
  domain: '{域名}',
  name: '{游戏名}',
  shortName: '{短名称}',
  tagline: '{tagline}',
  description: '{description}',
  keywords: ['keyword1', 'keyword2', ...],
  ogImage: '/images/og-image.jpg',
  languages: ['English', ...],
  theme: {
    colors: { primary, accent, background, text, muted, border },
    fonts: { heading, body },
  },
  googleFonts: { heading, body },
}
```

内容从 Astro `BaseLayout.astro` 的 props 和 `game.js` 提取。`domain` 一定要写对——它会影响 canonical URL、OG URL 和 JSON-LD 中的链接。

### Phase 9：SEO 连接检查 ⚠️

**这是最容易漏掉的步骤。** SEO 工具函数（`lib/seo.ts`）和 `StructuredData` 组件都写好了，但必须手动接到页面上：

- [ ] `layout.tsx` 用了 `generateSiteMetadata(getSiteConfig(), ...)` 生成 metadata（不是手写 Metadata 对象）
- [ ] 首页 `page.tsx` 渲染了 `<StructuredData site={site} data={data} />`
- [ ] `data.ts` 包含完整的 faqs 数组（FAQPage JSON-LD 依赖它）
- [ ] `site.ts` 的 `domain` 字段正确（影响所有结构化数据的 URL）

**典型断连症状**：`lib/seo.ts` 和 `lib/site.ts` 都在，但 build 出来页面没有 JSON-LD、OG 标签不完整——因为 layout.tsx 还是手写的 metadata，page.tsx 没引入 StructuredData。

### Phase 10：构建验证

```bash
cd D:\newweb\ssr-{slug}
npm run build
```

检查：
- [ ] 0 TypeScript 错误
- [ ] 所有路由静态生成
- [ ] 没有 404 或 500
- [ ] layout.tsx 通过 `generateSiteMetadata()` 生成 metadata（非手写）
- [ ] 首页 `.next/server/app/index.html` 包含 `<script type="application/ld+json">`（VideoGame + FAQPage）

如果出错：
1. 看错误信息定位文件和行号
2. 通常是 CSS 变量名不匹配、导入路径错误、字段名拼写问题
3. 修复后重新 build

### Phase 11：部署配置（Vercel + Cloudflare R2）

**目标**：Next.js 部署到 Vercel，`_next/static/` 静态资源走 Cloudflare R2 CDN。

**11.1 复制 R2 上传脚本**

```bash
# 从 ssr-fatekeeper 复制
cp D:\newweb\ssr-fatekeeper\scripts\upload-to-r2.js D:\newweb\ssr-{slug}\scripts\upload-to-r2.js
```

**改一行**：脚本里 `R2_PREFIX` 默认值改为站点 slug（如 `ihnc`、`tbh`、`soul-land`）。

**11.2 补 package.json**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "upload:r2": "node scripts/upload-to-r2.js"   // ← 加这行
  },
  "dependencies": {
    "next": "16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "sharp": "^0.34.5"                            // ← 加这个包
  }
}
```

然后跑 `npm install`。

**11.3 确认 next.config.ts**

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '{域名}' },  // ← 改为该站域名
    ],
  },
  assetPrefix: process.env.ASSET_PREFIX,           // ← 必须有这行
}
```

**11.4 Vercel 环境变量**

在 Vercel 项目设置中配：
```
ASSET_PREFIX=https://{r2-domain}/{slug}
R2_ACCESS_KEY_ID=xxx
R2_SECRET_ACCESS_KEY=xxx
R2_ENDPOINT=https://{account}.r2.cloudflarestorage.com
R2_BUCKET=mb-h5
R2_PREFIX={slug}
```

**部署流程**：
1. `git push` → Vercel 自动 build
2. Vercel post-build 跑 `npm run upload:r2`，把 `.next/static/` 推到 R2
3. 用户访问时 HTML 从 Vercel，JS/CSS 从 R2 CDN

**检查清单**：
- [ ] `scripts/upload-to-r2.js` 存在且 R2_PREFIX 正确
- [ ] `package.json` 有 `upload:r2` 脚本和 `sharp` 依赖
- [ ] `next.config.ts` 有 `assetPrefix` 和正确的 `images.remotePatterns`
- [ ] `npm install` 执行过

---

## 各站特殊处理

### I Have No Change
- 独有页面：story.astro → `src/app/story/page.tsx`
- 独有组件：WishlistCapture.astro → `src/components/WishlistCapture.tsx`
- 404 页面：404.astro → `src/app/not-found.tsx`
- Header：不需要 Guides 下拉菜单，有自己的 logo 布局（两行文字，不是图案）
- HomePage：组件顺序 `Hero → WishlistCapture → GameIntro → Features → Gallery → ProsCons → SystemReq → CTAButton`（Astro 源站使用了所有 section）
- CTAButton：不需要传 data prop（该站 CTAButton 无 data 依赖）
- Gallery：额外传 `hasScreenshots` prop

### TBH Task Bar Hero
- 独有组件：TaskbarShowcase.astro → `src/components/TaskbarShowcase.tsx`
- 页面结构对齐 fatekeeper（14 个路由一致：首页 + 10 子页面 + sitemap/robots/not-found）
- Header：无 Guides 下拉菜单，flat navLinks 7 项（Home/Review/Guide/Tier/Classes/Items/FAQ），CTA 是「Play Free」
- HomePage：组件顺序 `Hero → GameIntro → TaskbarShowcase → Features → Gallery → SystemReq → CTAButton`（**无 ProsCons section**，TBH Astro 源站 index.astro 没用它）
- Footer：完全不同的布局 — `<details>` accordion 结构（Navigate + Legal 两栏），手机端默认折叠
- CSS：像素风主题 `Press Start 2P` + `VT323` + `Inter`，有 rarity 颜色变量（--rarity-common/rare/epic/legendary/cosmic）和 --pixel-green/amber/cosmic/blue/red
- types.ts：需扩展 TBH 特有接口 — `ClassItem`, `RarityItem`, `TierGroup`, `BuildItem`, `BuildCube`, `DlcItem`
- data.ts：TBH 数据字段远超其他站（classes/rarities/tierList/builds/dlc），约 290 行

### Soul Land Awakening
- 独有页面：codes.astro → `src/app/codes/page.tsx`
- 独有组件：VideoSection.astro → `src/components/VideoSection.tsx`
- 缺少 review, guide, classes, tier, items 页面
- CSS 有额外的 ring 颜色变量（--color-ring-1 ~ --color-ring-10）
- Header：navLinks 去掉 Guides 下拉

---

## 常见问题速查

| 问题 | 原因 | 解决 |
|------|------|------|
| 子页面内容空白/不可见 | `.reveal` 类默认 `opacity:0`，但子页面没调用 `useScrollReveal()` | 从 ssr-fatekeeper 复制 `ScrollReveal.tsx` 组件，每个子页面加 `<ScrollReveal />` |
| CSS 变量不生效 | globals.css 的 @theme 块变量名和组件中使用的不一致，或 layout.tsx 的 `<body>` 没传 `style={themeVars}` | 检查 Astro 原 global.css 的 @theme 变量名确保一致；确保 layout.tsx 的 body 有 `style={themeVars} as React.CSSProperties` |
| 图片不显示 | 路径不对 | Astro 用 `/images/xxx`，确保 public/images/ 有对应文件 |
| CTAButton props 报错 | 接口是 `{ data, title?, subtitle?, note? }` | 传 `data={data}` 作为必填 prop |
| 页面白屏 | 组件导入路径错误 | 检查 `@/components/` 路径 |
| build 失败 | TypeScript 类型不匹配 | 检查 data.ts 的类型标注，扩展 types.ts |
| 字体不加载 | Google Fonts link 未正确转换 | 从 Astro BaseLayout.astro 提取完整 fonts.googleapis.com URL |
| 页面没有 JSON-LD | layout.tsx 手写了 metadata，page.tsx 没加 StructuredData | 见 Phase 9 SEO 连接检查，必须用 `generateSiteMetadata()` 并在首页渲染 `<StructuredData>` |
| `.map()` 无 key 警告 | React 列表渲染缺少 key prop | 给每个 `.map()` 返回的顶层元素加 `key={item.href}` 或 `key={i}` |
| `components/` 目录为空 | 半成品项目只建了骨架但没复制组件 | 从 ssr-fatekeeper 复制全部 13 个共享组件（含 hooks/），再根据各站特殊处理删掉不需要的 |
| 页面路由只有首页和 not-found | 只迁移了 page.tsx，没复制子页面目录 | 从 ssr-fatekeeper 复制子页面文件夹（faq/privacy/tos/disclaimer/jump/review/guide/tier/classes/items），并全局替换 `@/../content/fatekeeper/data` → `@/../content/{slug}/data` |
| 图片显示旧站内容 | public/images/ 还残留前一个站点的图片 | 清理 public/images/，从 Astro 源站重新复制图片 |
| `possibly 'undefined'` TS 错误 | GameData 接口字段设了 optional（`ratingCount?:`），但组件里直接用 `.toLocaleString()` | 加 null-safe：`(data.ratingCount ?? 0).toLocaleString()` 或全局把常用字段改 required |
| `hasScreenshots: true` 重复 | 从前一个站点的 data.ts 模板复制时没删 | 检查 data.ts 末尾，确保没有重复字段 |
