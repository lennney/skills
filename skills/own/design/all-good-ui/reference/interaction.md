# Interaction Design

> Miranda says: Every element that can be clicked, tapped, or typed into
> owes the user a clear answer to "what happens if I do this?"
> Silence is the worst response an interface can give.

## The 8 Component States

Every interactive element exists in one of these states. Skipping any of them creates gaps where the user loses confidence.

1. **Default** — Resting appearance. Must clearly communicate that the element is interactive (underline for links, raised appearance for buttons, border for inputs).
2. **Hover** — Mouse cursor is over the element. Provide visual feedback within 100ms. Subtle background shift, shadow change, or color adjustment. Do not rely on hover alone — it does not exist on touch devices.
3. **Focus** — Element has keyboard focus. Must show a visible focus ring. This is a hard accessibility requirement, not a suggestion.
4. **Active** — Element is being pressed/clicked. The moment between mousedown and mouseup. Buttons should feel like they depress slightly (scale 0.98, darker shade).
5. **Disabled** — Element cannot be interacted with. Reduce opacity to 0.5-0.6, set `cursor: not-allowed`, remove from tab order with `tabindex="-1"` or use the `disabled` attribute. Always communicate why something is disabled (tooltip or adjacent text).
6. **Loading** — Action has been triggered, waiting for result. Replace the trigger (button label) with a spinner or progress indicator. Disable the trigger to prevent duplicate submissions.
7. **Error** — Something went wrong. Red/danger color border, icon, and message. The message must follow the three-part pattern (see Form Validation below).
8. **Success** — Action completed successfully. Brief green/success color confirmation. Can auto-dismiss after 3-5 seconds. For destructive actions, include an undo option.

## Focus Management

- **Visible focus ring**: Minimum 2px width, must have sufficient contrast against the background. A common reliable pattern: `outline: 2px solid currentColor; outline-offset: 2px;`.
- **Never `outline: none` without a replacement.** If you remove the default outline, you must provide an equally visible custom focus indicator (box-shadow, border change, background change).
- **Focus trapping in modals**: When a modal or dialog opens, move focus to the first focusable element inside it. Tab should cycle within the modal, not escape to the page behind it. When the modal closes, return focus to the element that opened it.
- **Skip links**: Provide a "Skip to main content" link as the first focusable element on every page.
- **Focus order must match visual order.** If CSS reorders elements visually (grid, flexbox order, absolute positioning), ensure the tab order still makes logical sense.

## Touch Targets

Minimum touch target size: **44x44 CSS pixels** (per WCAG 2.5.8 and Apple HIG).

If the visual element is smaller than 44x44 (a small icon button, a compact link), expand the tappable area using:

```css
.small-button {
  position: relative;
}
.small-button::after {
  content: '';
  position: absolute;
  inset: -8px; /* expand tap area */
}
```

Or use `padding` to reach the minimum target size. The visual design can be compact; the interactive area must not be.

Spacing between adjacent touch targets: minimum 8px gap to prevent accidental taps.

## Form Validation

**Inline validation is preferred** over validation-on-submit. Validate each field when it loses focus (blur event), not on every keystroke (that feels aggressive).

**Three-part error messages:**

1. **What happened**: "Email address is invalid"
2. **Why**: "It must include an @ symbol and a domain"
3. **How to fix**: "Example: name@company.com"

Short version for space-constrained contexts: combine parts 1 and 3 — "Enter a valid email (e.g. name@company.com)."

Additional rules:
- Place error messages directly below the input they relate to, not in a summary banner at the top of the form (users lose context scrolling back and forth).
- Use `aria-describedby` to associate the error message with its input.
- Never clear user input on error. The user typed it; let them edit it.
- Mark required fields. Use both visual indicator (asterisk) and `aria-required="true"`.

## Destructive Actions

Any action that permanently deletes data or is difficult to reverse requires an **AlertDialog confirmation**.

The confirmation must:
- Name the specific thing being destroyed: "Delete project 'Summer Campaign'?" not "Are you sure?"
- Use a danger-styled confirm button with a specific verb: "Delete project" not "OK" or "Yes."
- Make the cancel/safe action visually prominent (primary style). Make the destructive action secondary or danger-styled.
- For high-stakes destruction (deleting an account, purging all data), require typing a confirmation phrase.

## Loading Patterns

- **Skeleton loaders**: First choice for content loading. Show the shape of what is coming.
- **Optimistic updates**: For non-destructive actions (liking a post, toggling a setting), update the UI immediately and reconcile with the server in the background. If the server rejects, revert with an error message.
- **Spinners**: Use only when no layout preview is possible. Place the spinner in context (inside the button, inside the content area) rather than as a full-page overlay.
- **Progress bars**: Use for operations with known duration or percentage (file uploads, multi-step processes).
- **Never block the entire page** with a loading overlay unless absolutely necessary (initial app bootstrap). Partial loading is always better than full-page loading.

## Empty States

When a view has no content (no search results, no items in a list, new account with no data), the empty state must include:

1. A brief explanation of what belongs here: "No projects yet"
2. A **single, clear call-to-action**: "Create your first project" as a prominent button
3. Optionally, an illustration or icon to prevent the page from feeling broken

Do not show an empty table with headers and no rows. That looks like a bug.

## Error States

- **Be helpful, not technical.** "Something went wrong" is better than "Error 500: Internal Server Exception."
- **Never blame the user.** "We couldn't save your changes" not "You entered invalid data."
- **Never use humor during frustration.** A joke on a 404 page is fine. A joke when someone's payment failed is not.
- **Provide a next step.** "Try again," "Go back to home," or "Contact support" — always give the user somewhere to go.
- **Distinguish recoverable from terminal errors.** Recoverable: show a retry button. Terminal: show alternative paths.

## Keyboard Navigation

- All interactive elements must be reachable via `Tab` (forward) and `Shift+Tab` (backward).
- `Enter` or `Space` activates buttons and links.
- `Escape` closes overlays (modals, popovers, dropdowns). Always.
- Arrow keys navigate within composite widgets (tabs, menus, radio groups, listboxes).
- Do not create keyboard traps — every focusable area must have a way out.
- Custom components must implement the appropriate WAI-ARIA keyboard interaction pattern.

## Input Behavior

- **Never block paste** on any input field. Password fields, confirmation fields, credit card fields — all must accept paste. Blocking paste is a security anti-pattern (it discourages password managers) and an accessibility violation.
- **Never auto-clear inputs** on focus. Users may want to append to existing content.
- **Auto-focus the first input** when a form or modal appears (unless the page contains important content the user should read first).

## Button Labels

Use specific verb + object pairs:

| Bad          | Good              |
|:-------------|:------------------|
| Submit       | Save changes      |
| OK           | Confirm order     |
| Yes          | Delete account    |
| Click here   | Download report   |
| Cancel       | Discard draft     |

The user should understand what will happen without reading surrounding context.

## Anti-Patterns

- **Placeholder as label**: Placeholder text disappears on focus. Users with short-term memory challenges lose track of what the field is for. Always use a persistent `<label>`.
- **Invisible gestures without hints**: Swipe-to-delete, long-press menus, pull-to-refresh — if there is no visual hint that the gesture exists, most users will never discover it.
- **Modal overuse**: Modals interrupt flow. Use them for confirmations and focused tasks. Do not use modals for information that could appear inline (tooltips, expandable sections, sidebars).
- **Infinite scroll without position memory**: If the user clicks an item in an infinite list and presses Back, they should return to their scroll position, not the top.
- **Disabled buttons without explanation**: A greyed-out button with no tooltip or hint about why it is disabled is a dead end. Always explain.
- **Hijacking native scroll or selection behavior**: Users expect scroll, text selection, right-click, and back/forward navigation to work. Do not override them without exceptional reason.
