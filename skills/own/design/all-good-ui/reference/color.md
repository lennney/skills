# Color Reference — All-Good-UI (Miranda)

> Miranda says: Color is the fastest signal in your UI. Users process color
> before they read a single word. Treat it with the same rigor you give to code.

---

## Color System Approaches

### OKLCH — Perceptually Uniform

OKLCH (Lightness, Chroma, Hue) is the recommended color space for building design systems.

```css
/* oklch(lightness chroma hue) */
--color-primary: oklch(0.65 0.15 250);    /* a vivid blue */
--color-primary-light: oklch(0.85 0.08 250);
--color-primary-dark: oklch(0.45 0.12 250);
```

Why OKLCH over HSL:
- **Perceptual uniformity.** L=50% in HSL is wildly different brightness depending on hue (yellow at 50% is bright, blue at 50% is dark). OKLCH L=0.5 looks equally bright across all hues.
- **Chroma control.** You can desaturate consistently without hue shifts.
- **Better for generating scales.** Step through lightness at even intervals and get a visually even ramp.

### HSL — Simpler, Less Accurate

HSL is easier to reason about but produces uneven results:

```css
/* hsl(hue saturation lightness) */
--color-primary: hsl(220, 60%, 50%);
```

HSL is fine for quick prototypes. For production design systems, prefer OKLCH.

## Palette Construction: The 60-30-10 Rule

Distribute your colors by visual weight:

| Proportion | Role          | Examples                            |
|------------|---------------|-------------------------------------|
| 60%        | Dominant      | Page background, card surfaces      |
| 30%        | Secondary     | Headings, secondary backgrounds, borders |
| 10%        | Accent        | CTAs, active states, badges, links  |

- The dominant color is almost always a neutral (white, off-white, or a tinted gray).
- The secondary color provides structure and grouping.
- The accent color draws attention. It should appear in small, intentional doses.

### Building a Neutral Ramp

Every palette needs 9-11 neutral steps from near-white to near-black:

```
50:  background, page surface     (very light)
100: card backgrounds, alternating rows
200: borders, dividers
300: disabled states, placeholder text backgrounds
400: placeholder text
500: secondary text
600: body text (check contrast!)
700: headings
800: high-emphasis text
900: near-black, maximum contrast
950: darkest value available
```

Tint your neutrals slightly toward your brand hue. Pure gray (#808080) reads as lifeless.

## Chroma Reduction Near Endpoints

As lightness approaches 0 (black) or 1 (white), reduce chroma:

```
Lightness 0.95+ (near white):  chroma < 0.03
Lightness 0.85-0.95:           chroma < 0.06
Lightness 0.15-0.85:           full chroma range available
Lightness 0.05-0.15:           chroma < 0.06
Lightness < 0.05 (near black): chroma < 0.03
```

Why: High chroma at extreme lightness produces neon-like artifacts on some displays and fails contrast checks unpredictably.

## Contrast Requirements (WCAG)

### AA Level (Minimum)

| Element                 | Required Ratio | Notes                        |
|-------------------------|---------------|------------------------------|
| Normal text (<18px)     | 4.5:1         | Against its background       |
| Large text (>=18px bold or >=24px) | 3:1 | Heading exception    |
| UI components & icons   | 3:1           | Borders, icons, form controls|
| Focus indicators         | 3:1           | Against adjacent colors      |

### AAA Level (Enhanced)

| Element                 | Required Ratio |
|-------------------------|---------------|
| Normal text             | 7:1           |
| Large text              | 4.5:1         |

- AAA is recommended for long-form reading content.
- Always test contrast with a tool. Human eyes are unreliable judges of contrast ratios.
- Placeholder text must also meet 4.5:1 if it conveys important information. If it is truly just a hint, 3:1 is acceptable but not ideal.

## Dark Mode Principles

Dark mode is not inverting your palette. It is a separate design exercise.

### Core Rules

1. **Do not use pure black (#000000) as background.** Use a very dark tinted color (lightness 0.10-0.15 in OKLCH). Pure black creates excessive contrast with white text, causing eye strain.
2. **Reduce chroma.** Colors that look good on white backgrounds become garish on dark backgrounds. Drop chroma by 20-40%.
3. **Warm tones preferred.** Cool dark backgrounds (pure dark blue, dark gray) feel clinical. A warm undertone (brown, plum, warm gray) feels more comfortable for extended use.
4. **Flip your elevation model.** In light mode, shadows create depth. In dark mode, lighter surfaces = higher elevation. Shadows are nearly invisible on dark backgrounds.
5. **Reduce white text brightness.** Do not use #FFFFFF for body text on dark backgrounds. Use 85-90% brightness (e.g., #D9D9D9 to #E6E6E6) to reduce glare.
6. **Borders become more important.** Without visible shadows, borders are the primary way to separate surfaces.

### Dark Mode Surface Hierarchy

```
--surface-base:     oklch(0.12 0.02 30);    /* page background */
--surface-card:     oklch(0.16 0.02 30);    /* card, raised surface */
--surface-elevated: oklch(0.20 0.02 30);    /* popover, modal, dropdown */
--surface-overlay:  oklch(0.24 0.02 30);    /* tooltip, contextual menu */
```

Each elevation step increases lightness by 0.03-0.05.

## Semantic Colors

Define purpose-driven color tokens that are independent of specific hue choices:

| Semantic Role | Typical Hue Range   | Usage                          |
|---------------|---------------------|--------------------------------|
| Success       | Green (130-160)     | Confirmations, completed states|
| Warning       | Yellow/Amber (70-90)| Caution, non-blocking alerts   |
| Error         | Red (15-30)         | Failures, destructive actions  |
| Info          | Blue (230-260)      | Neutral information, tips      |

### Rules for Semantic Colors

- Each semantic color needs at least 3 values: a background tint (very light), a foreground/text color, and a border or icon color.
- Semantic colors should work on both light and dark backgrounds. Test both.
- Do not use semantic colors for decoration. If "success green" appears on a marketing card that has nothing to do with success, it confuses the signal.
- Warning is not orange. Orange is a common accent color and creates ambiguity. Use amber/yellow for warning to avoid collision with brand accents.

## Shadow Colors

Never use pure black shadows. They look flat and artificial.

```css
/* Bad: pure black shadow */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

/* Good: tinted shadow (warm) */
box-shadow: 0 4px 16px oklch(0.3 0.02 30 / 0.08);

/* Good: tinted shadow using brand hue */
box-shadow: 0 4px 16px hsl(220 30% 30% / 0.08);
```

- Tint shadows toward the dominant surface color or the brand hue.
- In dark mode, shadows are nearly invisible. Reduce shadow opacity to near-zero and rely on surface color differences instead.
- Shadow opacity should decrease as blur radius increases. A tight shadow (2px blur) can be 0.12 opacity. A large shadow (32px blur) should be 0.06-0.08.

## Background Hierarchy

Establish clear visual layers through background color:

```
Page background    → lightest (or darkest in dark mode)
  Card / Section   → one step elevated
    Nested element → another step elevated
      Popover      → highest elevation
```

- Each layer should be distinguishable but subtle. Aim for 2-5% lightness difference between adjacent layers.
- Avoid nesting more than 3-4 background levels. Beyond that, the differences become imperceptible.
- Use borders to reinforce separation when background differences alone are not enough.

## Anti-Patterns

1. **Pure black (#000000).** Almost never appropriate for text or backgrounds. Use #111111 minimum, or better yet, a tinted dark color. Pure black text on pure white creates harsh vibration, especially on OLED screens.

2. **Gray text on colored backgrounds.** Gray (#666, #888) only works on white or near-white. On colored backgrounds, it looks muddy. Use a desaturated tint of the background color instead.

3. **Red-green combinations.** Approximately 8% of men and 0.5% of women have red-green color vision deficiency. Never use red vs. green as the sole differentiator. Add icons, patterns, or labels.

4. **Over-reliance on opacity.** `rgba(0,0,0,0.5)` looks different on every background. When a color appears on multiple surfaces, define it as an explicit color rather than a transparent overlay.

5. **Oversaturated accent colors.** Maximum-chroma colors (hsl(X, 100%, 50%)) are visually aggressive and fail contrast requirements against most backgrounds. Reduce saturation for UI use.

6. **More than one accent color per view.** If everything is highlighted, nothing is. A single accent color per screen ensures clear visual hierarchy and a focused call to action.

7. **Using color as the only signifier.** Color should reinforce meaning, not be the sole carrier. "Click the green button" fails if the user cannot perceive green. Add text labels, icons, or position cues.

8. **Inconsistent surface hierarchy.** If cards are sometimes lighter and sometimes darker than the page background, the depth model breaks. Pick a direction and stick to it.

9. **Brand colors for text.** Most brand colors were designed for logos, not for 14px body text. They rarely pass contrast requirements. Reserve brand colors for accents and define separate text colors.

10. **Forgetting hover/focus state colors.** Every interactive element needs at least 3 color states: default, hover/focus, and active/pressed. Skipping these makes the interface feel unresponsive.
