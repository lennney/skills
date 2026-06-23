# Skills For Building Websites With AI

[![skills.sh](https://skills.sh/b/lennney/skills)](https://skills.sh/lennney/skills)

Skills for building production websites with AI coding agents. Designed for people who ship — not vibe coders, not over-engineers.

I use these skills every day with Claude Code and Codex. They turn "ask AI for code" into "tell AI what to build and watch it happen."

## Quickstart (30-second setup)

```bash
npx skills@latest add lennney/skills
```

Pick the skills you want. Then just:

```
/gate
```

That's it. From there, the AI guides you through every phase of building a website — from discussion to deployment.

## Why These Skills Exist

I built these for my teammates — people who use Codex and Claude Code but want structure, not chaos. Here's what they fix.

### #1: The Agent Goes Off The Rails

> "Tell the AI what you need, not how to build it."

**The Problem.** You tell the AI "build me a landing page." 200 lines later you have a full authentication system, a blog engine, and a database schema you never asked for. The AI guessed. It guessed wrong.

**The Fix** is [`/gate`](./skills/workflow/gate/SKILL.md). One command that routes to the right phase:

```
/gate-discuss   → "Let's clarify what you're building"
/gate-init      → "Scaffolding the project"
/gate-frontend  → "Building the pages you described"
```

Each phase tells the AI exactly what to do and what NOT to do. No scope creep. No guessing.

### #2: You Repeat Yourself Every Session

> "Without written procedures, your AI forgets everything between sessions."

**The Problem.** Every time you start a new chat, you have to re-explain your conventions. "We use Tailwind. Components go in `src/components/`. We use shadcn/ui." The AI nods, then does whatever it wants.

**The Fix** is formalized skills. Each skill is a documented procedure the AI follows automatically:

| Without Skills | With Skills |
|---------------|-------------|
| "Style it like the other pages" | `/styling-tailwind` → AI knows the pattern |
| "Add SEO stuff" | `/seo-checklist` → AI checks 10 SEO items |
| "Review this PR" | `/ai-code-review` → AI checks 4 dimensions |

Your conventions, your process, automated.

### #3: Your Non-Technical Teammates Can't Use AI

> "The best AI tool is useless if your designer can't run it."

**The Problem.** You set up Claude Code for your team. They ask "what do I type?" You explain commands, context, flags, modes. They give up.

**The Fix** is the background execution pattern. The AI does everything technical. Your teammate only answers questions:

```
AI: "What's the website about?"
You: "A Fatekeeper game guide"
AI: "Got it. Building the project..." (runs create-next-app in background)
AI: "Done. What should the hero section say?"
```

No commands. No terminal. Just conversation.

### #4: The 0-to-1 Workflow Is A Mess

> "Most AI skills assume you already have a project. What if you're starting from scratch?"

**The Problem.** Most developer tools expect you to already have a project folder, a package.json, a dev environment. But what if you're building something new?

**The Fix** is the complete 0→1→2→3 workflow built into `/gate`:

```
🆕 From Zero
  /gate-discuss   → Clarify requirements (grill-me, domain-modeling)
  /gate-init      → Scaffold Next.js + shadcn + Git
  /gate-frontend  → Build pages, components, styles
  /gate-seo       → Configure Metadata + SEO checklist
  /gate-deploy    → Push to GitHub + Vercel

📈 Optimize (1 → 2 → 3)
  /gate-perf      → Lighthouse > 95, Core Web Vitals
  /gate-a11y      → WCAG AA, keyboard navigation
  /gate-testcov   → Playwright E2E tests
  /gate-ci        → Auto-deploy on push
  /gate-animate   → Framer Motion, scroll animations

🤖 AI Help (any time)
  /gate-ai        → Coding, review, testing, debugging, refactoring
```

## Project Structure

```
skills/
├── website/       (12)  Component design, layouts, styling, SEO, deploy
├── discussion/    (5)   Requirements, domain modeling, handoff
├── engineering/   (6)   TDD, debugging, code review, prototypes
├── design/        (11)  UI/UX, design systems, anti-AI-slop
├── product/       (3)   PRD, acceptance criteria, user stories
├── ai/            (6)   AI coding, review, testing, debug, refactor, git
└── workflow/      (12)  Gate routing system — the entry point
```

## Philosophy

These skills follow a few principles:

- **Background execution** — The AI does the work. You answer questions.
- **Plain language** — The AI explains what it did in simple terms.
- **Progressive disclosure** — Start with `/gate`, drill into specifics.
- **No lock-in** — Each skill is a standalone markdown file. Adapt them.

## Usage

```bash
# Install
npx skills@latest add lennney/skills

# Start building
/gate

# Or jump to a specific phase
/gate-frontend
/gate-perf
/ai-coding-workflow
```

## License

MIT — use them, hack them, make them your own.
