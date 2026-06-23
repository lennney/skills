# Accessibility Reference

<!-- Miranda says: "An inaccessible interface isn't just bad UX — it's broken software.
     Screen readers don't care about your aesthetic vision. Keyboard users don't care
     about your mouse-first workflow. Build it right or don't ship it." -->

## Minimum Standards

- **WCAG AA** compliance is the baseline, not the goal.
- **4.5:1** contrast ratio for normal text.
- **3:1** contrast ratio for large text and UI components.
- **44x44px** minimum touch/click target size.

---

## Critical Priority

### 1. Accessible Names

Every interactive element must have a programmatically determinable name.

**Rules:**
- Icon-only buttons require `aria-label` describing the action, not the icon.
  - Good: `aria-label="Close dialog"`
  - Bad: `aria-label="X icon"`
- All form inputs need an associated `<label>` element with matching `for`/`id`.
  - Placeholder text is not a label. Ever.
- Links need descriptive text. "Click here" and "Read more" are meaningless without context.
  - If the visible text is generic, use `aria-label` to provide context.
- Image buttons need `alt` text describing the action, not the image content.
- Groups of related controls (radio buttons, checkbox sets) need `<fieldset>` + `<legend>`.

**Common failures:**
- `<button><svg .../></button>` — no accessible name at all.
- `<input placeholder="Email">` without a `<label>` — invisible to screen readers.
- `<a href="...">here</a>` — "here" means nothing out of context.

### 2. Keyboard Access

Every interactive element must be operable with keyboard alone.

**Rules:**
- All clickable elements must be reachable via Tab key.
- Custom interactive elements built on `<div>` or `<span>` need `tabindex="0"` and keyboard event handlers.
- `tabindex` values greater than 0 are forbidden. They create unpredictable tab order.
- Focus must be visible at all times. Never apply `outline: none` without a replacement.
- Escape key must close overlays, dropdowns, and modals.
- Arrow keys should navigate within composite widgets (tabs, menus, radio groups).
- Enter and Space must activate buttons and links.

**Common failures:**
- `<div onclick="...">` with no `tabindex`, no `role`, no keyboard handler.
- CSS `outline: none` on `:focus` with nothing to replace it.
- Dropdown menus that only open on hover.
- Custom sliders that ignore arrow key input.

### 3. Focus Management & Dialogs

Focus must be managed deliberately when the UI changes.

**Rules:**
- Modals must trap focus inside the dialog while open.
  - Tab from the last focusable element wraps to the first.
  - Shift+Tab from the first wraps to the last.
- When a modal closes, focus must return to the element that triggered it.
- When a modal opens, focus must move to the first interactive element inside it, or the dialog container itself.
- Content behind a modal must have `aria-hidden="true"` or use the `inert` attribute.
- `<dialog>` element handles most of this natively. Use it when possible.

**Common failures:**
- Modal opens but focus stays behind it on the page.
- Modal closes and focus jumps to the top of the page.
- Tab key escapes the modal into background content.
- Multiple modals stacked without proper focus management.

---

## High Priority

### 4. Semantic HTML

Use the right element for the job. ARIA is a patch, not a substitute.

**Rules:**
- Use `<button>` for actions, `<a>` for navigation. Not the reverse.
- Use `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` for page landmarks.
- Lists of items use `<ul>` or `<ol>`. Navigation links are a list.
- Heading hierarchy must not skip levels. `<h1>` then `<h3>` is broken structure.
  - One `<h1>` per page.
  - Headings define document outline, not visual size. Use CSS for sizing.
- Data tables use `<th>` with `scope` attributes. Layout tables are not acceptable.
- `<section>` elements should have a heading or `aria-label`.

**The first rule of ARIA: don't use ARIA if a native HTML element does the job.**

**Common failures:**
- `<div role="button">` instead of `<button>`.
- `<span>` styled to look like a heading but not marked up as one.
- Navigation links not wrapped in `<nav>` or `<ul>`.
- Tables used for layout.

### 5. Forms & Error Handling

Form errors must be perceivable, understandable, and connected to their fields.

**Rules:**
- Error messages must be linked to their input via `aria-describedby`.
- Required fields must be declared with the `required` attribute or `aria-required="true"`.
- Invalid inputs must receive `aria-invalid="true"` when validation fails.
- Error summary should appear at the top of the form and list all errors with links to each field.
- Success and error states must not rely on color alone (add text or icons).
- Form submissions should not clear correctly-filled fields on error.

**Common failures:**
- Red border as the only error indicator. Color-blind users see nothing.
- Error text that appears visually near the field but has no programmatic association.
- Required fields indicated only by asterisk with no legend explaining the convention.
- Validation that fires on every keystroke before the user finishes typing.

---

## Medium Priority

### 6. Live Announcements

Dynamic content changes must be announced to assistive technology.

**Rules:**
- Critical errors and alerts use `role="alert"` or `aria-live="assertive"`.
- Status updates and non-critical info use `aria-live="polite"`.
- Loading states should use `aria-busy="true"` on the updating region.
- Toast notifications cannot be the sole communication channel — they disappear.
  - Pair toasts with persistent error states or success indicators.
- The live region element must exist in the DOM before the content changes.

**Common failures:**
- Toast message disappears after 3 seconds with no other indication of what happened.
- Loading spinner with no screen reader announcement.
- `aria-live` region added to the DOM at the same time as its content (won't be announced).

### 7. Contrast & Interactive States

Visual states must be perceivable and have keyboard equivalents.

**Rules:**
- Hover-revealed content must also be accessible via focus.
- Hover tooltips must be dismissible (Escape), hoverable themselves, and persistent until dismissed.
- Disabled elements should have sufficient contrast to be readable (even if not interactive).
- State changes (selected, expanded, checked) must be communicated via ARIA attributes, not just visual styling.
- Links within body text must be distinguishable from surrounding text by more than color alone (underline, font weight).

**Common failures:**
- Information revealed only on mouse hover with no keyboard equivalent.
- Disabled buttons with 1.5:1 contrast (unreadable).
- Selected tab distinguished only by a color change.

---

## Low Priority

### 8. Media & Motion

Multimedia and animation must respect user preferences.

**Rules:**
- All images need `alt` text. Decorative images use `alt=""` (empty, not omitted).
- Alt text describes the function or content, not the visual appearance.
  - Functional image: "Submit form" not "Blue arrow button"
  - Content image: "Sales chart showing 40% growth in Q3" not "A chart"
- Videos need captions. Audio needs transcripts.
- Respect `prefers-reduced-motion`. Disable or reduce animations when this is set.
- No content should flash more than 3 times per second.
- Audio must not autoplay. If it does, there must be a visible pause/stop control.

**Common failures:**
- `alt="image"` or `alt="photo.jpg"` — useless.
- Parallax scrolling effects with no reduced-motion fallback.
- Background video with no way to pause.

### 9. Tool Boundaries & Restraint

Do not over-engineer accessibility. Do not break what already works.

**Rules:**
- Do not add ARIA attributes that duplicate native semantics.
  - `<button role="button">` is redundant.
  - `<nav role="navigation">` is redundant.
- Do not change component library accessibility patterns that already work.
- Minimal, targeted changes are better than sweeping refactors.
- When using third-party components, respect their existing accessibility implementation unless it is demonstrably broken.
- Do not add `aria-label` to elements that already have visible text content.
- Do not wrap everything in `aria-live` regions. Over-announcement is as bad as no announcement.

**Common failures:**
- Adding `role="button"` to a `<button>`.
- Wrapping entire page sections in `aria-live="polite"`, causing constant screen reader chatter.
- Replacing a library's accessible dropdown with a custom one that breaks keyboard navigation.

---

## Quick Checklist

Before shipping any UI change:

1. Can you Tab to every interactive element?
2. Can you see where focus is at all times?
3. Can you operate everything with keyboard alone?
4. Does every button/link/input have an accessible name?
5. Do form errors tell you what went wrong and where?
6. Does the heading structure make sense without visual styling?
7. Does color-coded information have a non-color alternative?
8. Do modals trap focus and return it on close?
9. Does it work with `prefers-reduced-motion` enabled?
10. Did you test with a screen reader, even briefly?
