# Design Lab — Multi-Variant Workflow

<!-- Miranda's note: One option is not a choice. Three options is a conversation. -->
<!-- This is where we explore before we commit. -->

## When to Use

Activate Design Lab when any of these happen:

- User explicitly requests multiple options ("show me a few versions", "give me options")
- A design decision is large enough that seeing alternatives would prevent regret
- The user seems uncertain about direction ("I'm not sure what I want")
- Redesigning an existing page where the current approach clearly is not working
- The component or layout could reasonably go in several valid directions

Do NOT use Design Lab for:

- Bug fixes (just fix the bug)
- Minor tweaks ("make this 2px bigger")
- Changes where the specification is already precise
- Content-only updates

---

## Variant Generation Strategy

Generate 3-5 variants. Each variant explores a different design axis — they are not random variations of the same idea. Each should teach the user something about the tradeoffs.

### Variant A: Information Hierarchy

Restructure what is most prominent. Apply Gestalt principles: proximity groups related items, similarity creates categories, contrast draws attention to what matters.

Ask: "What if the most important thing on this page was twice as big and everything else stepped back?"

### Variant B: Layout Model

Fundamentally different layout approach. If the current design uses cards, try a list. If it is a list, try a split-pane. If it is a dashboard grid, try a single-column feed.

Ask: "What if we threw out the container and tried a completely different spatial arrangement?"

### Variant C: Density

Flip the density dial. If the current design is spacious, make a compact version. If it is dense, spread it out. Show the user what they gain and lose at each extreme.

Ask: "What if we gave everything twice as much room? What if we cut the whitespace in half?"

### Variant D: Interaction Model

Different interaction patterns for the same content. Modal vs inline editing. Drawer vs full page. Accordion vs tabs. Reveal-on-hover vs always visible.

Ask: "What if the user interacted with this content in a completely different way?"

### Variant E: Expressive Direction

Push the brand or style direction further than the user might expect. More personality, stronger visual identity, bolder choices. This variant exists to expand the user's sense of what is possible.

Ask: "What if we stopped playing it safe?"

---

## Presentation

Present all variants with brief commentary. Be specific about what each variant prioritizes and what it sacrifices.

Example presentation:

```
Here are your options:

**Variant A (Hierarchy-first):** The key metric is now 3x larger and everything
else is secondary. You lose the at-a-glance overview, but the main number
hits you immediately.

**Variant B (Split-pane):** Navigation on the left, content on the right.
More app-like, which works well for frequent users but might feel heavy
for a simple dashboard.

**Variant C (Spacious):** Same content, double the breathing room. It feels
calmer and more premium, but you need to scroll more.

**Variant D (Inline editing):** Click any value to edit it directly. No modal
interruption. Faster for power users, but discoverability takes a hit.

**Variant E (Bold):** I turned the personality up to 8. Bigger type,
stronger color, more visual identity. Not for everyone, but it will
not get mistaken for a template.
```

---

## Feedback Collection

After presenting variants, guide the user toward a decision:

### Step 1: Identify Direction

Ask: "Is there a clear winner, or should we mix and match?"

### Step 2: If Mixing

Ask: "Tell me what you like from each. Something like 'A's hierarchy with C's spacing and E's color' works great."

### Step 3: Synthesize

Combine the requested elements into a single cohesive version. Do not introduce new design decisions the user did not ask for during synthesis.

### Step 4: Iterate or Ship

- If user says "getting closer" or "almost" — ask what still feels off, adjust, present again
- If user says "this is it" or "ship it" — proceed to full audit (see `audit.md`)
- If user says "start over" — ask what was wrong with all variants to avoid repeating the same dead ends

---

## Synthesis Rules

These are non-negotiable when combining variant feedback:

1. **Honor specific feedback precisely** — If the user said "A's typography", use A's exact typography. Do not reinterpret.
2. **Do not sneak in new ideas** — Synthesis means combining what exists, not adding things the user did not request.
3. **Resolve conflicts explicitly** — If A's layout and C's spacing create a conflict, flag it and ask the user which to prioritize.
4. **Maintain internal consistency** — The synthesized design must feel like one cohesive design, not a Frankenstein of parts.
5. **Run the full audit** — Every synthesized result goes through the complete audit checklist from `audit.md`. No exceptions.

---

## Common Patterns

### The "I Like Everything" Response

Sometimes the user likes all variants equally. This usually means none of them are quite right. Ask: "What is the one thing that matters most on this page?" Start from there.

### The "None of These" Response

Do not take it personally. Ask: "What were you hoping to see that none of these captured?" Generate a new round based on the answer.

### The "Just Pick One" Response

Pick the one with the strongest information hierarchy and cleanest accessibility. Default to clarity over cleverness. State which one you picked and why.
