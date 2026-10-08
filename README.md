<h1 align="center">Ravi Prakash — Portfolio</h1>

<p align="center">
  <em>A tactile, editorial portfolio built around ivory paper, ink-black type and gold accents.</em>
</p>

<p align="center">
  <a href="https://imraviprakash.netlify.app/"><b>Live site</b></a> &nbsp;·&nbsp;
  <a href="#whats-on-the-site">Sections</a> &nbsp;·&nbsp;
  <a href="#featured-projects">Projects</a> &nbsp;·&nbsp;
  <a href="#tech-stack">Tech stack</a> &nbsp;·&nbsp;
  <a href="#getting-started">Getting started</a>
</p>

---

## Overview

The personal portfolio of **Ravi Prakash (RK.)**, a full-stack developer based in Bangalore, India, who builds AI-powered products.

The site is a single page designed to feel less like a template and more like a desk: print typography, warm paper tones, and small stationery details such as pushpins, tape and paperclips, with motion used to add character rather than noise.

> **Live:** [imraviprakash.netlify.app](https://imraviprakash.netlify.app/)

---

## Design system

**Palette**

| Role | Hex | Used for |
| --- | --- | --- |
| Ivory | `#F5F1E6` | Page background |
| Ink | `#0C0C0C` / `#121212` | Typography, cards and structure |
| Gold | `#C9972E` / `#D9A441` | Highlights, interactive states and glows |

**Typography**

| Role | Font | Used for |
| --- | --- | --- |
| Display serif | Playfair Display | Large editorial headlines |
| Interface sans | Inter | Body copy, metadata and buttons |
| Handwritten | Permanent Marker | Sticky note labels and the "Hey, I'm" greeting |
| Accents | Tracked uppercase | Category labels and timestamps |

**Signature details**

- Hand-drawn SVG stationery: brass pushpins with radial highlights, dark tape strips, wire paperclips and ink squiggles
- Layered radial glows at the top and bottom of the page, finished with an SVG fractal-noise grain

---

## What's on the site

### Navigation
- **Frosted glass header** — transparent over the hero, then switches to a frosted glass background (`rgba(245, 241, 230, 0.88)` with backdrop blur) once the hero has scrolled past, detected with an `IntersectionObserver`
- **Scroll-reactive contrast** — header text switches between white and ink black depending on whether it sits over the dark glow or the light page
- **Active section tracking** — a spring-animated gold underline follows the section you're in
- **Hash-free smooth scrolling** — navigation scrolls smoothly between sections without adding fragments to the URL
- **Mobile drawer** — a full-screen overlay with large serif links and a quick call to action

### Hero
- **Editorial title** — "Hey, I'm" in handwritten script above a two-line serif "Ravi Prakash", using fluid `clamp()` sizing
- **Golden rim-light** — a subtle text-shadow highlight that reacts to scroll depth through the `--glow-opacity` custom property
- **Interactive sticky notes** — Developer, Designer and Artist notes drop into place on load with Framer Motion spring physics, staggered with a slight angular wobble
  - The Developer and Artist notes flip in 3D on click to reveal links to GitHub and Instagram
  - A flipped note reverts two seconds after the cursor leaves, and Escape dismisses it
- **Calls to action** — jump to selected work, or download the resume PDF

### About
- **Identity card** — a matte black card with monogram branding, skill pills with a gold hover state, current focus areas (Agentic AI, Creative Web, Product Development), languages known and location, finished with a metallic light sweep
- **Editorial story** — short copy on how I think about design and engineering

### Projects
Spacious, alternating two-column layouts. Each project has its brand logo, an ambient gold glow, a short description, its stack, and direct links.

### Skills
A 2×2 grid of cards grouping technologies into four categories, with interactive pill tags (see [Technical skills](#technical-skills)).

### Experience and education
- **Scroll-drawn timeline** — a gold progress line is drawn down the timeline in real time as you scroll, using Framer Motion's `useScroll` and `useTransform`
- **MindMatrix** — Android Application Development Intern (GenAI), Feb 2026 – May 2026
- **Sri Sairam College of Engineering** — B.E. in Computer Science & Engineering, 2022 – 2026

### Contact
- **Direct channels** — one-click email and phone links, plus location
- **Web3Forms delivery** — messages are sent without a page reload and arrive in my inbox
- **Validation** — name, email format and message are checked before sending
- **Spam protection** — a hidden honeypot field catches bots without a CAPTCHA
- **Stable layout** — a fixed-height status area keeps the page from jumping on success or error

### Footer
- A closing gradient arc that mirrors the hero, social links with gold hover states, and a smooth back-to-top button

---

## Featured projects

**Zix'Ovibes** — *Full-stack music and focus workspace*
A full-stack music and focus workspace combining music discovery, playlists and persistent playback with an AI-powered Deep Focus system. Users describe what they want to accomplish in natural language and turn it into structured tasks, timed work sessions and trackable progress.
**Stack:** React.js · Vite · JavaScript · Node.js · Express · AI APIs
**Links:** [Live demo](https://zixovibes.netlify.app/) · [GitHub](https://github.com/immraviprakash/zixovibes)

**Rakta Seva Connect** — *AI-assisted emergency blood-donation platform*
An Android application developed during my MindMatrix internship to coordinate blood donors and emergency requests. It combines donor profiles, blood-group and eligibility filtering, proximity-based discovery, Firebase-backed workflows, emergency notifications and AI-assisted request communication.
**Stack:** Kotlin · Jetpack Compose · Firebase · Firestore · MVVM · Groq AI
**Links:** [GitHub](https://github.com/immraviprakash/rakta-seva-connect)

**Trade-Z** — *Collaborative AI trading assistant*
A collaborative AI trading assistant, built with a team, that combines LSTM market forecasting, reinforcement-learning strategy signals and sentiment analysis in a React–Flask application. My contribution focused on backend development and AI workflow integration.
**Stack:** Python · Flask · React.js · LSTM · Reinforcement Learning · NLP
**Links:** [GitHub](https://github.com/immraviprakash/trade-z)

---

## Technical skills

| Category | Technologies |
| --- | --- |
| **01 — Build** | JavaScript, React, Node.js, Express.js, Flask, REST APIs, Kotlin, Jetpack Compose, HTML, CSS |
| **02 — Intelligence** | Python, Generative AI, AI / LLM APIs, Prompt Engineering, RAG, Machine Learning, NLP, Sentiment Analysis, LSTM, Reinforcement Learning, Explainable AI |
| **03 — Data** | SQL, MySQL, MongoDB, Firebase Firestore |
| **04 — Tools & Cloud** | Git, GitHub, Firebase, Google Cloud, Render, Vercel, Netlify |

---

## Responsive behaviour

- **Mobile hero** — below 1024px, the three sticky notes move from a horizontal row into a staggered cluster beneath the headline, so there is no horizontal scrolling and the flip interaction still works
- **Fluid typography** — `clamp()` is used across all headlines, scaling smoothly from 320px screens to large monitors
- **Mobile menu** — a full-screen drawer with animated open and close transitions (`AnimatePresence`)
- **Touch targets** — pills, links and buttons keep comfortable tap areas

---

## Tech stack

| Layer | Technologies |
| --- | --- |
| Framework | [React 19](https://react.dev/) + [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + custom CSS design tokens |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Icons and graphics | [Lucide React](https://lucide.dev/) + hand-drawn SVGs |
| Contact form | [Web3Forms](https://web3forms.com/) |
| Linting | [Oxlint](https://oxc.rs/) |
| Hosting | [Netlify](https://www.netlify.com/) |

---

## Project structure

<details>
<summary>View the file tree</summary>

```text
├── public/
│   ├── Ravi-Prakash-Resume.pdf   # Downloadable resume
│   ├── favicon*                  # Favicons and icons
│   └── icons.svg
├── src/
│   ├── assets/                   # Project brand logos
│   ├── components/
│   │   ├── Footer.jsx            # Closing footer with socials and back-to-top
│   │   ├── Icons.jsx             # GitHub and LinkedIn icons
│   │   ├── Nav.jsx               # Header with scroll-reactive colour and glass state
│   │   └── Reveal.jsx            # Reusable scroll-reveal wrapper
│   ├── data/
│   │   └── site.js               # Content: projects, skills, copy, socials
│   ├── sections/
│   │   ├── About.jsx             # Story and identity card
│   │   ├── Contact.jsx           # Validated form with Web3Forms integration
│   │   ├── Experience.jsx        # Scroll-drawn timeline
│   │   ├── Featured.jsx          # Alternating project showcase
│   │   ├── Hero.jsx              # Headline and flippable sticky notes
│   │   └── Skills.jsx            # Categorised technology grid
│   ├── App.jsx                   # Layout and scroll-driven atmosphere
│   ├── index.css                 # Design tokens, gradients, grain and keyframes
│   └── main.jsx                  # Entry point
├── generate_resume.js            # Standalone PDF resume compiler
├── index.html                    # Meta tags, SEO and fonts
├── package.json
└── vite.config.js
```

</details>

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer, and npm.

```bash
git clone https://github.com/immraviprakash/ravi-prakash-portfolio.git
cd ravi-prakash-portfolio
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with Oxlint |

---

## Customising

- **Content** — projects, skills, copy and social links live in `src/data/site.js`
- **Resume** — replace `public/Ravi-Prakash-Resume.pdf`
- **Logos** — swap the project brand logos in `src/assets/`
- **Design tokens** — colours, fonts, glows and grain are defined in `src/index.css`
- **Contact form** — the form posts to Web3Forms. To receive messages yourself, create a free access key at [web3forms.com](https://web3forms.com/) and set it in the form config in `src/sections/Contact.jsx`. The key is a public, client-side key, so there is nothing secret to protect.

---

## Deployment

The site is live at [imraviprakash.netlify.app](https://imraviprakash.netlify.app/). It builds to plain static files in `dist/`, so it runs on any static host:

- **Netlify** — build command `npm run build`, publish directory `dist`
- **Vercel** — import the repository; the Vite preset is detected automatically
- **GitHub Pages / Cloudflare Pages** — deploy the contents of `dist/`

---

## Author

**Ravi Prakash**

- Email: [immraviprakash@gmail.com](mailto:immraviprakash@gmail.com)
- LinkedIn: [linkedin.com/in/ravi-prakash-k-4953b8251](https://www.linkedin.com/in/ravi-prakash-k-4953b8251)
- GitHub: [@immraviprakash](https://github.com/immraviprakash)
- Location: Bangalore, India