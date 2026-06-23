# Spacing Reference — All-Good-UI (Miranda)

> Miranda says: Whitespace is not empty space. It is structure. The distance
> between elements tells users what belongs together and what does not.

---

## 4pt Base Grid System

All spacing values derive from a 4px base unit. This creates a consistent visual rhythm across every component and layout.

Why 4px, not 8px:
- 4px gives you finer control (the difference between 8px and 16px is large; 8px and 12px is more nuanced).
- Every 4px value divides cleanly into common screen densities (1x, 1.5x, 2x, 3x).
- You still use 8px as your workhorse — 4px just gives you a smaller step when you need it.

## Spacing Scale

| Token   | Value | Common Use                                    |
|---------|-------|-----------------------------------------------|
| --sp-1  | 4px   | Inline icon-to-text gap, tight element pairs   |
| --sp-2  | 8px   | Related items within a group, small padding    |
| --sp-3  | 12px  | Input padding, compact card padding            |
| --sp-4  | 16px  | Standard card padding, paragraph spacing       |
| --sp-5  | 20px  | Comfortable card padding, form field gaps      |
| --sp-6  | 24px  | Section padding on mobile, group separation    |
| --sp-8  | 32px  | Section separation, card gaps in grids         |
| --sp-12 | 48px  | Major section breaks, page-level padding       |
| --sp-16 | 64px  | Hero spacing, section top/bottom on desktop    |
| --sp-24 | 96px  | Large section breaks, page-level vertical gaps |

Skip values not in the scale. If you find yourself typing `margin: 37px`, stop and pick the nearest scale value. Arbitrary numbers are a sign of ad-hoc decisions.

## Semantic Spacing Tokens

Map the numeric scale to purpose-driven tokens:

```css
:root {
  --space-xs:   4px;     /* tightest grouping */
  --space-sm:   8px;     /* compact spacing */
  --space-md:   16px;    /* default / baseline */
  --space-lg:   24px;    /* comfortable separation */
  --space-xl:   32px;    /* distinct grouping */
  --space-2xl:  48px;    /* section-level gaps */
  --space-3xl:  64px;    /* page-level breathing room */
}
```

- Use semantic tokens in component CSS. This way, changing `--space-md` from 16px to 20px updates every component that uses it.
- Do not mix raw pixel values and tokens in the same project. Pick one system and commit.

## Gap Over Margin

Prefer CSS `gap` for spacing between siblings. It is cleaner, more predictable, and eliminates margin-collapse headaches.

```css
/* Good: gap handles all inter-element spacing */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.button-group {
  display: flex;
  gap: var(--space-sm);
}

/* Avoid: margin on children creates edge cases */
.card-grid > * {
  margin-bottom: 24px;  /* last child has unwanted bottom margin */
}
```

### When Margin Is Still Appropriate

- Between block-level content elements in prose (paragraphs, headings, lists) where a flex/grid container is overkill.
- For `margin-block` on typographic elements to create vertical rhythm.
- For negative margin in advanced layout techniques (use sparingly).

When using margin:
- Prefer `margin-block` and `margin-inline` over `margin-top`/`margin-left` for better logical property support (RTL, writing modes).
- Apply margin in one direction only per context. Typically `margin-block-start` (top) or `margin-block-end` (bottom), not both. This avoids margin collapse surprises.

## Consistent Padding Within Component Types

All instances of the same component should use the same internal padding. Inconsistency breaks pattern recognition.

```css
/* Every card in the system uses the same padding */
.card         { padding: var(--space-lg); }          /* 24px */
.card-compact { padding: var(--space-md); }          /* 16px — named variant */

/* Every button uses consistent horizontal padding */
.btn     { padding: 10px var(--space-md); }          /* 10px 16px */
.btn-sm  { padding: 6px var(--space-sm); }           /* 6px 8px */
.btn-lg  { padding: 14px var(--space-lg); }          /* 14px 24px */
```

- Define padding per component in one place. If `.card` padding appears in 5 different CSS files with 5 different values, the system is broken.
- Horizontal padding is usually equal to or slightly larger than vertical padding. This accounts for the fact that text lines are wider than they are tall.

## Visual Rhythm and Whitespace

### Proximity Principle (Gestalt)

Related items should be closer together than unrelated items. This is the most important spacing rule.

```
[Heading]              ← 8px gap (tight: heading belongs to content below)
[Paragraph]
                       ← 32px gap (loose: separates this section from the next)
[Heading]
```

The ratio between "within-group" spacing and "between-group" spacing should be at least 2:1. Ideally 3:1 or 4:1.

### Vertical Rhythm

For content-heavy pages, establish a baseline increment and stick to it:

```css
h1 { margin-block: 48px 16px; }   /* large gap before, small after */
h2 { margin-block: 40px 12px; }
h3 { margin-block: 32px 8px; }
p  { margin-block: 0 16px; }      /* consistent paragraph spacing */
ul { margin-block: 0 16px; }
```

- The space before a heading should always be larger than the space after it. This visually attaches the heading to its following content.
- Paragraph spacing (`margin-block-end`) should be consistent. Do not vary it paragraph by paragraph.

## Container Constraints

### Page-Level Max-Width

```css
.container {
  width: 100%;
  max-width: 1200px;         /* common default */
  margin-inline: auto;        /* center horizontally */
  padding-inline: var(--space-md);  /* prevent edge-to-edge on mobile */
}
```

Common max-width values:
- **960px**: Compact, good for text-focused apps.
- **1200px**: Balanced, works for most sites.
- **1440px**: Wide, good for dashboards and data-heavy layouts.

Always add horizontal padding (16-24px) so content does not touch screen edges on mobile.

### Content Width Variants

```css
.content-narrow  { max-width: 640px; }    /* blog post, article */
.content-default { max-width: 960px; }    /* general content */
.content-wide    { max-width: 1200px; }   /* dashboard, grid layouts */
.content-full    { max-width: 1440px; }   /* admin panels, data tables */
```

## Paragraph Max-Width

Optimal reading line length is 50-75 characters, with 65 characters being the sweet spot.

```css
.prose {
  max-width: 65ch;    /* ~65 characters wide */
}
```

- `ch` unit is based on the width of the "0" character in the current font. It is the most reliable way to constrain line length relative to the actual typeface.
- For wider layouts (dashboards, multi-column), this rule applies to individual text blocks, not the whole container.
- Headings can exceed 65ch since they are read differently than body text. But even headings benefit from staying under 40ch on large screens.

## Responsive Spacing

Spacing should scale with viewport size. Larger screens can afford more whitespace.

```css
:root {
  --space-section: clamp(32px, 4vw + 16px, 96px);
  --space-card-gap: clamp(16px, 2vw + 8px, 32px);
  --space-page-padding: clamp(16px, 3vw, 48px);
}
```

- Use `clamp()` for spacing that needs to be fluid, just like fluid typography.
- Section-level spacing (vertical gaps between major sections) benefits the most from fluid values.
- Component-level internal padding usually stays fixed — a card with 24px padding at 1440px should still have 24px padding at 768px. The card itself gets smaller, but its padding stays consistent.

## Anti-Patterns

1. **Arbitrary magic numbers.** `margin-top: 37px` or `padding: 13px 27px` signals a value chosen by eyeball, not by system. Every spacing value should come from the scale.

2. **Inconsistent padding across same component.** If one card has 16px padding and an identical card elsewhere has 24px, users perceive it as a bug. Define it once, use the token everywhere.

3. **Too little whitespace.** Dense UIs feel claustrophobic and are harder to scan. When in doubt, add more space, not less. You can always tighten later — cramped layouts are harder to fix.

4. **Margin on both sides.** Applying both `margin-top` and `margin-bottom` to elements leads to unpredictable collapsed margins. Pick one direction per context.

5. **Using padding where gap belongs.** If you are adding `padding-bottom` to every child in a flex container except the last, you want `gap` on the parent instead.

6. **No max-width on text.** Full-width paragraphs on a 1920px monitor create 150+ character lines. Unreadable. Always constrain text containers.

7. **Equal spacing everywhere.** If every gap in your layout is 16px, there is no hierarchy. Use smaller gaps within groups and larger gaps between groups.

8. **Spacing that does not scale.** 96px of section padding on desktop is fine. 96px on a 375px phone screen wastes 25% of the viewport. Use fluid spacing or breakpoint adjustments.

9. **Mixing spacing systems.** Half the project uses an 8px grid, the other half uses a 5px grid. Pick one base unit and enforce it.

10. **Forgetting scroll padding.** When using anchor links or `scroll-to` behavior, add `scroll-padding-top` to account for fixed headers. Otherwise content jumps behind the header.

```css
html {
  scroll-padding-top: calc(var(--header-height) + var(--space-md));
}
```
