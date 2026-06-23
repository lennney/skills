# CSS Structure — Emily's Blueprint

> "If I see one more `!important` I'm going to throw this laptop out the window. Structure exists for a reason." — Miranda

This document defines how Miranda's team outputs CSS. Every file, every variable, every selector follows this structure. No exceptions.

---

## Design Tokens (CSS Custom Properties)

All visual decisions live as CSS custom properties on `:root`. Never hardcode values in component styles.

### Naming Convention

```
--{category}-{property}-{variant}
```

### Token Categories

```css
:root {
  /* ── Color ── */
  --color-primary: ;
  --color-primary-light: ;
  --color-primary-dark: ;
  --color-secondary: ;
  --color-accent: ;
  --color-background: ;
  --color-background-card: ;
  --color-background-elevated: ;
  --color-text: ;
  --color-text-muted: ;
  --color-text-subtle: ;
  --color-border: ;
  --color-success: ;
  --color-warning: ;
  --color-error: ;
  --color-info: ;

  /* ── Typography ── */
  --font-family-sans: ;
  --font-family-serif: ;
  --font-family-mono: ;
  --font-size-xs: ;      /* 12px */
  --font-size-sm: ;      /* 14px */
  --font-size-base: ;    /* 16px */
  --font-size-lg: ;      /* 18px */
  --font-size-xl: ;      /* 20px */
  --font-size-2xl: ;     /* 24px */
  --font-size-3xl: ;     /* 30px */
  --font-size-4xl: ;     /* 36px */
  --font-size-5xl: ;     /* 48px */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* ── Spacing ── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* ── Border Radius ── */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* ── Shadows (tinted, never pure black) ── */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.08);

  /* ── Transition ── */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);

  /* ── Z-Index Scale ── */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

### Dark Mode Tokens

Use `html.dark` or `@media (prefers-color-scheme: dark)`:

```css
html.dark {
  --color-background: #1a1a1a;
  --color-background-card: #242424;
  --color-background-elevated: #2e2e2e;
  --color-text: #e8e8e8;
  --color-text-muted: #a0a0a0;
  --color-border: #3a3a3a;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

---

## File Organization

### Single-file projects (plain HTML)

```css
/* ========================================
   1. Reset
   2. Design Tokens
   3. Base / Typography
   4. Layout
   5. Components
   6. Utilities
   7. Dark Mode
   8. Responsive
   ======================================== */
```

### Multi-file projects

```
styles/
  tokens.css          /* Design tokens only */
  reset.css           /* Minimal reset */
  base.css            /* Body, headings, links, lists */
  layout.css          /* Grid, container, section */
  components/
    button.css
    card.css
    form.css
    nav.css
    ...
  utilities.css       /* Helper classes */
  dark.css            /* Dark mode overrides */
```

### CSS Layers (when supported)

```css
@layer reset, tokens, base, layout, components, utilities;
```

---

## Selector Rules

### Naming

Use **flat, descriptive class names**. No BEM unless the project already uses it.

```css
/* Good */
.card { }
.card-header { }
.card-body { }
.card-footer { }
.btn { }
.btn-primary { }
.btn-ghost { }

/* Bad */
.card__header--active { }  /* BEM unless project requires it */
.c-h { }                   /* Cryptic abbreviation */
.div3 { }                  /* Meaningless */
```

### Specificity

- Never use `!important` (only override third-party styles if absolutely necessary)
- Never use ID selectors for styling (`#header` — use `.header`)
- Keep specificity flat: one class per selector when possible
- Use `:where()` to lower specificity when needed

### Nesting (if using native CSS nesting or preprocessor)

Max 2 levels deep:

```css
/* Good */
.card {
  .card-header { }
}

/* Bad */
.page {
  .section {
    .card {
      .card-header {
        .title { }  /* Too deep */
      }
    }
  }
}
```

---

## Layout Rules

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--space-md);
}
```

### Grid

Use CSS Grid for page layout, Flexbox for component alignment:

```css
/* Page layout — Grid */
.page-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

/* Component alignment — Flexbox */
.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
```

### Prefer `gap` over `margin`

```css
/* Good */
.stack { display: flex; flex-direction: column; gap: var(--space-md); }

/* Bad */
.stack > * + * { margin-top: 16px; }
```

---

## Component Pattern

Every component follows this structure:

```css
.component {
  /* 1. Layout */
  display: ;
  gap: ;

  /* 2. Box model */
  padding: ;
  margin: ;
  width: ;

  /* 3. Visual */
  background: ;
  border: ;
  border-radius: ;
  box-shadow: ;

  /* 4. Typography */
  font-family: ;
  font-size: ;
  font-weight: ;
  color: ;

  /* 5. Interaction */
  cursor: ;
  transition: ;
}

/* States */
.component:hover { }
.component:focus-visible { }
.component:active { }
.component:disabled { }
.component[aria-invalid="true"] { }

/* Variants */
.component-primary { }
.component-ghost { }
.component-sm { }
.component-lg { }
```

---

## Responsive Pattern

Mobile-first. Use `min-width` breakpoints:

```css
/* Base: mobile */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Container Queries for components

```css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

---

## Animation Pattern

```css
/* Define once, reuse */
.fade-in {
  animation: fadeIn var(--duration-slow) var(--easing-out) both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Cascade reveal */
.stagger > * {
  animation: fadeIn var(--duration-slow) var(--easing-out) both;
  animation-delay: calc(var(--index, 0) * 80ms);
}

/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Anti-Patterns

| Don't | Do Instead |
| :---- | :--------- |
| `color: #000000` | `color: var(--color-text)` |
| `margin-top: 23px` | `margin-top: var(--space-lg)` |
| `font-size: 14px` (hardcoded) | `font-size: var(--font-size-sm)` |
| `box-shadow: 0 4px 8px black` | `box-shadow: var(--shadow-md)` |
| `z-index: 99999` | `z-index: var(--z-modal)` |
| `!important` | Lower specificity or restructure |
| `#header { }` | `.header { }` |
| `height: 100vh` | `min-height: 100dvh` |
| Inline styles | CSS classes |
| Magic numbers | Design tokens |
