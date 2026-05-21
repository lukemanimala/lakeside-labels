# Lakeside Labels

Custom label printing landing page with programmatic SEO for vertical-specific pages.

**Project Directory:** `/Users/lukemanimala/Projects/lakeside-labels`

**GitHub:** https://github.com/lukemanimala/lakeside-labels

**Domain:** lakesidelabels.com (purchased, not yet connected)

## Purpose

Shell/demo label maker site for Chicago market. Goals:
1. Demo environment for True Impulse client pitches
2. Test programmatic SEO with vertical-specific landing pages
3. Capture real leads → case study or referral karma

## Decision Log (North Star Critiques)

### Why Labels?
**Score: 15/15 → Ship**
- Already have roll label configurator built
- Zero build time - deploy what exists
- No decision paralysis - asset picks the vertical

### Why Separate Repo (not monorepo)?
**Score: 7/15 → Killed monorepo approach**
- Doesn't mimic real client delivery
- Can't hand off if it becomes real client
- Muddies what monorepo is for
- Each client = own repo, own Vercel project

### Why Astro?
**Score: 14/15 → Ship**
- Programmatic SEO requires generating many pages from data
- Content collections: define data once, generate 50 pages
- One template + markdown files = infinite vertical pages

## Tech Stack

- **Framework:** Astro v6
- **Deployment:** Vercel (with serverless API)
- **Styling:** Scoped CSS (no framework)
- **Content:** Astro Content Collections with glob loader

## Structure

```
src/
├── content/
│   └── verticals/           # Markdown files → auto-generates pages
│       ├── candle-labels.md
│       ├── hot-sauce-labels.md
│       ├── beer-labels.md
│       ├── soap-labels.md
│       └── honey-labels.md
├── pages/
│   ├── index.astro          # Homepage
│   ├── [slug].astro         # Dynamic route for all verticals
│   └── api/
│       └── lead.ts          # Lead capture API (posts to Airtable)
├── components/
│   └── LeadForm.astro       # Reusable lead capture form
├── layouts/
│   └── BaseLayout.astro     # Base HTML layout with nav/footer
└── content.config.ts        # Content collection schema
```

## Generated Pages

- `/` - Homepage
- `/candle-labels` - Custom Candle Labels Chicago
- `/hot-sauce-labels` - Custom Hot Sauce Labels Chicago
- `/beer-labels` - Custom Beer Labels Chicago
- `/soap-labels` - Custom Soap Labels Chicago
- `/honey-labels` - Custom Honey Labels Chicago

## Local Development

```bash
npm run dev    # http://localhost:4321
npm run build  # Build to ./dist/
```

## Adding a New Vertical

Create `src/content/verticals/{slug}.md`:

```markdown
---
title: "Custom [Product] Labels Chicago"
description: "SEO meta description"
headline: "Custom [Product] Labels"
subheadline: "Tagline for this vertical"
keywords: ["keyword1", "keyword2"]
benefits:
  - "Benefit 1"
  - "Benefit 2"
  - "Benefit 3"
  - "Benefit 4"
materials: ["Material 1", "Material 2"]
sizes: ["Size 1", "Size 2"]
minOrder: "50 labels"
leadTime: "5 business days"
cta: "Get Your [Product] Labels"
---

## Body content in markdown
```

Page auto-generates at `/{filename}` (e.g., `coffee-labels.md` → `/coffee-labels`).

## Environment Variables (Vercel)

```
AIRTABLE_PAT=your_personal_access_token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_ID=tblXXXXXXXXXXXXXX
```

## Keyword Research (to inform new verticals)

Research these in Google Trends / Keyword Planner:
- custom labels, custom roll labels, label printing chicago
- custom candle labels, custom hot sauce labels, custom beer labels
- custom soap labels, custom honey labels, cosmetic labels
- waterproof labels, small batch labels, label printing cost

Look for: search volume, seasonality, regional interest (Chicago).

## TODO

- [ ] Connect to Vercel
- [ ] Add Airtable env vars (or create new table for Lakeside leads)
- [ ] Connect lakesidelabels.com domain
- [ ] Embed roll label configurator in vertical pages
- [ ] Add more verticals based on keyword research
- [ ] Run ads to high-intent pages, measure conversion
