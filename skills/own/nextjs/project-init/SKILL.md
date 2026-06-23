---
name: project-init
description: Scaffold a Next.js project with Tailwind, shadcn/ui, ESLint, and a clean directory structure. Use when starting a new project, setting up a repo, or standardizing project conventions.
---

# Project Init (Next.js)

Standard workflow for scaffolding a production-ready Next.js project.

## Step 1: Create the project

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

| Flag | Value | Why |
|------|-------|-----|
| `--typescript` | on | TypeScript by default |
| `--tailwind` | on | Tailwind v4 |
| `--eslint` | on | Lint setup |
| `--app` | on | App Router |
| `--src-dir` | on | `src/` structure |
| `--import-alias` | `"@/*"` | Clean imports |

## Step 2: Add shadcn/ui

```bash
npx shadcn@latest init -d  # --defaults: New York style, neutral color
npx shadcn@latest add button card dialog dropdown-menu form input
# Add as needed: toast, table, sheet, tabs, etc.
```

## Step 3: Directory structure

```
src/
├── app/
│   ├── (marketing)/     ← Route group: public pages
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/     ← Route group: authenticated pages
│   │   └── page.tsx
│   ├── api/             ← Route handlers
│   ├── layout.tsx       ← Root layout
│   └── page.tsx         ← Landing
├── components/
│   ├── ui/              ← shadcn/ui components
│   └── features/        ← Feature-specific components
├── lib/
│   ├── utils.ts         ← cn(), formatters
│   └── constants.ts     ← Site config
└── styles/
    └── globals.css      ← Tailwind entry
```

## Step 4: Essential config files

**`tsconfig.json`** — verify paths:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**`tailwind.config.ts`** — add content paths if missing:

```ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  // ...
}
```

**`src/lib/utils.ts`** — shadcn utility:

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Step 5: Git init

```bash
git init
git add .
git commit -m "chore: scaffold Next.js project"
```

## Step 6: Verify it runs

```bash
npm run dev
# Open http://localhost:3000 — confirm blank page loads without errors
npm run build
# Confirm build succeeds
```

## Acceptance Criteria

1. `npm run dev` starts without TypeScript errors
2. `npm run build` succeeds
3. shadcn/components render without hydration errors
4. Directory structure matches the convention above
