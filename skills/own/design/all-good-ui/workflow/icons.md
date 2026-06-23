# Icon Selection & Integration Workflow

<!-- Miranda's note: If your icon choices are "rocket for fast" and "lightbulb for idea", -->
<!-- we need to have a serious conversation about cliches. -->

## Philosophy

Icons are communication, not decoration. Every icon on the page must answer the question: "Does removing this make the interface harder to understand?" If the answer is no, remove it.

---

## Selection Rules

### 1. Consistency First

All icons in a project must come from the same library or have matching visual weight. Mixing Phosphor with Heroicons with Font Awesome creates visual noise that users feel even if they cannot articulate it.

### 2. Stroke Width

Pick one stroke width and commit to it across the entire project:
- **1.5px** — lighter, more refined, works well with thin body text
- **2px** — bolder, more readable at small sizes, works well with medium-weight text

Never mix stroke widths. A 1.5px icon next to a 2px icon looks like a mistake.

### 3. Style

- **Outline (line) icons** — Default for UI. Navigation, actions, labels.
- **Filled icons** — Reserved for emphasis or active/selected states (e.g., filled heart = favorited, outline heart = not favorited).
- Do not mix filled and outline icons in the same context randomly. The distinction should be meaningful.

### 4. Size

Icons in the same context must be the same size. Common sizes:
- **16px** — inline with small text, metadata, tags
- **20px** — inline with body text, form labels, list items
- **24px** — buttons, navigation, section headers
- **32px+** — feature icons, empty states, hero sections

### 5. Meaning

Avoid tired mappings that have lost all specificity:
- Rocket does not always mean "launch" or "fast"
- Lightbulb does not always mean "idea"
- Globe does not always mean "international"
- Shield does not always mean "secure"
- Chart-going-up does not always mean "growth"

Instead, choose icons that are specific to the actual content. A shipping truck is better than a rocket for "fast delivery." A fingerprint is better than a shield for "biometric authentication."

### 6. No Emoji

Never use emoji as UI icons. Emoji render differently across platforms, cannot be styled with CSS, have inconsistent sizing, and look unprofessional in product interfaces.

---

## Recommended Libraries

In order of general preference. The right choice depends on the project.

### 1. Phosphor Icons
- **Strengths:** Six weight variants (thin, light, regular, bold, fill, duotone), highly consistent, large collection
- **Best for:** Projects that need flexibility across weights, design systems
- **Site:** https://phosphoricons.com

### 2. Lucide
- **Strengths:** Clean design, actively maintained fork of Feather Icons, good defaults, tree-shakeable
- **Best for:** Clean/minimal UI, projects already using Feather that need more icons
- **Site:** https://lucide.dev

### 3. Heroicons
- **Strengths:** Made by the Tailwind team, two styles (outline 24px, solid 20px), reliable quality
- **Best for:** Tailwind projects, product UI
- **Site:** https://heroicons.com

### 4. Radix Icons
- **Strengths:** Minimal, designed specifically for UI components, pairs well with Radix primitives
- **Best for:** Component libraries, minimal interfaces
- **Site:** https://icons.radix-ui.com

### 5. Tabler Icons
- **Strengths:** Large collection (5000+), consistent 1.5px stroke, configurable
- **Best for:** Projects that need unusual/specific icons, dashboards
- **Site:** https://tabler.io/icons

### 6. Material Design Icons
- **Strengths:** Comprehensive coverage, multiple styles, well-documented
- **Best for:** Projects that need broad coverage over distinctive style
- **Caveat:** Can feel generic. Use when breadth of selection matters more than personality.

---

## With Better Icons MCP

When Better Icons MCP is available, use this workflow:

### Step 1: Inventory

List every place in the design that needs an icon. Group by context:
- Navigation icons
- Action icons (buttons, menus)
- Status icons (success, error, warning, info)
- Content icons (section headers, feature lists)
- Metadata icons (date, author, category, tags)

### Step 2: Search

Use `search_icons` to find candidates by keyword. Search for the specific concept, not the generic category.

```
Good: search_icons("calendar event") for a date picker
Bad:  search_icons("time") for a date picker
```

Use `recommend_icons` when unsure what icon fits a usage context.

### Step 3: Evaluate Consistency

Use `find_similar_icons` to check alternatives and ensure all selected icons match in:
- Stroke width
- Corner radius
- Level of detail
- Visual weight

### Step 4: Retrieve

Use `get_icon` to get the SVG code for each selected icon.

### Step 5: Integrate

If the project has a centralized icon file or component, use `sync_icon` to add icons directly. Otherwise, integrate the SVG into the appropriate component files.

---

## Without Better Icons MCP

When the MCP is not available, provide:

1. **Library recommendation** — Based on the project's style and needs, recommend one library from the list above
2. **Specific icon names** — List exact icon names to search for in that library (e.g., "lucide:calendar", "phosphor:envelope-simple")
3. **Download source** — Direct link to the library's icon browser or npm package
4. **Integration code** — Framework-appropriate code to import and use the icons

Example:
```
For this project, use Lucide Icons (https://lucide.dev).

Icons needed:
- Navigation: menu, x, chevron-left, chevron-right
- Actions: plus, trash-2, pencil, download
- Status: check-circle, alert-triangle, info, x-circle

Install: npm install lucide-react
Usage: import { Menu, X, Plus } from 'lucide-react'
Props: size={20} strokeWidth={1.5}
```

---

## Anti-Patterns

Things to catch and fix during audit:

### Mixed Libraries
Icons from different libraries with different stroke widths, corner radii, or levels of detail. Pick one library and stay with it.

### Inconsistent Fill/Outline
Using filled icons and outline icons side by side without the distinction meaning anything. If filled means "selected", apply that rule everywhere.

### Emoji as UI Icons
Emoji in buttons, navigation, or form elements. Replace with proper SVG icons from the chosen library.

### Missing Favicon
A page without a favicon looks unfinished. Every project needs one, even during development.

### Icons Without Labels
Unless the icon is universally understood (X for close, hamburger for menu, magnifying glass for search), it needs a visible text label. Icon-only buttons with tooltips are acceptable only for space-constrained toolbars.

### Decorative Noise
Icons placed next to every list item, every heading, every paragraph "for visual interest." If the icon does not help the user understand the content faster, it is noise. Remove it.

### Mismatched Sizing
A 16px icon next to a 24px icon in the same row. Icons in the same context must be the same size. No exceptions.
