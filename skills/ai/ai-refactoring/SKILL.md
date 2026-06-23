---
name: ai-refactoring
description: AI 重构。用户要重构代码时加载。先定范围，你在后台改完验证。
---

问用户要重构什么。然后：

1. 改之前跑 `npm run typecheck && npm test && npm run build` 记下 baseline
2. 执行重构
3. 再跑一遍验证通过
4. 告诉用户改了哪些

用户只需要知道结果，不需要参与过程。
