---
name: layouts-routing
description: Next.js App Router layout patterns — nested layouts, loading/error boundaries, route groups, and parallel routes. Use when designing page structure, organizing routes, or handling loading/error states.
---

# Layouts & Routing (Next.js App Router)

Practical patterns for structuring pages in App Router.

## 1. Route Groups (Organize Without Affecting URL)

```tsx
src/app/
├── (marketing)/        ← / (root, landing page)
│   ├── page.tsx
│   └── layout.tsx      ← Marketing nav, footer
├── (dashboard)/        ← /dashboard
│   ├── dashboard/
│   │   └── page.tsx    ← /dashboard
│   └── layout.tsx      ← Sidebar, dashboard header
├── (auth)/             ← /login, /register (no layout inheritance)
│   ├── login/page.tsx
│   └── register/page.tsx
```

Route groups `(name)` let you:
- Share layouts between routes
- Prevent layout nesting
- Separate concerns without URL changes

## 2. Layout Nesting & Persistence

```tsx
// src/app/layout.tsx — Root layout (required, wraps everything)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// src/app/(dashboard)/layout.tsx — Dashboard layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
```

Layouts **persist across navigations** (unlike pages). Only the `children` segment re-renders.

## 3. Loading & Error Boundaries

Every route segment can have its own loading and error states:

```tsx
// app/dashboard/loading.tsx — Instant loading state (streaming)
export default function Loading() {
  return <Skeleton className="w-full h-96" />
}

// app/dashboard/error.tsx — Client Component error boundary
'use client'
export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2>Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
```

## 4. Parallel Routes (Multiple Pages in One View)

```tsx
// app/dashboard/layout.tsx
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">{team}</div>
      <div>{analytics}</div>
      <div className="col-span-3">{children}</div>
    </div>
  )
}
```

```tsx
// app/dashboard/@team/page.tsx — /dashboard team slot
// app/dashboard/@analytics/page.tsx — /dashboard analytics slot
```

## 5. Intercepting Routes (Modals)

```tsx
// app/feed/(..)photo/[id]/page.tsx — Intercept /photo/123 from /feed
// When navigated from feed: renders as modal overlay
// When navigated directly: renders as normal page
```

## Quick Reference

| Pattern | File Convention | Use Case |
|---------|----------------|----------|
| Route group | `(name)/` | Organize, separate layouts |
| Loading | `loading.tsx` | Streaming UI |
| Error | `error.tsx` | Error boundary |
| Not found | `not-found.tsx` | 404 per segment |
| Parallel | `@slot/` | Multiple pages in one layout |
| Intercept | `(.)` `(..)` `(...)` | Modal from list |

## Acceptance Criteria

1. Route groups organize pages without changing URLs
2. Loading state shows during page transitions (streaming)
3. Error boundary catches segment errors without crashing the app
4. Layouts persist across navigations (not remounted)
