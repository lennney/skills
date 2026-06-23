---
name: project-init
description: 项目初始化。用户要搭新 Next.js 项目时加载。按顺序执行脚手架命令。
---

Run these steps in order:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-app
npx shadcn@latest init -d
npx shadcn@latest add button card dialog form input sheet tabs toast
```

Create this structure:
```
src/app/          layout.tsx + page.tsx + globals.css
src/components/   ui/ + features/
src/lib/          utils.ts (cn) + constants.ts
public/images/
```

Finish with `git init && git add . && git commit -m "chore: scaffold"` and `npm run build` verification.
