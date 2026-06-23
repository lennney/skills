---
name: styling-tailwind
description: Tailwind CSS v4 practical patterns — design tokens, responsive strategy, component styling, and common patterns. Use when writing styles, building responsive layouts, or standardizing design tokens.
---

# Styling with Tailwind CSS v4

Practical patterns for writing maintainable Tailwind styles.

## 1. Design Tokens in `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss"

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
} satisfies Config
```

Use semantic names (`brand`, `accent`, `muted`) over generic ones (`blue`, `gray`).

## 2. Responsive Strategy

**Mobile-first:** write base styles for mobile, add breakpoints to override.

```tsx
// ✅ Good: mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8" />

// ❌ Not: desktop-first (harder to maintain)
<div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1" />
```

**Breakpoints:**

| Prefix | Min-width | Targets |
|--------|-----------|---------|
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Wide |
| `2xl:` | 1536px | Ultra-wide |

## 3. Component Styling Patterns

**`cn()` utility (from shadcn) for conditional styles:**

```tsx
import { cn } from "@/lib/utils"

function Button({ variant = "primary", className }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-brand-600 text-white hover:bg-brand-700",
        variant === "outline" && "border border-input bg-background hover:bg-accent",
        className  // Allow caller overrides
      )}
    />
  )
}
```

**Extract repeated patterns into reusable classes (not components):**

```css
/* globals.css */
@layer utilities {
  .flex-center {
    @apply flex items-center justify-center;
  }
  .text-balance {
    text-wrap: balance;
  }
}
```

## 4. Common Layout Patterns

**Centered content with max-width:**

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

**Sticky header + scrollable content:**

```tsx
<div className="min-h-screen">
  <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur" />
  <main className="mx-auto max-w-7xl px-4 py-8" />
</div>
```

**Card grid:**

```tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</div>
```

## 5. Dark Mode

```tsx
// tailwind.config.ts
export default {
  darkMode: "class",  // or "media" for system preference
}

// Usage
<div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100" />
```

## Acceptance Criteria

1. Responsive designs use mobile-first breakpoints (sm/md/lg)
2. `cn()` utility handles conditional + override classes
3. Design tokens (colors, fonts) use semantic names
4. Dark mode works with `dark:` prefix
