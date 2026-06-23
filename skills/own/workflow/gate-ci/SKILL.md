---
name: gate-ci
description: 🔄 CI/CD — GitHub Actions、自动部署、预览部署。每次提交自动构建和测试。
---

# Gate: CI/CD

提交代码自动部署，不用手动操作。

## 要做的事

加载 `vercel-deploy` 技能：

1. **Vercel 自动部署** → 推送 main 分支自动构建上线
2. **Preview Deployments** → PR 自动生成预览链接
3. **CI 检查** → PR 自动跑 lint + typecheck + test
4. **环境变量** → 生产/预览环境分别配置

## 验证

```bash
git push
# Vercel 自动构建 → 访问预览链接
# 合并 main → 自动上线
```
