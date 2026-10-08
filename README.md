# Ravi Prakash — Personal Portfolio

A personal portfolio and digital workspace for **Ravi Prakash (RK.)**, an early-career full-stack developer and product engineer based in Bangalore, India. 

The site rejects generic portfolio templates in favor of a tactile, editorial aesthetic inspired by physical stationery, print typography, and responsive micro-interactions.

---

## Design Concept & Aesthetic

The portfolio is structured around high contrast, warm textures, and tangible physicality:

- **Curated Color Palette**:
  - **Ivory Base**: `#F5F1E6` — warm, muted editorial backdrop
  - **Deep Ink / Near-Black**: `#0C0C0C` & `#121212` — crisp typography and structural contrast
  - **Warm Accent Gold**: `#C9972E` & `#D9A441` — highlights, interactive states, and glowing accents
- **Typographic System**:
  - **Display Serif**: *Playfair Display* for large editorial headlines
  - **Interface Sans**: *Inter* for readable body copy, metadata, and buttons
  - **Handwritten / Tactile**: *Permanent Marker* for sticky note labels and informal greetings
  - **Monospace Accents**: Clean uppercase tracking for category headers and timestamps
- **Tactile Details**:
  - Custom SVG physical stationery motifs: brass pushpins with radial highlights, dark tape strips, wire paperclips, and ink squiggles
  - Multi-layered radial atmosphere glows at the top and bottom with SVG fractal noise grain overlays

---

## Sections & Experience

### 1. Navigation Header
- **Dynamic Frosted Glass**: Uses an `IntersectionObserver` on the hero section to transition from a transparent header to a frosted glass background (`rgba(245, 241, 230, 0.88)` with backdrop blur) once the hero scrolls past.
- **Scroll-Reactive Contrast**: Header text color switches dynamically between white and ink black based on whether the navbar is currently over the dark atmosphere glow or the light page body.
- **Active Section Tracking**: Synchronizes with scroll position to move a spring-animated gold underline indicator (`layoutId="navActiveLine"`) beneath active links.
- **Hash-Free Smooth Scrolling**: Programmatic scrolling keeps URLs clean while navigating smoothly between sections.
- **Mobile Drawer**: Responsive sliding overlay with large serif navigation links and quick CTA access.

### 2. Hero
- **Editorial Title**: Fluid `clamp()` typography displaying *"Hey, I'm"* in handwritten script above a two-line serif display: *"Ravi Prakash"*.
- **Golden Rim-Light**: Subtle text-shadow rim lighting that reacts to scroll depth via CSS custom properties (`--glow-opacity`).
- **Interactive Sticky Notes**: Three physical desk notes drop into place using Framer Motion spring physics with stagger and angular wobble:
  - **Developer** (Gold note with tape strip): Drops first; flips 3D on click to reveal a link to GitHub.
  - **Designer** (Cream note with brass pushpin): Drops second; flips to offer a quick scroll to the contact form.
  - **Artist** (Grey-beige note with paperclip & squiggle): Drops third; flips to reveal an Instagram art profile link.
  - *Interaction details*: 3D preserve-3d card flips, automatic reversion 2 seconds after cursor exit, and Escape key dismissal.
- **Action CTAs**: Quick buttons to jump to selected work or download the bundled resume PDF.

### 3. About Me
- **Interactive Identity Card**: Matte black card (`#111111`) displaying personal monogram branding, skill pills with gold color-swap hover effects, focus areas (*Agentic AI*, *Creative Web*, *Product Development*), languages known, and location metadata.
- **Specular Light Sweep**: Diagonal metallic light sweep animation (`metallicLightSweep`) that glides across the card when scrolled into view, hovered, or when clicking "ABOUT" in the navbar.
- **Editorial Story**: Narrative copy introducing design philosophy and engineering focus.

### 4. Selected Projects
Spacious alternating two-column layouts featuring custom presentation cards with brand logos, ambient radial gold glows, problem-solution summaries, and direct repository/live links:

1. **Zix'Ovibes** — *Full-Stack Music & Focus Workspace*
   - Combines ambient audio streaming with an AI-driven Deep Focus orchestration system that translates natural language goals into Pomodoro work blocks.
   - **Stack**: React.js, Vite, JavaScript, Node.js, Express, AI APIs
   - **Links**: [Live Demo](https://zixovibes.netlify.app/) · [GitHub](https://github.com/immraviprakash/zixovibes)
2. **Rakta Seva Connect** — *AI-Assisted Emergency Blood-Donation Platform*
   - Android application built during an internship at MindMatrix to streamline emergency blood donor discovery, eligibility filtering, and Groq AI-assisted notifications.
   - **Stack**: Kotlin, Jetpack Compose, Firebase, Firestore, MVVM, Groq AI
   - **Links**: [GitHub](https://github.com/immraviprakash/rakta-seva-connect)
3. **Trade-Z** — *Collaborative AI Trading Assistant*
   - Market intelligence system synthesizing LSTM forecasting, reinforcement learning strategy signals, and NLP-based sentiment analysis.
   - **Stack**: Python, Flask, React.js, LSTM, Reinforcement Learning, NLP
   - **Links**: [GitHub](https://github.com/immraviprakash/trade-z)

### 5. Technical Skills
A 2×2 card grid grouping technologies into 4 focused categories:
- **01 — BUILD**: JavaScript, React, Node.js, Express.js, Flask, REST APIs, Kotlin, Jetpack Compose, HTML, CSS
- **02 — INTELLIGENCE**: Python, Generative AI, AI / LLM APIs, Prompt Engineering, RAG, Machine Learning, NLP, Sentiment Analysis, LSTM, Reinforcement Learning, Explainable AI
- **03 — DATA**: SQL, MySQL, MongoDB, Firebase Firestore
- **04 — TOOLS & CLOUD**: Git, GitHub, Firebase, Google Cloud, Render, Vercel, Netlify

Interactive pill tags invert from dark borders to solid gold fills with subtle elevation on hover.

### 6. Experience & Education
- **Scroll-Driven Timeline**: Framer Motion `useScroll` and `useTransform` hook that draws a gold progress line down the timeline in real time as the user scrolls.
- **MindMatrix**: Android Application Development Intern (GenAI) — Feb 2026 – May 2026.
- **Sri Sairam College of Engineering**: B.E. in Computer Science & Engineering (2022 – 2026).

### 7. Contact
- **Direct Channels**: One-click links for direct email, phone, and Bangalore location.
- **Web3Forms Integration**: Fully wired submission endpoint sending messages without page reloads.
- **Client-Side Validation**: Real-time validation for name, email format, and message content.
- **Honeypot Anti-Spam**: Hidden `_gotcha` field silently traps automated bots without adding user-facing CAPTCHA friction.
- **State Handling**: Fixed-height inline status container preventing layout jump on submission or errors.

### 8. Footer
- Bottom closing atmospheric gradient arc mirroring the hero.
- Social links (GitHub, LinkedIn) with gold hover states and smooth back-to-top scroll button.

---

## Responsive & Mobile Behavior

- **Mobile Hero Composition**: Screen widths `< 1024px` reposition the three sticky notes from a horizontal row into an intentional, vertically staggered cluster centered below the headline to eliminate horizontal scrolling while preserving tactile click-to-flip functionality.
- **Fluid Typography**: Uses CSS `clamp()` across all headline elements so typography scales smoothly from 320px mobile screens to large desktop monitors.
- **Mobile Menu Drawer**: Fullscreen navigation drawer with animated open/close transitions (`AnimatePresence`).
- **Touch-Friendly Hit Targets**: Interactive pills, links, and buttons maintain comfortable tap areas.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens |
| **Animation & Motion** | [Framer Motion 13](https://www.framer.com/motion/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/) + Custom Hand-Drawn SVG Graphics |
| **Form Endpoint** | Web3Forms API |
| **Linter** | [Oxlint](https://oxc.rs/) |

---

## Project Structure

```
├── public/
│   ├── Ravi-Prakash-Resume.pdf   # Downloadable resume
│   ├── favicon*                  # Platform favicons and icons
│   └── icons.svg
├── src/
│   ├── assets/                   # Project brand logos (Zix'Ovibes, Rakta Seva, Trade-Z)
│   ├── components/
│   │   ├── Footer.jsx            # Closing footer with back-to-top & social links
│   │   ├── Icons.jsx             # SVG icons (GitHub, LinkedIn)
│   │   ├── Nav.jsx               # Header with scroll-reactive color & glass state
│   │   └── Reveal.jsx            # Reusable viewport reveal wrapper with Framer Motion
│   ├── data/
│   │   └── site.js               # Central data source (projects, skills, content, socials)
│   ├── sections/
│   │   ├── About.jsx             # Editorial story & interactive matte profile card
│   │   ├── Contact.jsx           # Validated contact form with Web3Forms integration
│   │   ├── Experience.jsx        # Scroll-drawn timeline with work history
│   │   ├── Featured.jsx          # Alternating showcase of featured projects
│   │   ├── Hero.jsx              # Large headline & 3D flippable sticky notes
│   │   └── Skills.jsx            # 2×2 categorized technology grid
│   ├── App.jsx                   # Main layout & scroll atmosphere controller
│   ├── index.css                 # Design system tokens, gradients, noise & keyframes
│   └── main.jsx                  # React application entry point
├── generate_resume.js            # Standalone PDF resume compiler
├── index.html                    # Meta tags, SEO & Google Fonts
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/immraviprakash/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## Build & Deployment

### Production Build

Create an optimized static build in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run code linting with Oxlint:

```bash
npm run lint
```

### Deployment

The project builds to standard static HTML, CSS, and JavaScript bundles in the `dist/` folder. It can be deployed to any static host:

- **Vercel**: Import repository; framework preset will detect Vite automatically.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages / Cloudflare Pages**: Deploy the output of `dist/`.

---

## Author

**Ravi Prakash**  
- **Email**: [immraviprakash@gmail.com](mailto:immraviprakash@gmail.com)  
- **LinkedIn**: [linkedin.com/in/ravi-prakash-k-4953b8251](https://www.linkedin.com/in/ravi-prakash-k-4953b8251)  
- **GitHub**: [@immraviprakash](https://github.com/immraviprakash)  
- **Location**: Bangalore, India
