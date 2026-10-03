# Indigo Interiors

Static Astro rebuild of [indigo-interiors.com](https://www.indigo-interiors.com) (previously Wix Studio), deployed to Cloudflare Pages.

## Develop

```bash
npm install
cp .env.example .env   # add your Web3Forms access key
npm run dev
```

## Structure

```
src/
├── styles/tokens.css      # Colours, type, spacing, radii (from the Claude Design handoff)
├── styles/global.css      # Reset, base type, .container, .btn
├── data/site.ts           # Contact details, nav, services, socials, testimonials
├── layouts/BaseLayout.astro
├── components/
│   ├── Header.astro          # Floating pill header, services dropdown, mobile menu
│   ├── Footer.astro          # Shared rounded teal footer
│   ├── ContactSection.astro  # Contact details + Web3Forms form (Home and Contact)
│   └── home/                 # Hero, services grid, "Kind words" carousel
├── assets/                # Images (optimised to WebP at build by astro:assets)
└── pages/
public/
├── _redirects             # Old Wix /blank-* URLs -> new routes (301)
└── _headers               # Security + immutable caching for /_astro/*
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `PUBLIC_WEB3FORMS_KEY`
- Node version: 22.12 or later (`NODE_VERSION=22`)
