# Deryn Cullen — Portfolio

Personal portfolio site for **Deryn Cullen**, software developer, technical writer and product owner based in Bradford, UK.

The site tells the story of a career in two halves: 16+ years as a composer, producer and session cellist, followed by software engineering and product ownership at Sky and Lloyds Banking Group. It's a single page built with Next.js and statically prerendered, so it loads fast and stays easy to edit.

## Features

- **Single-page layout** with sections for experience, selected work, music and contact
- **Light and dark themes** that follow the system setting, plus a manual toggle that's remembered per browser
- **Responsive** from small phones up to wide desktops
- **Small interactions:** a rotating role badge, orbiting skill tags with a dot that follows the cursor, a scrolling music section that pauses on hover, and sections that fade in on scroll
- **Accessible defaults:** semantic HTML, a labelled theme toggle, `aria-live` on the rotating roles, and all motion switched off for users with `prefers-reduced-motion`

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript |
| Rendering | Static: the page is prerendered at build time |
| Styling | Hand-written CSS with custom properties (design tokens), `color-mix()`, CSS Grid and Flexbox, in `src/app/globals.css` |
| Behaviour | Small client components using `IntersectionObserver`, `requestAnimationFrame` and pointer events |
| Fonts | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Inter](https://fonts.google.com/specimen/Inter) via `next/font`, self-hosted at build time |

## Project structure

```text
portfolio-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # <html>, fonts, metadata, theme script
│   │   ├── page.tsx           # The page markup
│   │   └── globals.css        # All styles and design tokens
│   ├── components/
│   │   ├── Orbit.tsx          # Orbiting skill tags and cursor-following dot
│   │   ├── RoleTicker.tsx     # Rotating role badge
│   │   ├── ScrollEffects.tsx  # Fade-in on scroll and active nav link
│   │   └── ThemeToggle.tsx    # Light/dark toggle
│   └── lib/
│       └── content.ts         # Site content: experience, work, music, links
├── next.config.ts
├── vercel.json
└── package.json
```

## Local development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then visit <http://localhost:3000>. Edits reload automatically.

To check a production build locally:

```bash
npm run build
npm start
```

## Editing content

Most content lives in `src/lib/content.ts` as plain data:

| Content | Export |
| --- | --- |
| Navigation links | `navLinks` |
| Rotating roles | `roles`: the last entry must repeat the first so the loop is seamless |
| Orbiting skill tags | `skills` |
| Experience cards | `experience`: `body` alternates plain and **bold** segments, starting with plain |
| Selected work tiles | `work` |
| Music tiles | `music` |
| Email and social links | `email`, `socials` |

Headings and intro copy for each section are in `src/app/page.tsx`.

### Theming

Colours are CSS custom properties on `:root` in `src/app/globals.css`, such as `--bg`, `--ink` and `--accent`. The dark palette is defined twice: once inside `@media (prefers-color-scheme: dark)` for the system setting, and once under `:root[data-theme="dark"]` for the manual toggle. Change both when you adjust a dark-mode colour.

## Deployment

The site is deployed on **[Vercel](https://vercel.com)**: <https://portfolio-site-kappa-nine-13.vercel.app>

The Vercel project is connected to this repository:

- Every push to `main` deploys to production automatically.
- Pushes to other branches, and pull requests, get their own preview URL.
- `vercel.json` sets the framework to **Next.js**, so Vercel runs `next build` with no other settings needed.

To deploy by hand from your machine (requires the [Vercel CLI](https://vercel.com/docs/cli)):

```bash
vercel deploy --prod
```

### Other hosts

Netlify and Cloudflare Pages both support Next.js. Any Node.js host can run `npm run build && npm start`.

## Roadmap

- [ ] Write case studies for the Sky, Lloyds and technical writing work tiles
- [ ] Add a professional photo
- [ ] Add Open Graph and social preview metadata
- [x] Self-host the fonts so the site makes no requests to Google Fonts

## Contact

- Email: [derynleigh.cullen@icloud.com](mailto:derynleigh.cullen@icloud.com)
- LinkedIn: [linkedin.com/in/deryncullen](https://www.linkedin.com/in/deryncullen/)
- GitHub: [github.com/derynLeigh](https://github.com/derynLeigh)
- Music: [soundcloud.com/deryncullencellist](https://soundcloud.com/deryncullencellist)

## Licence

© Deryn Cullen. All rights reserved. The text, career details and personal content on this site may not be reused without permission.
