# gl-tches.com

Personal blog and project showcase. Built with [Astro](https://astro.build), hosted on [GitHub Pages](https://pages.github.com).

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Content

**Blog posts** go in `src/content/posts/` as Markdown files:

```markdown
---
title: "YOUR TITLE IN ALL CAPS"
date: "2026-01-15"
description: "Short description for the listing."
tags: ["tag1", "tag2"]
draft: false
---

Post content here.
```

**Projects** go in `src/content/projects/`:

```markdown
---
title: "PROJECT NAME"
description: "One-line description."
url: "https://example.com"
repo: "https://github.com/user/repo"
status: "active"  # active | wip | archived
tags: ["rust", "infra"]
---
```

**Links** are edited directly in `src/pages/links.astro`.

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

### Custom domain

1. Set the repo's GitHub Pages source to "GitHub Actions" in Settings → Pages
2. Add `gl-tches.com` as a custom domain
3. Configure DNS: CNAME `gl-tches.com` → `gl-tches.github.io`
