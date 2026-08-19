# Ahbabli — Graphic Designer Portfolio

A modern, responsive graphic-designer portfolio built with React, Vite, and
Tailwind CSS.

> **Heads up:** No PDF with your project/photo information was attached to
> the build request. This build was made from your `mypesonal.txt` file
> (name, username, email, phone) and the avatar image you uploaded. Anything
> not present in those files — your title, bio, skills, tools, social links,
> and all portfolio projects — has been filled in with **clearly marked
> placeholders**. See "Replacing placeholder content" below.

---

## 1. Installation & local development

Requirements: Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the local dev server (http://localhost:5173)
npm run dev

# build the production bundle into /dist
npm run build

# preview the production build locally
npm run preview
```

---

## 2. Project structure

```text
src/
├── components/
│   ├── Navbar.jsx          Sticky nav + animated mobile hamburger menu
│   ├── Hero.jsx             Hero section (photo, name, title, intro, CTAs)
│   ├── Portfolio.jsx        Gallery section (filters + grid + modal wiring)
│   ├── PortfolioFilters.jsx Animated category filter pills
│   ├── ProjectCard.jsx      Single project grid card
│   ├── ProjectModal.jsx     Lightbox/modal with prev/next + keyboard nav
│   ├── About.jsx            Bio, skills, tools
│   ├── Contact.jsx          Contact info + Netlify-Forms-ready form
│   ├── Footer.jsx           Footer with nav, socials, dynamic year
│   └── SectionHeading.jsx   Shared section heading
├── data/
│   ├── siteInfo.js          ← your name, title, bio, contact, socials
│   ├── categories.js        ← the list of portfolio filter categories
│   └── projects.js          ← your portfolio projects
├── pages/
│   ├── Home.jsx              Assembles all sections
│   └── NotFound.jsx          Custom 404 page
├── App.jsx                   Routing (React Router)
├── main.jsx                  App entry point
└── index.css                 Tailwind layers + base/global styles

public/
├── images/                   Profile photo + placeholder project images
├── favicon.svg
└── _redirects                 Netlify SPA fallback (belt-and-braces with netlify.toml)
```

---

## 3. Replacing placeholder content

Everything editable lives in **`src/data/`** — you should not need to touch
component code to update your content.

### Personal info — `src/data/siteInfo.js`
Already filled in from your files: `name`, `username`, `email`, `phone`.
Still marked **PLACEHOLDER** and waiting for your input:

- `title` — currently uses the example title from the brief
  ("Graphic Designer & UI/UX Designer"). Change it to your real title.
- `heroIntro` — the short intro shown in the hero section.
- `aboutBio` — your longer biography for the About section. Separate
  paragraphs with a blank line / `\n`.
- `skills` — array of strings, e.g. `"Brand Identity"`. Leave empty to hide
  the Skills block.
- `tools` — array of strings, e.g. `"Adobe Illustrator"`. Leave empty to
  hide the Tools block. Only list tools you actually use.
- `social` — add real URLs for `instagram`, `behance`, `dribbble`,
  `linkedin`. Leave any of them as an empty string `""` to hide that icon.
- `profileImage` — path to your photo inside `public/images/`.

### Portfolio projects — `src/data/projects.js`
No real projects were supplied, so this file currently contains **6 demo
placeholder projects** (marked `isPlaceholder: true` and labeled "Demo" in
the UI) just to demonstrate the gallery, filtering, and modal working.

To add your own project, copy this shape and add it to the array:

```js
{
  id: 7,                                  // unique number
  title: "Project Title",
  category: "Logo Design",                // must match src/data/categories.js exactly
  thumbnail: "/images/project-thumb.webp",
  images: ["/images/project-1.webp", "/images/project-2.webp"],
  description: "Short project description.",
  featured: true,
}
```

Delete the demo entries once you've added your real work (or leave them —
they'll simply keep showing until removed).

### Categories — `src/data/categories.js`
The filter categories are already set up per the brief (Thumbnail Design,
Resume Design, Logo Design, Flyer Design, Brochure Design, UI/UX Design,
Business Card Design, Social Media Design, Banner & Advertising Design).
Edit this list if you want to rename or add a category — just keep every
project's `category` field in sync.

### Images
Put all images inside `public/images/`. Reference them with a leading
slash, e.g. `/images/my-photo.webp`. Prefer `.webp` for smaller file sizes;
`.jpg`/`.png` also work.

---

## 4. Contact form (Netlify Forms)

The contact form is wired up for **Netlify Forms** — no backend required.

Two things make this work together, and both already exist in the project:

1. `src/components/Contact.jsx` — the real, interactive React form users see
   and submit.
2. A **hidden static duplicate** of the same form in `index.html`. Netlify's
   build bot only scans built HTML (not the JavaScript app) to detect forms,
   so this duplicate is required for the form to register in your Netlify
   dashboard. If you rename or add fields to the React form, update the
   hidden form in `index.html` to match.

After deploying, submissions will appear under **Site settings → Forms** in
your Netlify dashboard, and you can turn on email notifications there.

---

## 5. Netlify deployment

**Build command:** `npm run build`
**Publish directory:** `dist`

### Option A — Netlify UI (drag & drop or Git)
1. Push this project to a GitHub/GitLab/Bitbucket repository (or use
   drag-and-drop deploy with the `dist` folder after running `npm run
   build` locally).
2. In Netlify: **Add new site → Import an existing project**, connect your
   repo, and confirm the build command/publish directory above (already
   pre-filled by `netlify.toml`).
3. Deploy. Netlify will pick up `netlify.toml`, which also configures the
   SPA redirect so refreshing any route (including the 404 page) doesn't
   produce a Netlify 404.

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### After deploying, confirm:
- [ ] The production build completes without errors (`npm run build`)
- [ ] Portfolio filtering works
- [ ] The project modal opens/closes and prev/next works
- [ ] Mobile navigation (hamburger menu) opens/closes
- [ ] The contact form appears under Site settings → Forms, and a test
      submission arrives
- [ ] Images load correctly
- [ ] Refreshing a direct route (e.g. a nonexistent URL) does not show a
      Netlify 404 page — it should show the app's own custom 404 page

---

## 6. Production-readiness checklist

- [x] Fully responsive (mobile, tablet, laptop, desktop)
- [x] Sticky nav with animated mobile hamburger menu
- [x] Hero section with photo, name, title, intro, and two CTAs
- [x] Filterable, responsive portfolio grid generated from a data array
- [x] Project modal/lightbox with next/previous and keyboard support
      (Esc to close, arrow keys to navigate)
- [x] Empty state shown when a filtered category has no projects
- [x] About section with bio, skills, tools (each hidden gracefully if empty)
- [x] Contact section with Netlify-Forms-ready form, validation, loading
      and success states
- [x] Footer with dynamic year and "Designed and developed for Ahbabli"
- [x] Custom 404 page
- [x] SEO + Open Graph + Twitter Card metadata, favicon, page title
- [x] `netlify.toml` + `_redirects` so route refreshes don't 404
- [x] Lazy-loaded, responsive project images
- [x] Visible keyboard focus states throughout
- [x] Descriptive image alt text
- [x] `prefers-reduced-motion` respected
- [ ] **You still need to:** replace placeholder title/bio/skills/tools,
      add real social links, and swap in your real portfolio projects.

---

## 7. Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) (for the 404 route)
- [React Icons](https://react-icons.github.io/react-icons/)
- Google Fonts: **Patua One** (headings/display) + **Work Sans** (body)
