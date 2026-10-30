# Deryn Cullen — Portfolio

Personal portfolio site for **Deryn Cullen**, software developer, technical writer and product owner based in Bradford, UK.

The site tells the story of a career in two halves: 16+ years as a composer, producer and session cellist, followed by software engineering and product ownership at Sky and Lloyds Banking Group. It's a single, dependency-free page built to load fast and be easy to edit.

## Features

- **Single-page layout** with sections for experience, selected work, music and contact
- **Light and dark themes** that follow the system setting, plus a manual toggle that's remembered per browser
- **Responsive** from small phones up to wide desktops
- **Small interactions:** a rotating role badge, orbiting skill tags with a dot that follows the cursor, a scrolling music section that pauses on hover, and sections that fade in on scroll
- **Accessible defaults:** semantic HTML, a labelled theme toggle, `aria-live` on the rotating roles, and all motion switched off for users with `prefers-reduced-motion`

## Tech stack

| Layer | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | Hand-written CSS with custom properties (design tokens), `color-mix()`, CSS Grid and Flexbox |
| Behaviour | Vanilla JavaScript (`IntersectionObserver`, `requestAnimationFrame`, pointer events) |
| Fonts | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Inter](https://fonts.google.com/specimen/Inter), from Google Fonts |
| Build | None: no framework, bundler or package manager |

Everything lives in `index.html`: styles in a `<style>` block in the head, scripts in a `<script>` block at the end of the body.

## Project structure

```text
portfolio-site/
├── index.html   # The whole site: markup, styles and scripts
└── README.md
```

## Local development

You only need a browser. To open the page directly:

```bash
open index.html
```

A local server is closer to how the site behaves once it's hosted, so it's the better option. Use either of these:

```bash
python3 -m http.server 4321
```

```bash
npx serve .
```

Then visit <http://localhost:4321> (or the address `serve` prints). There's no build step, so reload the page after each edit.

## Editing content

All content is plain HTML in `index.html`. Each section has an `id`:

| Section | Where to find it |
| --- | --- |
| Header and navigation | `<header class="wrap">` |
| Hero, rotating roles | `<div class="wrap hero">` and `<ul id="roles">` |
| Experience cards | `<section id="experience">` |
| Selected work tiles | `<section id="work">` |
| Music cards | `<section id="music">` |
| Contact and social links | `<section id="contact">` |

Some things are set in the script rather than the markup:

- **Orbiting skill tags:** edit the `skills` array in the `<script>` block.
- **Rotating roles:** the last `<li>` in `#roles` must repeat the first one so the loop is seamless.

### Theming

Colours are CSS custom properties on `:root`, such as `--bg`, `--ink` and `--accent`. The dark palette is defined twice: once inside `@media (prefers-color-scheme: dark)` for the system setting, and once under `:root[data-theme="dark"]` for the manual toggle. Change both when you adjust a dark-mode colour.

## Deployment

The site is a static file, so any static host will serve it as it is.

### GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. The site appears at `https://<username>.github.io/<repository>/` within a minute or two. To serve it from `https://<username>.github.io/`, name the repository `<username>.github.io`.

### Other hosts

Netlify, Vercel and Cloudflare Pages all work with no configuration. Point them at the repository root and leave the build command empty.

## Roadmap

- [ ] Write case studies for the Sky, Lloyds and technical writing work tiles
- [ ] Add a professional photo
- [ ] Add Open Graph and social preview metadata
- [ ] Self-host the fonts so the site makes no requests to Google Fonts

## Contact

- Email: [derynleigh.cullen@icloud.com](mailto:derynleigh.cullen@icloud.com)
- LinkedIn: [linkedin.com/in/deryncullen](https://www.linkedin.com/in/deryncullen/)
- GitHub: [github.com/derynLeigh](https://github.com/derynLeigh)
- Music: [soundcloud.com/deryncullencellist](https://soundcloud.com/deryncullencellist)

## Licence

© Deryn Cullen. All rights reserved. The text, career details and personal content on this site may not be reused without permission.
