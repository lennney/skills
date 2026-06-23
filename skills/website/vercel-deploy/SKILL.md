---
name: vercel-deploy
description: Vercel deployment workflows for Next.js — preview deployments, environment variables, branch configuration, log troubleshooting, and production rollbacks. Use when deploying to Vercel, debugging failed builds, or configuring deployment settings.
---

# Vercel Deploy (Next.js)

Vercel deployment management for Next.js projects.

## Deployment Flow

```
git push origin main
  └─ Vercel: Production Deploy
      └─ Build → Deploy → Ready (auto-assigns domain)

git push origin feature-branch
  └─ Vercel: Preview Deploy
      └─ Build → Deploy → Ready (auto-generates preview URL)
      └─ Comment on PR with preview link
```

## Project Configuration

### `vercel.json`

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "regions": ["hnd1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Environment Variables

```bash
# Production (Vercel Dashboard → Project → Settings → Environment Variables)
DATABASE_URL=...
AUTH_SECRET=...

# Preview (same dashboard, set for Preview only)
DATABASE_URL=..._preview
NEXT_PUBLIC_API_URL=https://staging-api.example.com

# Local development (.env.local)
DATABASE_URL=postgres://localhost:5432/dev
```

**Best Practices:**
- Production secrets → Vercel Dashboard (never in code)
- `NEXT_PUBLIC_*` prefix for client-side env vars
- Use Vercel Environment Variable Groups for shared vars across projects
- Never commit `.env` files (only `.env.example`)

## Branch Configuration

### Production Branch

Set in Vercel Dashboard: Project → Settings → Git → Production Branch

```
Production Branch: main
```

### Preview Deployments

- Every push to non-production branches creates a preview
- Preview URLs: `project-name-git-branch-name-xxxxx.vercel.app`
- Preview branches can be limited in Settings → Git → Ignored Branches

```
Ignored Branches:
- dependabot/**
- renovate/**
- docs/**
```

## Build Troubleshooting

### Common Build Failures

| Error | Likely Cause | Fix |
|-------|-------------|-----|
| `Module not found` | Missing dependency | `npm ci` locally, check lockfile |
| `Build exceeded memory limit` | Too many parallel builds, memory leak | Reduce parallel tasks, check for memory leaks |
| `Command "npm run build" exited with 1` | TypeScript/ESLint errors | Run `npm run lint` + `npx tsc --noEmit` locally |
| `Function Invocation Failed (Serverless)` | Lambda timeout or memory | Increase function memory/maxDuration in vercel.json |
| `Error: ENOENT: no such file or directory` | Build artifact not found | Check `outputDirectory` in vercel.json |

### Debug Locally

```bash
# Build locally (matches Vercel build)
npm run build

# Check bundle
npx next build

# Preview production build locally
npm run start

# Use Vercel CLI for precise reproduction
vercel build --prod
npx serve .vercel/output/static
```

## Logs & Monitoring

```bash
# View deployment logs
vercel logs <deployment-url>

# Live tail production logs
vercel logs --tail

# Vercel Dashboard → Project → Logs:
#   - Build Logs (build failures)
#   - Function Logs (runtime errors, API routes)
#   - Edge Function Logs (middleware, edge runtime)
```

### Speed Insights & Analytics

Enable in Vercel Dashboard:
- **Speed Insights** → Core Web Vitals (LCP, CLS, INP) per route
- **Web Analytics** → Page views, top pages, traffic sources

## Rollback

```bash
# CLI: rollback to previous deployment
vercel rollback

# CLI: rollback to specific deployment
vercel rollback <deployment-id>

# Dashboard: Project → Deployments → [deployment] → ⋮ → Promote to Production
```

## Checklist

- [ ] `vercel.json` configured (regions, headers, build settings)
- [ ] Environment variables set correctly for Production + Preview + Development
- [ ] Preview deployments work for all feature branches
- [ ] Build succeeds locally (`npm run build`)
- [ ] Speed Insights enabled (monitor Core Web Vitals)
- [ ] Rollback process known and documented
- [ ] Production branch protection set (main)
- [ ] Ignored branches configured (dependabot, docs)
- [ ] Security headers configured in vercel.json
- [ ] Team members have appropriate Vercel access roles