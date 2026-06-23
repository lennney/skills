---
name: gate-a11y
description: ♿ 无障碍优化 — WCAG AA 标准、键盘导航、屏幕阅读器支持。让网站对所有人可用。
---

# Gate: 无障碍

网站能用，但要让所有人都能用。

## 要做的事

加载 `accessibility` 技能，检查这 4 项：

1. **键盘导航** → Tab 顺序对吗？所有交互元素都能键盘操作？
2. **屏幕阅读器** → 图片有 alt？表单有 label？ARIA 属性正确？
3. **对比度** → 文字和背景的对比度 ≥ 4.5:1
4. **焦点管理** → 弹窗焦点锁定、关闭后焦点返回

## 验证

```bash
# 用 axe DevTools 或 Lighthouse Accessibility 跑分
# 目标：Lighthouse Accessibility > 95
```
