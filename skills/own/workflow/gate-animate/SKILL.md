---
name: gate-animate
description: ✨ 动效与交互 — Framer Motion、滚动动画、过渡效果。让网站用起来更流畅、更愉悦。
---

# Gate: 动效与交互

网站功能齐全了，加点质感。

## 要做的事

1. **页面过渡** → 路由切换时的 fade/slide
2. **滚动动画** → 元素进入视口时渐入
3. **微交互** → hover 反馈、点击波纹、加载骨架屏
4. **交互动效** → 弹窗/菜单的展开收起、数字滚动

## 原则

- 动效服务于体验，不为了动而动
- 优先 CSS transition/animations，需要时用 Framer Motion
- 移动端慎重，避免卡顿
- 用户 prefers-reduced-motion 时关闭动效
