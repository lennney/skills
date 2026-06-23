# Anti-Patterns & AI-Slop Detection Reference

<!-- Miranda says: "The fastest way to make something look cheap is to make it look like
     every other AI-generated page on the internet. If a design doesn't have a point of view,
     it doesn't have a reason to exist. This file is the field guide for spotting mediocrity." -->

---

## The AI-Slop Test

Look at the design. If someone's first reaction is "AI made this" — it fails.

This is not a vague aesthetic judgment. AI-generated designs have a signature. It is a signature of having no opinion. These are the specific tells:

- **Perfect symmetry everywhere.** Real design has intentional asymmetry.
- **Generic 3-column card grid.** The single most common AI layout. Three cards, same height, same padding, icon on top, heading in the middle, text below.
- **Default color palette.** Blue primary, gray secondary. The colors of "I didn't choose."
- **Inter font.** The typeface of "this was generated, not designed."
- **Stock photo aesthetic.** Diverse group of professionals smiling at a laptop.
- **Buzzword copy.** Seamless. Elevate. Unleash. Nexus. Empower. Revolutionize. Cutting-edge. Next-generation. If the copy could describe any product in any industry, it describes nothing.
- **Oversized H1 with generic tagline.** "Unlock Your Potential" in 72px bold.
- **Everything perfectly aligned with zero personality.** No tension, no surprise, no hierarchy beyond size.

A design that passes the slop test has opinions. It commits to a specific mood, a specific type hierarchy, a specific color story. It looks like a human chose every element for a reason.

---

## Typography Anti-Patterns

### Browser Default Fonts
Using system fonts without intention reads as "nobody designed this." System font stacks are acceptable when deliberate (performance choice), but Times New Roman or unstyled serif screams neglect.

### Too Many Font Families
More than 2-3 font families on a single page creates visual chaos. One serif and one sans-serif, or one display and one body font. That is usually enough. Each additional typeface needs to earn its place.

### Similar Size Clustering
When your h2, h3, and body text are all within 2-4px of each other, there is no visual hierarchy. Type sizes should create clear, scannable levels. If you have to squint to tell heading from body text, the sizes are too close.

### Missing Font Weight Variation
Using a single weight throughout the page creates monotony. Bold draws attention. Regular recedes. Light adds elegance. A single weight means nothing is emphasized, which means nothing is important.

### Paragraphs Wider Than 65 Characters
Lines longer than 65 characters per line are physically harder to read. The eye loses its place returning to the left margin. Set a `max-width` on text containers. This is typography 101.

### Excessive Uppercase
ALL CAPS in small doses is a design tool. ALL CAPS EVERYWHERE is shouting. Reserve uppercase for labels, navigation items, or short headings. Never for body text or long headings.

---

## Color Anti-Patterns

### Pure Black #000000
Pure black against white creates maximum contrast that causes eye strain on screens. Use off-blacks (#111, #1a1a1a, #222, #333) for text. Use dark grays for backgrounds. Pure black is almost never the right choice.

### Oversaturated Accents
Neon-bright accent colors (#00FF00, #FF0000, #0000FF) look harsh on screen and clash with everything. Accents should be vibrant but not blinding. Desaturate slightly for sophistication.

### Multiple Accent Colors Competing
One primary accent. Maybe a secondary. When three or four saturated colors compete for attention, nothing stands out and everything feels noisy. Accent color is a spotlight — point it at one thing.

### Mixed Gray Temperatures
Warm grays (brownish) and cool grays (bluish) on the same page create subtle visual dissonance. Pick a temperature and stay with it. Warm brand? Warm grays. Cool brand? Cool grays. Never both.

### Purple-Blue AI Gradient
The gradient from purple to blue (or purple to pink) has become the universal signifier of "AI product." It is the visual equivalent of writing "powered by AI" — instantly generic, immediately forgettable.

### Generic Shadows
`box-shadow: 0 2px 4px rgba(0,0,0,0.1)` — the shadow of "I didn't think about this." Shadows should match the color temperature of the design. Warm designs get warm shadows (tinted with brand color). Cool designs get cool shadows. Black shadows are lazy.

---

## Layout Anti-Patterns

### Over-Symmetry
Perfect left-right balance on every section signals machine generation. Real layouts have visual weight distribution — a larger element on one side balanced by negative space on the other. Asymmetry is a feature, not a bug.

### 3-Column Equal-Height Cards
This is the number one AI layout tell. Three cards in a row, same height, same structure, same visual weight. If you must use three columns, vary the card heights, content types, or visual treatment. Break the grid somewhere.

### height: 100vh on Mobile
`100vh` on mobile browsers includes the address bar, causing content to be cut off behind browser chrome. Use `100dvh` (dynamic viewport height) or `min-height: 100svh` instead.

### Missing Container Constraints
Content that stretches to full viewport width on large screens is unreadable. Set a `max-width` on content containers. 1200px is a common ceiling. Text content should be narrower (around 720px).

### Uniform Border-Radius Everywhere
When every element has the same `border-radius: 8px`, the design looks stamped from a template. Vary radius by element type and context. Buttons and inputs might be 8px. Cards might be 16px. Full-round pills might be 9999px. Each radius is a design decision.

### No Depth or Layering
A flat page where every element sits at the same z-level has no visual interest. Use shadows, overlapping elements, and background layers to create depth. Not everything — but enough to give the eye somewhere to rest and somewhere to focus.

### Symmetric Padding on Everything
When every element has the same padding on all four sides, the layout feels mechanical. Vary padding based on content needs. More space above a heading than below it. More horizontal padding on wide screens. Padding should serve the content rhythm, not a grid.

---

## Interaction Anti-Patterns

### No Hover Effects
Clickable elements that show no visual response on hover feel dead. Buttons, links, cards — anything interactive should acknowledge the cursor. Subtle scale, color shift, shadow change. Something.

### No Active/Pressed Feedback
When a button is clicked, it should feel clicked. A slight scale-down, a color darkening, a shadow inset. Without pressed state feedback, users are never sure if their click registered.

### Instant Transitions
State changes that happen instantly (no transition duration) feel jarring. A 150-200ms ease transition on color, background, shadow, and transform makes interactions feel intentional. Not everything needs animation, but state changes need smoothness.

### No Focus Ring
Removing the default focus outline without providing a custom one makes the interface unusable for keyboard users. Always provide a visible focus indicator. It does not have to be the browser default — but it must be there.

### Generic Spinner Instead of Skeleton
A spinning circle gives no information about what is loading or how much longer. Skeleton screens (gray placeholder shapes matching the content layout) tell users what to expect and feel faster even when they are not.

### Blank Empty States
An empty list or dashboard with no content and no guidance is a dead end. Empty states should explain what belongs here and how to add it. A message, an illustration, a call to action — something that moves the user forward.

### Placeholder as Label
Using `placeholder` text as the only label for an input field fails on two counts: the label disappears when the user types (they forget what the field is for), and it is not accessible to screen readers. Always use a `<label>`.

---

## Content Anti-Patterns

### Placeholder Names
"John Doe" and "Jane Smith" in demo content or mockups signal laziness. Use realistic but clearly fictional names that match the target audience and locale.

### Fake Round Numbers
"$99", "10,000 users", "500+ clients" in mockups or templates look fabricated. Real data has irregular numbers. If using placeholder data, make it look plausible: "$47", "8,342 users", "127 clients."

### Lorem Ipsum in Production
Placeholder text in shipped code is a failure. If real content is not available, use realistic draft content that matches the expected length and tone. Lorem Ipsum in production says "nobody reviewed this."

### AI Copywriting Buzzwords
Seamless. Elevate. Unleash. Empower. Cutting-edge. Next-generation. Revolutionize. Transform. These words mean nothing because they apply to everything. Specific, concrete language is always better. "Reduce email response time from 4 hours to 15 minutes" beats "Revolutionize your workflow."

### Exclamation Marks in Success Messages
"Your changes have been saved!" — the exclamation mark adds false excitement to a mundane action. Success messages should be calm and informative. Period, not exclamation.

### Same Date on All Content
Blog posts, testimonials, or entries all dated the same day break the illusion of real content. If using sample data, vary dates realistically over weeks or months.

### Duplicate Avatars
The same stock photo or generated avatar appearing multiple times in a testimonial section or user list is immediately noticeable and destroys credibility.

---

## Component Anti-Patterns

### Generic Card Styling
Every card on the page has the same border, shadow, padding, and radius. Cards should be differentiated by content type and importance. Featured cards get more visual weight. Secondary cards get less. Uniformity is the enemy of hierarchy.

### Limited Button Variants
Only one button style (usually filled/primary) for every action. Good button systems have: primary (main action), secondary (alternative action), ghost/text (tertiary action), destructive (dangerous action). Every button looking the same means no button stands out.

### Only Circular Avatars
Circular avatars are fine, but when every image on the page is cropped to a circle, it becomes a crutch. Consider rounded rectangles, squares with slight radius, or varied shapes based on context.

### Overuse of Modals
Not everything needs a modal. Modals interrupt flow, require focus management, and block the underlying content. Inline expansion, slide-over panels, new pages, or toast notifications are often better choices. Reserve modals for confirmations and critical decisions.

### Sun/Moon Theme Toggle
The sun/moon icon toggle for dark mode was clever in 2020. It is now visual wallpaper — expected and unremarkable. If you include a theme toggle, at least style it to match the brand. Better yet, respect `prefers-color-scheme` automatically and skip the toggle.

### Standard Icon Sets Without Customization
Using Heroicons, Feather, or Phosphor straight from the box without any customization or selection curation makes the design feel template-generated. Choose a subset that fits the brand. Adjust stroke width for consistency. Do not use every icon available.

---

## Icon Anti-Patterns

### Single Library Dependency
Using one icon library for every icon need results in visual monotony. Mix in custom icons, brand-specific illustrations, or at minimum curate a deliberate subset rather than pulling randomly from the full set.

### Cliche Mappings
Rocket for "launch." Lightbulb for "idea." Gear for "settings." Brain for "AI." These mappings are so overused they carry no meaning. When an icon mapping is the first one everyone thinks of, think harder.

### Inconsistent Stroke Widths
Mixing icons with 1px, 1.5px, and 2px strokes on the same page creates visual noise. Pick a stroke width and enforce it. If your icon library defaults to 1.5px, do not mix in icons from a 2px library.

### Missing Favicon
A site without a favicon shows the default browser icon in the tab. It signals that the site is unfinished, a development preview, or unmaintained. Every site needs a favicon. No exceptions.

### Stock Photography Aesthetic
The "diverse team collaborating in a modern office" image style is instantly recognizable as stock photography. It adds no value and drains credibility. Use real photos, illustrations, abstract graphics, or no images at all. Anything is better than stock photos that every other site also uses.

---

## Detection Scoring

When reviewing a design, count the anti-patterns present:

- **0-2 anti-patterns**: Solid. Minor polish needed at most.
- **3-5 anti-patterns**: Mediocre. Needs a design pass with intention.
- **6-10 anti-patterns**: Generic. Likely template or AI-generated without customization.
- **11+ anti-patterns**: Slop. Scrap and start over with actual design decisions.

Every anti-pattern in this file has the same root cause: **absence of decision-making.** A design that avoids these patterns is a design where someone chose every element deliberately. That is the difference between design and decoration.
