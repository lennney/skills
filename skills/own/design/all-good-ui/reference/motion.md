# Motion & Animation

> Miranda says: Movement should feel like breathing — present but invisible.
> The moment a user notices an animation, it has already failed.

## Timing Budget

Every animation fits into one of three duration tiers:

- **Micro-interactions** (100-150ms): Button state changes, toggle switches, checkbox ticks, icon morphs. These happen at the speed of a finger tap — the user should never wait for them.
- **Transitions** (150-300ms): Panel slides, tab switches, accordion expand/collapse, tooltip fade. Long enough to track visually, short enough to never feel sluggish.
- **Entrances** (300-500ms): Page section reveals, modal appearances, card fly-ins. These are the only animations that get to "breathe." Anything beyond 500ms for UI feedback is stalling.

Hard ceiling: no UI-feedback animation should exceed 500ms. If it takes longer, the interface feels broken. Decorative or storytelling animations (landing page hero sequences, onboarding walkthroughs) may exceed this but are not UI feedback.

## Easing Curves

- **Entrances**: `ease-out` (fast start, gentle landing). Elements arrive with energy and settle into place.
- **Exits**: `ease-in` (slow start, fast departure). Elements accelerate away. They leave quickly because the user dismissed them.
- **Interactive elements**: Spring physics. CSS `linear()` easing can approximate spring curves. Start with stiffness ~100 and damping ~20, then tune by feel. Springs overshoot slightly, which makes draggable and pressable elements feel physical.
- **Linear easing**: Almost never correct for UI. Reserve for progress bars and looping indicators only.

## Compositor-Only Properties

Animate only `transform` and `opacity`. These two properties are handled by the GPU compositor thread and do not trigger layout or paint.

**Never animate:**
- `width`, `height` (triggers layout)
- `top`, `left`, `right`, `bottom` (triggers layout)
- `margin`, `padding` (triggers layout)
- `border-width`, `border-radius` changes (triggers paint)
- `box-shadow` transitions (triggers paint per frame)

If you need to animate size, use `transform: scale()`. If you need to animate position, use `transform: translate()`. If you need to animate a shadow shift, crossfade between two elements using opacity.

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is not optional. Users who set this preference may have vestibular disorders where motion causes nausea or disorientation. Respect it absolutely. When reduced motion is active:

- Replace slide/fly animations with simple opacity fades (or remove them entirely).
- Disable parallax scrolling.
- Stop auto-playing carousels.
- Keep functional state changes (a checkbox checking) but remove decorative flourish.

## Scroll-Driven Animation

Prefer CSS Scroll Timeline and View Timeline APIs over JavaScript scroll event listeners. Scroll listeners fire on the main thread and cause jank. CSS scroll-driven animations run on the compositor.

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

For browsers that do not yet support scroll-driven animations, use `IntersectionObserver` as a fallback rather than a scroll event listener.

## Cascade Reveal (Staggered Lists)

When multiple items enter the viewport together (a grid of cards, a list of results), stagger their appearance:

```css
.list-item {
  animation: fade-up 300ms ease-out both;
  animation-delay: calc(var(--index) * 80ms);
}
```

Set `--index` via inline style or a loop in your framework. Cap the maximum delay — if you have 50 items, the last one should not wait 4 seconds. A reasonable cap is 8-10 items of stagger (640-800ms maximum total delay), then let remaining items appear together.

## Loading States

**Skeleton loaders over spinners.** Skeletons communicate structure — the user can see where content will appear. Spinners communicate nothing except "wait."

- Skeleton shimmer animation should pulse gently (opacity 0.4 to 0.7, 1.5s duration, infinite).
- Place skeletons in the exact layout position of the real content.
- Match skeleton shapes to content shapes (rectangle for text, circle for avatars, rounded rectangle for images).
- Transition from skeleton to real content with a crossfade, not a flash.

Use spinners only for indeterminate actions where no layout preview is possible (file upload progress, background sync).

## Micro-Interactions

Small animations that make interfaces feel alive:

- **Button press**: `transform: scale(0.98)` on `:active`, 100ms ease-out. The button "gives" slightly under pressure.
- **Hover shadow shift**: Subtle shadow depth change on hover (not a shadow animation — crossfade between two shadow states using a pseudo-element and opacity).
- **Toggle switch**: Thumb slides with a slight overshoot (spring easing).
- **Checkmark draw**: SVG stroke-dashoffset animation, 200ms.
- **Input focus**: Border color transition, 150ms. Optionally a subtle glow via box-shadow opacity fade.

## will-change

The `will-change` property hints to the browser to promote an element to its own compositor layer. Rules:

- Only set it immediately before the animation starts (via a class toggle or `animationstart` event).
- Remove it after the animation completes.
- Never set `will-change` in a stylesheet as a permanent property. Permanent layer promotion wastes GPU memory.
- Never apply `will-change` to more than a handful of elements simultaneously.

```css
.card.is-animating {
  will-change: transform, opacity;
}
```

## Blur Effects

Backdrop blur and filter blur are expensive. They force the browser to rasterize underlying content every frame.

- Limit blur radius to 8px or less.
- Use blur only for short, one-off transitions (modal backdrop appearing), never for continuously animated elements.
- Never apply blur to large areas (full-page overlays with heavy blur kill performance on low-end devices).
- Consider a semi-transparent solid color as a cheaper alternative to backdrop-blur.

## Anti-Patterns

- **Bounce / elastic easing**: Looks dated. It was playful in 2015. Modern interfaces use controlled spring physics instead.
- **Animations longer than 500ms for UI feedback**: If the user clicked a button and has to wait half a second for the response animation to finish, the interface feels slow regardless of actual performance.
- **Animation as a mask for slow loading**: If content takes 3 seconds to load, a fancy entrance animation does not hide that. Fix the loading time.
- **Layout thrashing**: Reading layout properties (offsetHeight, getBoundingClientRect) then immediately writing style changes in a loop. Batch reads and writes separately, or use `requestAnimationFrame`.
- **Animating on scroll without throttling**: If you must use JS scroll handlers (last resort), throttle to `requestAnimationFrame` cadence.
- **Auto-playing animation loops**: Decorative animations that loop forever consume battery and attention. If it loops, give it a finite count or let it settle.
