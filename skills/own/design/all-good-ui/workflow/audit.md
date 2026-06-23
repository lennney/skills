# Quality Audit Workflow

<!-- Miranda's note: If you shipped without running this, we need to talk. -->
<!-- This runs automatically after every build. Non-negotiable. -->

## Pre-Audit Setup

Before touching any checklist item:

1. **Identify scope** — List every page and component that was built or modified in this session
2. **Note the stack** — Framework (React, Astro, vanilla, etc.) and styling system (Tailwind, CSS modules, vanilla CSS, etc.)
3. **Collect URLs** — Local dev URLs or file paths for everything that needs auditing
4. **Screenshot baseline** — Take a before screenshot if modifying existing UI

---

## Audit Checklist

Eighteen categories. No shortcuts.

### 1. Typography

- [ ] No browser default fonts visible anywhere (no Times New Roman, no system serif)
- [ ] Heading hierarchy is visually distinct — each level looks meaningfully different, not just slightly smaller
- [ ] Body text measures approximately 45-75 characters per line (target ~65ch)
- [ ] At least two font weights in use — headings should feel heavier than body text
- [ ] Tabular numbers (`font-variant-numeric: tabular-nums`) on prices, stats, tables, countdowns
- [ ] `text-wrap: balance` on headings, `text-wrap: pretty` on body paragraphs
- [ ] No orphaned single words sitting alone on the last line of important headings

### 2. Color

- [ ] No pure black `#000000` — use near-blacks like `#111`, `#1a1a1a`, or project-specific dark tones
- [ ] No oversaturated neon accents — if it hurts to look at, dial it back
- [ ] Single accent color per view — one accent does the heavy lifting, not three competing for attention
- [ ] Gray temperature is consistent — all grays are either warm or cool, not a random mix
- [ ] No purple-to-blue AI gradient anywhere — that screams "I let the AI design this"
- [ ] Shadows use tinted color, not pure black (`rgba(0,0,0,...)` replaced with warm or brand-tinted shadow)

### 3. Layout

- [ ] Not perfectly symmetrical — slight asymmetry makes designs feel intentional, not template-generated
- [ ] No generic three-column equal-width card grid — vary card sizes, use featured cards, break the monotony
- [ ] Uses `min-h-dvh` instead of `h-screen` (dynamic viewport handles mobile browser chrome)
- [ ] Container has a max-width constraint — content does not stretch edge-to-edge on ultrawide monitors
- [ ] Adequate whitespace — elements have room to breathe, nothing feels cramped
- [ ] Visual depth and layering are present — overlapping elements, elevation differences, z-index variety

### 4. Accessibility (9 Levels)

<!-- This is where it counts. Pretty means nothing if people can't use it. -->

- [ ] **Level 1:** All interactive elements (buttons, links, inputs) have accessible names via label, aria-label, or aria-labelledby
- [ ] **Level 2:** Keyboard navigation works — Tab moves forward, Shift+Tab moves back, Escape closes things
- [ ] **Level 3:** Focus indicators are visible on every interactive element — no `outline: none` without replacement
- [ ] **Level 4:** Modals and drawers trap focus — Tab does not escape behind the overlay
- [ ] **Level 5:** Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] **Level 6:** Touch targets are at least 44x44px on mobile — tiny tap targets are hostile design
- [ ] **Level 7:** Form errors use `aria-describedby` linking error messages to their fields
- [ ] **Level 8:** `prefers-reduced-motion` is respected — animations are suppressed or simplified when requested
- [ ] **Level 9:** Semantic HTML is used — `nav`, `main`, `article`, `section`, `aside`, `header`, `footer` instead of div soup

### 5. Interaction States

<!-- A button with no hover state is like a door with no handle. Technically functional, practically hostile. -->

- [ ] All 8 states implemented where relevant: default, hover, active/pressed, focus, disabled, loading, error, success
- [ ] Hover effects are present on all clickable elements
- [ ] Active/pressed state gives tactile feedback (scale down slightly, darken slightly)
- [ ] Transitions are smooth, not instant — state changes use CSS transitions
- [ ] Loading state uses skeleton loaders, not spinners (unless the wait is under 1 second)
- [ ] Empty states include a call-to-action — never just "No items" with nothing to do
- [ ] Error states are helpful — they explain what went wrong and suggest what to do next

### 6. Animation

- [ ] Only `transform` and `opacity` are animated (no animating `width`, `height`, `top`, `left`, `margin`)
- [ ] Timing is appropriate — micro-interactions 100-200ms, page transitions 200-500ms
- [ ] No bounce or elastic easing on UI elements (save that for games)
- [ ] `will-change` is applied only during animation, not permanently
- [ ] No continuous blur animations on large areas (GPU killer)

### 7. SEO / AIO

- [ ] `<title>` tag is present and unique per page
- [ ] `<meta name="description">` is present and descriptive
- [ ] OG tags are complete: `og:title`, `og:description`, `og:image` (absolute URL), `og:url`, `og:type`
- [ ] Twitter Card tags present: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] JSON-LD structured data matches the rendered page content
- [ ] Heading hierarchy is correct — one `h1` per page, `h2` > `h3` nesting without skipping levels
- [ ] All images have meaningful `alt` text (not "image" or "photo")
- [ ] `<html lang="...">` attribute is set correctly
- [ ] Favicon is present and renders correctly

### 8. AI-Slop Detection

<!-- The whole point of Miranda is to catch this. -->

- [ ] Layout is not perfectly symmetrical with identical padding on all sides
- [ ] Not using Inter, system-ui, or default font stack without customization
- [ ] No generic blue/gray color scheme that says "I didn't think about color"
- [ ] No buzzword copy: "streamline", "leverage", "unlock", "empower", "revolutionize"
- [ ] Card layouts have variation — different sizes, featured items, visual hierarchy
- [ ] Some personality or character is present — the design feels like a human made choices

### 9. Responsive Design

- [ ] Mobile layout does not break at any width from 320px to 1920px+
- [ ] No horizontal scroll appears at any breakpoint
- [ ] Touch targets are adequate on mobile (min 44x44px)
- [ ] `safe-area-inset` padding is applied for notched/island devices
- [ ] Images are responsive — use `srcset`, `sizes`, or CSS `object-fit`

### 10. Component Consistency

- [ ] Same type of component looks the same everywhere (buttons, cards, inputs)
- [ ] Spacing between similar elements is uniform
- [ ] Border radius values are consistent across components of the same type
- [ ] Icon sizes match text sizes in their context

### 11. Loading Performance

- [ ] No layout shift when content loads (CLS)
- [ ] Images have explicit `width` and `height` attributes or aspect-ratio set
- [ ] Fonts use `font-display: swap` or `optional`
- [ ] No render-blocking resources that are not critical

### 12. Dark Mode (if applicable)

- [ ] No pure `#000000` backgrounds
- [ ] Text contrast is sufficient but not blinding white
- [ ] Shadows are adjusted for dark backgrounds
- [ ] Images and illustrations work on dark backgrounds
- [ ] All interactive states are still visible

### 13. Forms (if applicable)

- [ ] Labels are visible and associated with inputs
- [ ] Placeholder text is supplementary, not the only label
- [ ] Validation messages appear near the relevant field
- [ ] Required fields are indicated
- [ ] Submit button state reflects form validity

### 14. Navigation

- [ ] Current page/section is visually indicated
- [ ] Navigation is reachable via keyboard
- [ ] Mobile navigation pattern is appropriate (hamburger, tab bar, etc.)
- [ ] Back navigation works as expected

### 15. Content Hierarchy

- [ ] Most important content is visually dominant
- [ ] Visual flow guides the eye in the intended reading order
- [ ] Secondary content is visually subordinate
- [ ] CTAs are clearly distinguishable from surrounding content

### 16. Spacing System

- [ ] Spacing values follow a consistent scale (4px, 8px, 16px, 24px, 32px, etc.)
- [ ] No magic numbers — spacing values are from the system, not arbitrary
- [ ] Vertical rhythm is maintained

### 17. Border and Divider Usage

- [ ] Borders are not overused — whitespace can separate elements too
- [ ] Border colors are subtle (not harsh black lines)
- [ ] Dividers serve a purpose — they separate distinct groups, not every single item

### 18. Image and Media

- [ ] Images are appropriately compressed
- [ ] Decorative images use `alt=""` or are CSS backgrounds
- [ ] No stretched or distorted images
- [ ] Placeholder/fallback for slow-loading images

---

## Severity Classification

### Auto-fix (Critical)

These get fixed immediately without asking. No debate.

- **Accessibility failures** — missing labels, broken keyboard nav, insufficient contrast
- **Broken responsive layouts** — horizontal scroll, overlapping content, unreadable text
- **Missing SEO essentials** — no title, no meta description, no OG tags
- **Contrast failures** — text that fails WCAG AA
- **Janky animations** — animating layout properties, no reduced-motion support
- **AI-slop indicators** — perfect symmetry with default fonts and blue/gray palette

### Report Only (Preference)

These get flagged with recommendations. The user decides.

- Font size fine-tuning (14px vs 15px body text)
- Subjective spacing adjustments
- Color temperature preferences
- Animation timing tweaks
- Layout density preferences

---

## Audit Report Format

After completing the audit, produce a report in this format:

```
## Audit Report

### Critical (Fixed)
- [what was wrong] -> [what was done]
- [what was wrong] -> [what was done]

### Suggestions (Your Call)
- [observation] -- [recommendation]
- [observation] -- [recommendation]

### Pass
- [categories that passed cleanly]

### Verdict
[One-line summary. Be honest. Be specific.]
```

### Verdict Examples

- "Typography is solid, color needs work, and that card grid is committing crimes against layout."
- "Clean build. Two minor spacing suggestions, nothing critical. Ship it."
- "Accessibility is a disaster — fixed 6 critical issues. Please test with a screen reader before final ship."
- "This looked AI-generated before the audit. It looks human-made now. Big improvement."
