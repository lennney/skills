---
name: gate-testcov
description: 🧪 测试覆盖 — 加 E2E 测试 + 组件测试。核心功能有自动化测试保障。
---

# Gate: 测试覆盖

手动测太累了，让机器帮你测。

## 要做的事

加载 `e2e-playwright` 和 `ai-testing` 技能：

1. **核心路径 E2E** → 首页加载 → 导航 → 表单提交 → CTA 跳转
2. **组件测试** → 关键组件渲染、交互、状态变化
3. **AI 辅助生成** → 描述你要测什么，让 AI 帮你写测试

## 验证

```bash
npx playwright test    # E2E 测试全部通过
npm test               # 组件测试全部通过
```
