---
name: ai-git-workflow
description: AI Git 操作。用户需要 commit/PR 时加载。你在后台生成好，用户确认即可。
---

帮用户处理 Git 操作：

**Commit：** `git diff --cached` 看完自动写 message，给用户确认
**PR：** 基于 `git log main..HEAD` 生成描述
**冲突：** 分析两边改动意图，合并后让用户验证
