# Bytonia Academy — Landing Page

A React + TypeScript + Vite landing page with:
- Three.js 3D hero background (floating "code block" shapes, mouse parallax)
- Framer Motion animations throughout (staggered hero reveal, scroll-reveal cards, slide transitions, accordion)
- Course path cards, testimonials slider, FAQ accordion
- Floating WhatsApp booking button
- Ready-made GitHub Pages deployment via GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Before you deploy

1. **Set your WhatsApp number.** Open `src/components/WhatsAppButton.tsx` and replace
   `REPLACE_WITH_YOUR_NUMBER` with your number in international format, digits only
   (e.g. `201234567890`).
2. **Set the repo name for GitHub Pages.** Open `vite.config.ts` and set `base` to
   `'/<your-repo-name>/'` — this must match the exact name of the GitHub repo you push to.
   If you're deploying to a custom domain, or to a `<username>.github.io` root repo, set
   `base: '/'` instead.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this project to the `main` branch.
2. In the repo settings, go to **Settings → Pages** and set the source to
   **GitHub Actions**.
3. Push to `main` — the included workflow at `.github/workflows/deploy.yml`
   will build the site and publish it automatically. Your site will be live at
   `https://<username>.github.io/<repo-name>/`.

No manual `gh-pages` branch or build step is needed — the Action handles both
on every push to `main`.

## Project structure

```
src/
  components/
    Hero.tsx           hero copy + Framer Motion stagger reveal
    ThreeHero.tsx       Three.js scene (mounted behind the hero text)
    Courses.tsx         3 age-based path cards, scroll-reveal
    Testimonials.tsx    slider with prev/next + dot navigation
    FAQ.tsx             accordion
    WhatsAppButton.tsx  floating booking button
    Footer.tsx
  App.tsx
  index.css             all design tokens + component styles
```
