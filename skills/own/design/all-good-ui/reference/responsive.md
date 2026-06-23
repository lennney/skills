# Responsive Design

> Miranda says: A layout that only works on one screen size
> does not work at all. Every breakpoint is a promise
> that the interface will hold together.

## Mobile-First Approach

Write base styles for the smallest screen. Layer complexity upward with `min-width` media queries.

```css
/* Base: mobile */
.grid { display: flex; flex-direction: column; gap: 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .grid { flex-direction: row; flex-wrap: wrap; }
  .grid > * { flex: 1 1 calc(50% - 8px); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid > * { flex: 1 1 calc(33.333% - 11px); }
}
```

Mobile-first is not just a CSS technique. It is a design constraint that forces you to identify what actually matters. If a feature does not fit on a 360px screen, question whether it belongs in the interface at all.

## Viewport Height

**Use `dvh` (dynamic viewport height), never `vh` alone** for full-screen layouts.

```css
.hero {
  min-height: 100dvh;
}
```

On mobile browsers, `100vh` includes the area behind the address bar and bottom navigation. This causes content to be hidden behind browser chrome. `100dvh` accounts for the actual visible viewport, updating as browser toolbars show and hide.

For older browser support, provide a fallback:

```css
.hero {
  min-height: 100vh;      /* fallback */
  min-height: 100dvh;     /* modern browsers */
}
```

Use `min-height`, not `height`. Content that exceeds the viewport should be allowed to grow, not be clipped.

## Container Queries over Media Queries

Media queries ask "how wide is the viewport?" Container queries ask "how wide is my parent?" Components do not know or care about the viewport — they care about the space they are given.

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card { flex-direction: row; }
}

@container (max-width: 399px) {
  .card { flex-direction: column; }
}
```

Use container queries for component-level layout decisions (card orientation, sidebar collapse, grid column count). Use media queries for page-level layout decisions (overall grid structure, navigation pattern).

## Breakpoints

Common reference points:

| Token   | Width    | Typical Devices             |
|:--------|:---------|:----------------------------|
| `sm`    | 640px    | Large phones (landscape)    |
| `md`    | 768px    | Tablets (portrait)          |
| `lg`    | 1024px   | Tablets (landscape), laptops|
| `xl`    | 1280px   | Desktop monitors            |
| `2xl`   | 1536px   | Large desktop monitors      |

These are starting points, not gospel. **Prefer content-driven breakpoints.** If a layout breaks at 920px, add a breakpoint at 920px. Do not force content into arbitrary framework-defined widths. The content dictates where the layout needs adjustment.

Set a maximum content width (typically 1200-1400px) and center it. Ultra-wide monitors should not stretch text lines to 200+ characters.

## Safe Area Insets

Devices with notches, rounded corners, or gesture bars have areas where content should not be placed. Fixed and sticky elements must respect safe area insets.

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
}

.sidebar {
  padding-left: env(safe-area-inset-left);
}
```

Enable safe area coverage in the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Without `viewport-fit=cover`, the browser adds its own padding (white bars), which looks worse than handling it yourself.

## Touch vs Pointer Detection

Do not assume input type based on screen size. A laptop may have a touchscreen. A tablet may have a keyboard attached.

```css
/* Pointer-based hover effects (mouse, trackpad) */
@media (hover: hover) and (pointer: fine) {
  .card:hover { transform: translateY(-2px); }
}

/* Touch-friendly adjustments */
@media (pointer: coarse) {
  .button { min-height: 48px; padding: 12px 24px; }
}
```

`hover: hover` means the device has a primary input that can hover. `pointer: fine` means the primary pointer is precise (mouse). `pointer: coarse` means the primary pointer is imprecise (finger on touchscreen).

## Responsive Images

Every content image should use `srcset` and `sizes` to serve the appropriate resolution:

```html
<img
  src="image-800.webp"
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
  alt="Description of the image"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
>
```

Rules:
- Always include `width` and `height` attributes (or use CSS `aspect-ratio`) to prevent layout shift during loading.
- Use `loading="lazy"` for images below the fold. Never lazy-load the LCP (Largest Contentful Paint) image.
- Prefer modern formats: WebP as baseline, AVIF where supported (use `<picture>` with fallback).
- `decoding="async"` allows the browser to decode the image off the main thread.

## Fluid Typography

Use `clamp()` for font sizes that scale smoothly between breakpoints without media queries:

```css
h1 {
  font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem);
}

body {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
}
```

The formula: `clamp(minimum, preferred, maximum)`.

- **Minimum**: The smallest the text should ever be (accessibility floor).
- **Preferred**: A viewport-relative value that scales.
- **Maximum**: The largest the text should grow to (readability ceiling).

For body text, keep the minimum at 16px (1rem). Smaller body text is hard to read on mobile.

Line length for readability: 45-75 characters per line. Use `max-width` on text containers (typically 65ch-75ch).

## Grid Collapse

Multi-column layouts must degrade gracefully to fewer columns and eventually a single column:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 24px;
}
```

`auto-fit` with `minmax` handles most responsive grid needs without media queries. The `min(300px, 100%)` prevents overflow on screens narrower than the minimum item width.

For asymmetric layouts (sidebar + main), collapse the sidebar to a top section on narrow screens or use a toggle:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .layout { grid-template-columns: 280px 1fr; }
}
```

## Navigation Patterns

- **Desktop (1024px+)**: Horizontal nav bar with visible links. Keep primary navigation items to 7 or fewer.
- **Tablet (768-1023px)**: May keep horizontal nav if items are few. Otherwise, collapse to hamburger.
- **Mobile (<768px)**: Hamburger menu (top) or bottom navigation bar. Bottom nav is preferred for primary actions — it is within thumb reach.

Hamburger menu requirements:
- The menu icon must be labeled (either visible text "Menu" or `aria-label="Menu"`).
- The menu must be a proper `<nav>` landmark.
- Open/close state must be communicated via `aria-expanded`.
- The menu should animate open (slide or fade), not appear instantly.
- Pressing Escape closes the menu.

Bottom nav requirements:
- Maximum 5 items (4 is ideal).
- Each item: icon + label (never icon-only — icon recognition varies widely).
- Active item must be visually distinct (color, weight, indicator line).
- Respect `safe-area-inset-bottom` for gesture-bar devices.

## Anti-Patterns

- **Desktop-first design**: Leads to "squeeze it until it fits" on mobile. The mobile experience is always an afterthought and it shows.
- **Fixed pixel breakpoints only**: Using only 768px and 1024px while ignoring that content wraps awkwardly at 900px. Add breakpoints where the content needs them.
- **Horizontal scroll on mobile**: Almost always a bug. If a table or code block overflows, wrap it in `overflow-x: auto` with a visible scroll indicator. No element should force the page to scroll horizontally.
- **Tiny touch targets on mobile**: A 24px icon with no padding expansion. Desktop-sized controls on a touch device. Test with your thumb, not your mouse cursor.
- **Text that does not reflow**: Fixed-width containers that clip or overflow text on narrow screens. Use relative units and flexible layouts.
- **Hiding critical content on mobile**: Removing features on mobile with `display: none` instead of redesigning the layout. If content matters, it matters on every screen. If it does not matter, consider removing it from desktop too.
- **Viewport-locked elements**: `position: fixed` elements that cover too much of a small screen (persistent banners, chat widgets that block content). On mobile, every pixel counts.
