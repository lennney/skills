---
name: gate
description: 建站工作流入口。用户在什么阶段都不知道时问一句，然后路由到对应 gate-*。
---

Ask what they want to do. Route to the right skill:

- **想搭新站** → `/gate-discuss`
- **正在开发** → `/gate-frontend`
- **要上线了** → `/gate-seo` → `/gate-deploy`
- **想优化** → `/gate-optimize`
- **需要帮忙** → `/gate-ai`

用户不需要知道技术细节。你来做，只问必须问的问题。
