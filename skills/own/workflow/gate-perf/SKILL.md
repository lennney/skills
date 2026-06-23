---
name: gate-perf
description: ⚡ 性能优化 — 提升 Lighthouse 分数、优化 Core Web Vitals、减少 bundle 大小。网站基本功能完成后做。
---

# Gate: 性能优化

网站的 Level 1 跑通了，现在让它更快。

## 要做的事

加载 `performance` 技能，依次检查：

1. **Lighthouse 跑分** → 目标：Desktop > 95, Mobile > 85
2. **Bundle 分析** → 有没有太大的依赖？能否 dynamic import？
3. **图片优化** → next/image、WebP、懒加载
4. **字体优化** → Google Fonts display=swap、preload
5. **Core Web Vitals** → LCP < 2.5s, FID < 100ms, CLS < 0.1

## 验证

```bash
npm run build
# 然后用 Lighthouse 测生产构建
```
