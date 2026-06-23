<h1 align="center">All-Good-UI</h1>

<p align="center">
  <strong>Miranda — A sharp-tongued UI expert skill for Claude Code.</strong><br>
  She sees every flaw, fixes it herself, and makes sure your UI is production-ready.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v2.0-D4A5A5?style=flat-square" alt="Version 2.0">
  <img src="https://img.shields.io/badge/license-MIT-D4A5A5?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/claude_code-skill-B8A9C9?style=flat-square" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/dependencies-zero-A8B5A0?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/discovery-structured-E8B4B8?style=flat-square" alt="Structured Discovery">
</p>

<p align="center">
  <sub>v2.0 — Structured discovery card, 3-tier DS detection, 5-dimension taste critique, open-design methodology integration.</sub>
</p>

<p align="center">
  <b>English</b> &nbsp;|&nbsp; <a href="README.zh-TW.md">繁體中文</a> &nbsp;|&nbsp; <a href="README.ja.md">日本語</a>
</p>

---

## The Problem

- AI-generated UI looks like AI-generated UI -- perfect symmetry, generic cards, safe colors, zero personality
- Design rules live in your head, not in a system -- every new page is a coin flip
- Accessibility, SEO, responsive, animation performance -- too many things to check manually every time
- You ship something, then discover contrast is broken on mobile and there's no focus ring on buttons

---

## :mega: How to Call Miranda

Three ways. Pick whichever feels natural.

### 1. Call her name

```text
Miranda, build me a landing page.
米蘭達，幫我做一個首頁。
```

### 2. Just ask for UI work — she shows up automatically

```text
Help me fix this page layout.
這個設計好醜，幫我改。
Check my site's accessibility.
幫我檢查一下無障礙。
```

Any UI-related request activates Miranda. You don't need to say her name — she's always listening for design work.

### 3. Slash command

```text
/all-good-ui
```

### Full trigger list / 完整觸發詞

| English | 中文 |
| :------ | :--- |
| "Miranda" | 「米蘭達」 |
| "build a page" / "make a page" / "landing page" | 「做一個頁面」「做網頁」「幫我做」 |
| "fix this" / "fix the design" | 「修這個」「這很醜」 |
| "check this" / "audit" | 「檢查一下」「幫我看看」 |
| "redesign" / "design system" | 「幫我建設計規範」 |
| "show me options" / "show me versions" | 「給我看幾個版本」 |
| "be the boss" / "just advise" | 「你當老大」「你當顧問」 |
| "deploy check" | 「部署前檢查」 |
| "too much AI" / "looks like AI" | 「AI 味太重」 |
| "quick start" / "full interview" | 「快速開始」「完整訪談」 |

---

## :movie_camera: See Miranda in Action (v2.0 flow)

After installation, just start a conversation. Miranda takes over immediately and runs a structured 9-phase flow — no open-ended chitchat:

```text
You:  I need a landing page for a coffee shop.

Miranda:  You called? I'm Miranda. 30 seconds of your time first.

          ┌──────────────────────────────────────────────────────────┐
          │  Discovery card — pick one per row, paste back.          │
          ├──────────────────────────────────────────────────────────┤
          │  Language:    [ ] English   [ ] 中文                       │
          │  1. Surface:  [ ] landing  [ ] dashboard  [ ] mobile app   │
          │               [ ] deck  [ ] e-guide  [ ] blog  [x] other:  │
          │               landing (coffee shop)  ← inferred from prompt│
          │  2. Audience: [ ] B2B  [ ] B2C  [ ] internal  [ ] portfolio│
          │  3. Tone:     [ ] editorial  [ ] minimal  [ ] tech utility │
          │               [ ] soft warm  [ ] brutalist                 │
          │  4. Brand:    [ ] full DS  [ ] logo + colors  [ ] zero     │
          │  5. Scale:    [ ] single page  [ ] 5-10 pages  [ ] full    │
          └──────────────────────────────────────────────────────────┘

You:  English. B2C. Editorial. Starting from zero. Single page.

Miranda:  Brand = zero → Direction picker time. Pick ONE letter.

          A. Editorial    — Iowan Old Style serif, ink #111111, accent #B8472A
          B. Modern Minimal — Inter sans, neutrals, accent #2563EB
          C. Tech Utility  — JetBrains Mono, terminal palette
          D. Soft Warm     — GenSenRounded, blush + sage
          E. Brutalist     — Mono, hard borders, raw HTML

You:  A.

Miranda:  Locked. Running Pre-flight...
          ┌─ Step 1: Verify DS files (3-tier check) → no project files, fresh start
          ├─ Step 2: grep + normalize hex → none yet (clean slate)
          ├─ Step 3: Write brand-spec.md → tokens locked from Direction A
          └─ Step 4: Vocalise → "Serif display + sans body, ink-on-paper,
                                 single accent #B8472A, 4px base radius."

          Wireframe first — grey blocks, 30 seconds, redirect cheap.

          [emits grey-block wireframe HTML]

You:  Looks good, go.

Miranda:  Dispatching the squad. Each agent = one TodoWrite item.

          ┌─ Emily (Visual Lead):     building tokens, typography, palette
          ├─ Serena (Art Director):   icons + micro-interactions
          ├─ Jocelyn (Layout):        responsive grid + a11y
          └─ Andy (SEO & Deploy):     meta, OG, JSON-LD

Miranda:  Build done. Victor running dual audit (18 technical + 5 taste)...

          ┌─ TECHNICAL: 17/18 passed. 1 contrast fix applied silently.
          └─ TASTE CRITIQUE:
              Philosophy   8/10  Strong  — Editorial direction holds throughout
              Hierarchy    9/10  Strong  — Display type wins; mono captions read right
              Detail       7/10  Strong  — Tokens consistent, no stray hex
              Function     9/10  Strong  — A11y full pass, forms validate
              Innovation   5/10  Functional — Asymmetric editorial layout but
                                            could push harder on display type

          KEEP   — Editorial typographic system
          FIX    — (none, already applied silently)
          QUICK  — Try kicker eyebrow with mono caption pairing for innovation +2

          Ready to deploy. brand-spec.md saved at .miranda/ for next session.
```

---

## The Solution

All-Good-UI installs **Miranda**, a senior UI expert with impeccable taste and zero tolerance for mediocrity. She leads a team of five specialist sub-agents who work in parallel.

### :busts_in_silhouette: The Team

| Name | Role | What They Do |
| :--- | :--- | :----------- |
| **Miranda** | Creative Director | Leads the team, interviews users, makes design decisions, integrates results |
| **Emily** | Visual Lead | Typography, color systems, spacing, visual hierarchy, dark mode |
| **Serena** | Art Director | Icons, animation, transitions, micro-interactions, decorative elements |
| **Victor** | Senior Auditor | Quality audits, AI-slop detection, anti-pattern scanning, final polish |
| **Jocelyn** | Layout Engineer | Responsive design, grid systems, accessibility, keyboard navigation |
| **Andy** | SEO & Deploy | SEO / AIO / GEO / SGE metadata, structured data, Core Web Vitals, pre-deploy checks |

### :sparkles: What Miranda Does

| Capability | Description |
| :--------- | :---------- |
| **Discovery card** | 30-second structured radio form replaces 30 minutes of redirects. No open-ended interviews. |
| **Direction picker** | When you have no brand, Miranda emits 5 fixed style directions — pick one letter, tokens locked. No freestyle palette generation. |
| **Pre-flight protocol** | Before any sub-agent dispatch: verify DS files (3-tier check), grep & normalize hex usage, write `brand-spec.md`, vocalise the contract back. |
| **Wireframe first** | Grey-block layout shown before the full build — discard cheap, redirect cheap. Auto-skips for partial modules / fix tasks / sub-30-line surfaces. |
| **Multi-variant comparison** | Generate 3-5 design directions, let you mix and match ("A's layout + C's spacing"). |
| **18-category technical audit** | Accessibility, AI-slop, performance, responsive, SEO -- runs after every build. |
| **5-dimension taste critique** | Philosophy / Hierarchy / Detail / Function / Innovation — each scored 0-10 with evidence, plus Keep / Fix / Quick-win action lists. |
| **Severity-based silent fix** | Critical issues fixed automatically, preferences and innovation calls reported for your decision. |
| **`brand-spec.md` artifact** | Locked design contract saved to project, so the next session inherits the decisions instead of re-asking. |
| **Production-ready delivery** | Code deploys as-is with SEO, a11y, and performance handled. |

---

## :package: Installation

**Step 1** -- Clone or copy into your Claude Code skills directory:

```bash
git clone https://github.com/HelloRuru/ALL-GOOD-UI.git ~/.claude/skills/all-good-ui
```

**Step 2** -- Register the auto-trigger hook so Miranda activates when you mention her name or any UI-related keyword:

<details>
<summary><strong>Click to expand hook setup</strong></summary>

Add to `~/.claude/settings.json` inside the `"hooks"` section:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "node \"~/.claude/skills/all-good-ui/hooks/miranda-trigger.js\""
          }
        ]
      }
    ]
  }
}
```

Replace `~` with your actual home directory path if needed.

</details>

**Step 3** -- Done. Say "Miranda" or ask any UI question, and she takes over.

**Step 4 (Optional)** -- Supercharge Miranda with [Claude Teams Go](https://github.com/HelloRuru/claude-teams-go) for structured multi-agent orchestration:

<details>
<summary><strong>Click to expand</strong></summary>

Teams Go provides a blueprint-based workflow engine for Claude Code. Miranda's 5 sub-agents can be dispatched as a coordinated team with built-in quality gates and retry logic.

```bash
git clone https://github.com/HelloRuru/claude-teams-go.git ~/claude-teams-go
```

Then copy the included blueprint:

```bash
cp ~/.claude/skills/all-good-ui/hooks/miranda-blueprint.md ~/claude-teams-go/blueprints/
```

See [Claude Teams Go README](https://github.com/HelloRuru/claude-teams-go) for setup details.

</details>

**Step 5 (Optional)** -- Install Better Icons MCP for 200,000+ icon search:

<details>
<summary><strong>Click to expand</strong></summary>

Add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "better-icons": {
      "command": "npx",
      "args": ["-y", "better-icons"]
    }
  }
}
```

</details>

---

## :brain: How Miranda Works

Miranda activates automatically and follows a structured 9-phase workflow:

**Phase 0: Detection** -- Scans your project for framework, package manager, styling system, and existing design tokens.

**Phase 1: Discovery card** -- One 5-row radio card (Surface / Audience / Tone / Brand / Scale) with strict pre-fill rules (only quotes from your current message; never reaches into CLAUDE.md or memory). User-dismiss escape hatch: say "just do it" and Miranda proceeds with `[unconfirmed]` assumptions instead of nagging.

**Phase 1.5: Direction picker** -- Triggered when brand = "starting from zero" or "logo + colors only". Five fixed directions (Editorial / Modern Minimal / Tech Utility / Soft Warm / Brutalist). Pick one letter, tokens locked. No freestyle.

**Phase 1.8: Pre-flight protocol** -- Four steps in order: (1) 3-tier DS verification — dedicated token files / CSS variables / markdown documentation; (2) grep hex values with `tr` + `awk` normalization, top 20 deduplicated and grouped (brand / neutral / dark / state); (3) write `brand-spec.md` with locked tokens and sources; (4) vocalise the contract back to you in 3-5 lines.

**Phase 1.9: Wireframe pass** -- Grey-block layout shown before the full build. Auto-skips when the surface is a partial module, an existing-page redesign, or under 30 lines of HTML.

**Phase 2: Build** -- Dispatches the squad in parallel as real Agent tool calls. Each sub-agent = one TodoWrite item, streaming `in_progress` → `completed` so you can redirect mid-flight.

**Phase 3a: 18-category technical audit** -- Victor runs accessibility, AI-slop, performance, responsive, SEO, visual consistency, etc. Items 1-6 fail-fixes are silent (rule 37).

**Phase 3b: 5-dimension taste critique** -- Same Victor pass scores Philosophy / Hierarchy / Detail / Function / Innovation each 0-10, emits Keep / Fix / Quick-win lists.

**Phase 4-5: Severity action + Delivery** -- Critical issues fixed silently; preference-level and innovation issues reported. `brand-spec.md` ships alongside the build for future-session continuity.

---

## :shield: Two Modes

| Mode | When to Use | Behavior |
| :--- | :---------- | :------- |
| **Boss Mode** | No existing design system, or you want Miranda to lead | Miranda makes all design decisions. Her standards override yours when they conflict. |
| **Consultant Mode** | You have your own brand / design system | Miranda respects your constraints but still flags objectively broken things (contrast, a11y, performance). |

---

## :open_file_folder: File Structure

```text
all-good-ui/
  SKILL.md                        # Main entry -- persona, 9-phase workflow, team, rules
  hooks/
    miranda-trigger.js             # Auto-trigger hook for UserPromptSubmit
    miranda-blueprint.md           # Claude Teams Go blueprint (optional)
  reference/
    typography.md                  # Font stacks, sizing, line height, loading
    color.md                       # Color systems, contrast, dark mode, palette science
    spacing.md                     # 4pt grid, spacing scale, visual rhythm
    motion.md                      # Animation timing, easing, performance, springs
    interaction.md                 # 8 states, forms, focus, loading, errors
    responsive.md                  # Mobile-first, breakpoints, container queries
    accessibility.md               # WCAG AA, ARIA, keyboard, focus management
    metadata-seo.md                # SEO / AIO / GEO / SGE, structured data, OG
    anti-patterns.md               # AI-slop checklist, design anti-patterns
    css-structure.md               # Design tokens, file order, selector rules
  workflow/
    audit.md                       # 18-category audit + 5-dimension critique
    design-lab.md                  # Multi-variant generation and comparison
    icons.md                       # Icon selection + Better Icons MCP integration

# Generated per project (not in this repo):
{your-project}/
  .miranda/
    brand-spec.md                  # Locked DS contract from Pre-flight Phase 1.8
```

---

## :speech_balloon: Commands

| English | 中文 | What It Does |
| :------ | :--- | :----------- |
| "Check this" | 「檢查一下」 | Victor runs full audit (18 technical + 5 taste) |
| "Build a page" | 「做一個頁面」 | Full build workflow from Phase 1 |
| "Fix this" | 「修這個」 | Miranda diagnoses and fixes |
| "Show me options" | 「給我看幾個版本」 | Generate 3-5 variants to compare |
| "Be the boss" | 「你當老大」 | Switch to Boss Mode |
| "Just advise" | 「你當顧問」 | Switch to Consultant Mode |
| "Set up my design system" | 「幫我建設計規範」 | Phase 1.5 direction picker + 1.8 brand-spec |
| "Wireframe first" | 「先給我線框」 | Skip to Phase 1.9 grey-block pass |
| "Just do it" / "you decide" | 「你看著辦」「不要再問」 | User-dismiss escape — Miranda proceeds with `[unconfirmed]` assumptions |
| "Deploy check" | 「部署前檢查」 | Andy runs pre-deploy audit |
| "Too much AI" | 「AI 味太重」 | Victor scans for AI-slop patterns + taste critique |

---

## :wrench: Customization

| What to Change | Where |
| :------------- | :---- |
| Miranda's personality | `SKILL.md` > Persona section |
| Team members | `SKILL.md` > The Team section |
| Typography rules | `reference/typography.md` |
| Color system | `reference/color.md` |
| What counts as "critical" | `SKILL.md` > Phase 4: Severity-Based Action |
| Audit checklist | `workflow/audit.md` |
| Icon preferences | `workflow/icons.md` |

---

## :bulb: Design Philosophy

**Why a persona instead of just rules?**
Rules in a document get skipped. A character with opinions actually gets followed. Miranda doesn't just list what's wrong -- she fixes it with attitude. That makes the output memorable and consistent.

**Why a structured Discovery card (v2.0)?**
Open-ended interview questions cost 30 minutes of redirects. A 5-row radio card costs 30 seconds. The cost of a wrong direction should be one chat round, not a finished build. Borrowed from open-design's "RULE 1 — form before code."

**Why a Direction picker instead of freestyle palettes?**
When the user has no brand, freestyling a palette is the single biggest source of AI-slop. Five fixed directions (Editorial / Minimal / Tech Utility / Soft Warm / Brutalist) give Miranda a deterministic answer instead of a guess.

**Why 3-tier DS detection?**
Design systems show up in three flavors: dedicated token files, CSS variables scattered across stylesheets, or prose in CLAUDE.md / project docs. Checking only the first kind misses real DS commitments and forces unnecessary fallbacks to freestyle.

**Why a wireframe pass before the full build?**
A discarded wireframe costs one turn. A discarded 1000-line build costs your evening. Grey blocks expose layout flaws that color and type would seduce the eye away from. Auto-skipped when the existing layout already serves as the wireframe.

**Why sub-agents?**
Design touches many domains at once -- color, layout, accessibility, SEO. Running them in parallel through specialized agents is faster and more thorough than a single pass. Each dispatch corresponds to a TodoWrite item, so you can redirect mid-flight.

**Why a 5-dimension taste critique on top of technical audit?**
Technical pass / fail tells you if the code works. It doesn't tell you if it's good. Philosophy / Hierarchy / Detail / Function / Innovation scored 0-10 each gives you an evidence-backed verdict on whether the build is forgettable or memorable.

**Why "AI-slop detection"?**
The biggest tell of AI-generated UI is that it looks like AI-generated UI. Perfect symmetry, generic 3-column cards, safe blue-gray palettes. Miranda's team specifically checks for these patterns and breaks them.

---

## :warning: Known Audit Caveats

Miranda's audit is sharp but not infallible. Before you let her auto-apply a "P0 fix", check these traps:

| Symptom | What it might really be | How to verify |
| :------ | :----------------------- | :------------ |
| Two near-identical hex values flagged as "color drift" | An intentional dark-mode uplift (e.g. `#D4A0A4` is the lighter dark-mode version of `#D4A5A5`) | Run `grep` on the suspect hex — if it lives only in `dark-mode.css` / `*-dark.css`, it's intentional, not drift |
| Tier A pattern shows no DS tokens | The project may store its DS in `dark-mode.css`, `theme-*.css`, or `*-tokens.css` (non-standard filenames) | Glob those patterns manually before falling back to Phase 1.5 Direction Picker |
| `#fff` and `#ffffff` both appear in top 20 | A normalization bug in older versions — fixed in v2.0 via `tr 'a-f' 'A-F'` step | Re-run the v2.0 pipeline; they should merge into one `#FFFFFF` entry |

**Rule of thumb:** before letting Miranda silent-fix anything in Phase 4, glance at the Fix list. Anything touching color tokens deserves a 5-second `grep` check.

---

## :pray: Inspiration & Credits

> **All content was written from scratch.** No source code was copied. Miranda's design knowledge is synthesized from the principles taught by these projects.

| Project | Concept Inspired | Link |
| :------ | :--------------- | :--- |
| Impeccable | Design science, anti-patterns, 7-domain reference system | [Website](https://impeccable.style/) |
| Taste Skill | Aesthetic standards, AI-slop detection, style presets | [GitHub](https://github.com/Leonxlnx/taste-skill) |
| Superdesign | Auto-detection, variant generation, design system scaffolding | [Website](https://app.superdesign.dev/) |
| UI Skills | Baseline UI, accessibility, metadata, motion performance | [Website](https://www.ui-skills.com/) |
| Better Icons | 200k+ icon search via MCP | [GitHub](https://github.com/better-auth/better-icons) |
| Design Plugin | Multi-variant comparison, feedback collection workflow | [GitHub](https://github.com/0xdesign/design-plugin) |
| **open-design** (v2.0) | Discovery card + Direction picker + Pre-flight protocol + 5-dimension critique methodology — six load-bearing ideas that shaped Miranda v2.0 | [GitHub](https://github.com/fishtvlvoe/open-design) |

---

## Requirements

- [Claude Code](https://claude.ai/claude-code) (CLI or VS Code extension)
- Node.js 18+ (only if using Better Icons MCP)

## License

MIT -- see [LICENSE](LICENSE) for details.

---

<p align="center">
  Made by <a href="https://ohruru.com">HelloRuru</a> -- because good UI shouldn't need an explanation.
</p>
