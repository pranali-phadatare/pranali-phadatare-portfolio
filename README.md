# Pranali Phadatare — Frontend Developer Portfolio

A modern, responsive personal portfolio built with **Angular 20** showcasing 4 years of frontend development experience.

**Live:** [pranali-phadatare.netlify.app](https://pranali-phadatare.netlify.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 20 (Standalone Components) |
| Language | TypeScript 5.8 |
| Styling | CSS3 with Custom Properties (dark/light theme) |
| State | Angular Signals + Computed |
| Forms | Reactive Forms |
| Routing | Angular Router (lazy-loaded routes) |
| Email | EmailJS |
| Build | Angular CLI / `@angular/build` |
| Deploy | Netlify / Vercel |

---

## Features

- **Dark / Light theme** — persisted via `localStorage`, respects system preference
- **Typewriter animation** — role cycling with blinking cursor (zero RxJS, native `setTimeout`)
- **Scroll animations** — `IntersectionObserver`-based directive for entrance effects
- **Lazy-loaded routes** — every page is a separate JS chunk for fast initial load
- **Contact form** — reactive form with validation, sent via EmailJS
- **SEO-ready** — meta tags, Open Graph, Twitter Card, per-route `<title>`
- **Smooth page transitions** — Angular `withViewTransitions()`
- **Fully responsive** — mobile-first layout

---

## Pages

| Route | Component |
|---|---|
| `/home` | Hero section, typewriter, stats |
| `/about` | Bio, highlights, facts |
| `/skills` | Skill bars, tech stack tags |
| `/projects` | Filterable project cards |
| `/experience` | Timeline + education |
| `/contact` | Reactive form + contact info |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 20: `npm install -g @angular/cli`

### Install & Run

```bash
git clone https://github.com/pranali-phadatare/pranali-phadatare-portfolio.git
cd pranali-phadatare-portfolio
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

### Production Build

```bash
ng build
# Output: dist/Pranali_Phadatare/browser/
```

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Hero + typewriter + stats
│   │   ├── about/         # Bio + highlights
│   │   ├── skills/        # Skill bars + tech tags
│   │   ├── projects/      # Filterable cards
│   │   ├── experience/    # Timeline + education
│   │   ├── contact/       # Reactive form
│   │   ├── navbar/        # Fixed nav + theme toggle
│   │   └── footer/        # Links + back-to-top
│   ├── directives/
│   │   └── scroll-animation.directive.ts
│   ├── models/
│   │   ├── project.model.ts
│   │   └── experience.model.ts
│   ├── services/
│   │   ├── theme.service.ts
│   │   └── contact.service.ts
│   ├── app.routes.ts      # Lazy-loaded routes
│   ├── app.config.ts      # App providers
│   └── app.ts             # Root component
├── styles.css             # Global theme + utilities
└── index.html             # SEO meta + fonts
```

---

## Deployment

### Netlify (configured via `netlify.toml`)

1. Connect repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/Pranali_Phadatare/browser`
4. SPA redirect rule is already configured

### Vercel (configured via `vercel.json`)

1. Import repo in Vercel
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `dist/Pranali_Phadatare/browser`

---

## EmailJS Setup

The contact form uses [EmailJS](https://emailjs.com). To use your own account:

1. Create a free account at emailjs.com
2. Add a service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `src/app/services/contact.service.ts`:

```ts
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

---

## License

MIT — free to use as a template. Please update the content with your own information.

---

*Built with Angular 20*
