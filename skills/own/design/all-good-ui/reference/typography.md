# Typography Reference — All-Good-UI (Miranda)

> Miranda says: Typography is the skeleton of your interface. Get it wrong and
> nothing else matters. Get it right and users never notice — which is the point.

---

## Font Selection Principles

- Pick fonts with clear design intent. Every font communicates personality.
- **Avoid overused defaults**: Inter, Roboto, Open Sans, Montserrat, and Lato appear on millions of sites. They are not bad fonts — they are invisible fonts. If your design needs to feel distinctive, look elsewhere.
- Good alternatives for UI work: Source Sans 3, DM Sans, Plus Jakarta Sans, Geist, Satoshi, General Sans, Switzer.
- For editorial or content-heavy sites: Literata, Source Serif 4, Newsreader, Fraunces.
- **Test at real sizes.** A font that looks great at 48px may be unreadable at 14px. Always check the font at body text size (14-16px) before committing.
- Prefer fonts with at least Regular, Medium, and Bold weights. Fonts with only 1-2 weights limit your hierarchy options.

## Font Stack Best Practices

A well-constructed font stack ensures graceful degradation:

```
/* Custom web font with system fallbacks */
font-family: "Your Font", "Your Font Fallback", system-ui, -apple-system, sans-serif;

/* System font stack (zero network cost) */
font-family: system-ui, -apple-system, "Segoe UI", sans-serif;

/* Monospace stack */
font-family: "Your Mono", ui-monospace, "Cascadia Code", "Fira Code", monospace;
```

- Always end with a generic family: `sans-serif`, `serif`, or `monospace`.
- Use `system-ui` as the primary fallback for sans-serif stacks — it resolves to the platform's native font (SF Pro on macOS, Segoe UI on Windows, Roboto on Android).
- For CJK content, place CJK fonts after Latin fonts in the stack so Latin characters render from the Latin font.

## Type Scale Systems

### Modular Scale

Pick a base size and a ratio. Multiply up for headings, divide down for small text.

| Ratio Name     | Value | Character                  |
|----------------|-------|----------------------------|
| Minor Third    | 1.2   | Compact, good for dashboards |
| Major Third    | 1.25  | Balanced, most versatile   |
| Perfect Fourth | 1.333 | Generous, good for editorial |
| Golden Ratio   | 1.618 | Dramatic, use sparingly    |

Example with Major Third (1.25), base 16px:

```
--text-xs:   10px   (16 / 1.25 / 1.25)
--text-sm:   13px   (16 / 1.25)
--text-base: 16px
--text-lg:   20px   (16 * 1.25)
--text-xl:   25px   (16 * 1.25^2)
--text-2xl:  31px   (16 * 1.25^3)
--text-3xl:  39px   (16 * 1.25^4)
--text-4xl:  49px   (16 * 1.25^5)
```

### Fluid Typography

Use `clamp()` to eliminate breakpoint jumps:

```css
/* Pattern: clamp(min, preferred, max) */
font-size: clamp(1rem, 0.5rem + 1.5vw, 1.5rem);

/* Practical scale */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);       /* 16-18px */
--text-lg:   clamp(1.125rem, 1rem + 0.5vw, 1.375rem);       /* 18-22px */
--text-xl:   clamp(1.25rem, 1rem + 1vw, 1.75rem);            /* 20-28px */
--text-2xl:  clamp(1.5rem, 1rem + 1.5vw, 2.25rem);           /* 24-36px */
--text-3xl:  clamp(1.875rem, 1rem + 2.5vw, 3rem);            /* 30-48px */
```

- The `preferred` value (middle argument) controls when scaling begins. Use `rem + vw` for the smoothest curve.
- Never let body text go below 14px or above 20px.

## Five-Level Size Hierarchy

Every interface needs exactly five distinct text sizes. More creates noise; fewer limits expression.

| Level      | Role               | Typical Range | Weight     |
|------------|--------------------|---------------|------------|
| Display    | Hero, page title   | 36-60px       | 700-800    |
| Heading    | Section headers    | 24-32px       | 600-700    |
| Subheading | Card titles, labels| 18-22px       | 500-600    |
| Body       | Running text       | 15-18px       | 400        |
| Caption    | Metadata, help text| 12-14px       | 400        |

- Each level should be clearly distinguishable from adjacent levels. If you squint and two sizes look the same, merge them.
- Display and Caption are used sparingly. Body and Heading carry most of the interface.

## Line Height Rules

```css
/* Headings: tight */
h1, h2        { line-height: 1.1 - 1.2; }
h3, h4        { line-height: 1.2 - 1.3; }

/* Body text: comfortable */
p, li, td     { line-height: 1.5 - 1.6; }

/* Small text: slightly more generous */
.caption      { line-height: 1.4 - 1.5; }

/* Single-line UI elements: use 1 */
button, label { line-height: 1; }
```

- Line height scales inversely with font size: larger text needs tighter leading, smaller text needs more air.
- For long-form reading (articles, documentation), 1.6-1.8 improves comfort.
- Never use unitless values below 1.0 — descenders will clip.

## Font Weight Usage

- **Use at most 3 weights** per typeface in a project. More than 3 creates visual noise and increases file size.
- A solid trio: Regular (400) for body, Medium (500) for emphasis, Bold (700) for headings.
- Avoid weight 300 (Light) for body text on screens — it renders poorly at small sizes on non-retina displays.
- Avoid weight 900 (Black) except for display/hero text.
- If a design uses both weight and size to create hierarchy, weight alone should be enough to distinguish levels. If removing size differences makes the hierarchy disappear, your weights are too similar.

## Font Loading Strategy

### Preventing Layout Shift

```css
/* Define fallback with size-adjust to match web font metrics */
@font-face {
  font-family: "Your Font Fallback";
  src: local("Arial");
  size-adjust: 104%;           /* tweak to match your web font */
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}
```

### FOIT vs FOUT

- **FOIT** (Flash of Invisible Text): `font-display: block` — text disappears until font loads. Bad for performance metrics.
- **FOUT** (Flash of Unstyled Text): `font-display: swap` — shows fallback immediately, swaps when ready. Better for users.
- **Best practice**: Use `font-display: swap` with a size-adjusted fallback to minimize the visual shift.

### Loading Priority

```html
<!-- Preload the most critical font file (usually Regular weight) -->
<link rel="preload" href="/fonts/your-font-regular.woff2"
      as="font" type="font/woff2" crossorigin>
```

- Preload at most 1-2 font files. Preloading everything defeats the purpose.
- Subset fonts to include only needed character ranges. For Latin-only sites, this can reduce file size by 70-90%.
- Always use WOFF2 format. It has the best compression and near-universal support.

## Letter Spacing

```css
/* Large display text: tighten */
.display       { letter-spacing: -0.02em; }
h1             { letter-spacing: -0.015em; }

/* Body text: leave alone */
p              { letter-spacing: normal; }    /* or 0 */

/* Small uppercase labels: open up */
.label-caps    { letter-spacing: 0.05em; text-transform: uppercase; }

/* Monospace: never adjust */
code           { letter-spacing: normal; }
```

- Negative tracking on large text compensates for the optical looseness that occurs as size increases.
- Never apply negative letter-spacing to body text. It hurts readability.
- Uppercase text at small sizes always needs positive letter-spacing (0.03-0.08em) to remain legible.

## Text Wrapping

```css
/* Headings: balance line lengths */
h1, h2, h3 { text-wrap: balance; }

/* Body paragraphs: avoid orphans */
p { text-wrap: pretty; }
```

- `text-wrap: balance` distributes text evenly across lines. Ideal for headings and short blocks (up to ~6 lines in most browsers).
- `text-wrap: pretty` prevents single-word last lines (orphans) in paragraphs. Slightly better than `balance` for long text.
- Both are progressive enhancements — browsers that do not support them fall back to normal wrapping.

## Numeric Display

```css
/* Data tables, counters, prices */
.data-value    { font-variant-numeric: tabular-nums; }

/* Fractions in recipes, measurements */
.fraction      { font-variant-numeric: diagonal-fractions; }

/* Ordinals (1st, 2nd) */
.ordinal       { font-variant-numeric: ordinal; }
```

- `tabular-nums` gives every digit the same width so columns of numbers align vertically. Essential for tables, dashboards, and timers.
- Not all fonts support these features. Check OpenType feature support before relying on them.
- For prices and currency, always use `tabular-nums` so decimal points align.

## Anti-Patterns

1. **Too many font families.** Maximum 2-3 per project (one sans, one serif or mono). Every additional family adds load time and visual complexity.
2. **Similar sizes clustering.** If your scale has 14px, 15px, and 16px all in use, the differences are imperceptible. Consolidate.
3. **Missing fallbacks.** A font stack of just `"Custom Font"` with no fallback means system default serif on failure. Always specify the chain.
4. **Using px for everything.** Base sizes should be in `rem` so they respect user font-size preferences. Use `px` only for optical adjustments (letter-spacing, borders).
5. **Heading sizes that do not scale down.** A 60px heading on desktop must not stay 60px on a 375px phone screen. Use fluid typography or media queries.
6. **Decorative fonts for body text.** Display and script fonts are for headings only. Body text demands high legibility at sustained reading lengths.
7. **Ignoring line length.** Text lines longer than 80 characters cause eye-tracking fatigue. Constrain with `max-width` (see spacing reference).
8. **Loading all weights upfront.** If your page only uses Regular and Bold, do not load Light, Medium, SemiBold, ExtraBold, and Black. Each unused weight is wasted bandwidth.
