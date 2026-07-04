# AI RESUME BUILDERS
## Home Page

![AI Resume Builder](Screenshot%202026-07-04%20190621.png)

A complete, production-ready AI-powered resume builder — built with **React 18**, **React Router**, and **Tailwind CSS**. Create, customize, preview and export ATS-friendly resumes using 10 professional templates, an in-browser AI writing assistant, and a real-time ATS scoring engine.

> All data is stored locally in the browser (`localStorage`) — there is no backend. The "AI" features run entirely client-side using curated content engines (see [`How the AI features work`](#how-the-ai-features-work) below), so the whole app works offline and requires no API keys.

---

## ✨ Features

- **Landing page** — Hero, Features, Template Showcase, AI Showcase, Testimonials, FAQ, Contact, Footer
- **Dashboard** — create, search, duplicate, delete and reopen resumes; recent-resumes strip; stats overview
- **Multi-step builder wizard** — 17 steps grouped into Basics / Profile / Background / Experience / Extras / Design
- **Live preview** — true-to-export, scales responsively, updates instantly as you type
- **10 ATS-friendly templates** — Professional ATS, Modern, Minimal, Corporate, Fresher, Software Engineer, Creative, Executive, Elegant, Premium Sidebar — switch any time without losing content
- **AI Assistant** — generates Profile Summary, Career Objective, Project Descriptions, Skill Suggestions, and rule-based Improvement Suggestions
- **ATS Score (0–100)** — live, category-by-category breakdown (contact completeness, summary quality, skills coverage, experience depth, education, quantified impact, keyword alignment, length balance)
- **Profile photo** — upload / remove / show-hide toggle; layout reflows automatically when hidden
- **Declaration section** — optional toggle with statement, place, date and a typed or uploaded signature
- **Section reordering** — drag-and-drop order control, plus per-section show/hide
- **Customization** — dark/light mode, 5 accent colors, 3 font families, all saved per-resume
- **PDF export** — pixel-accurate `html2canvas` + `jsPDF` export with automatic multi-page support, plus native browser Print
- **Responsive** — usable end-to-end on mobile, tablet and desktop, including the builder's edit/preview toggle on small screens
- **Form validation** — inline validation for email, phone and URL fields
- **Error handling** — top-level React error boundary, try/caught localStorage access, safe PDF export failure handling

---

## 🚀 Getting Started

This project was built and validated in a sandboxed environment without npm registry access, so dependencies could not be pre-installed here — **you'll install them the first time you run it locally**, same as any fresh clone.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

### Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

### Requirements

- Node.js 18+ (Node 20+ recommended)
- A modern browser (Chrome, Edge, Firefox, Safari)

---

## 🗂️ Project Structure

```
ai-resume-builders/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Router + global providers
    ├── index.css                 # Tailwind layers, design tokens, print styles
    │
    ├── context/
    │   ├── ThemeContext.jsx      # dark/light mode, accent color, font (global)
    │   └── ResumeContext.jsx     # CRUD for resumes, persisted to localStorage
    │
    ├── data/
    │   ├── resumeModel.js        # canonical resume data shape + factory functions
    │   ├── sampleResume.js       # fully-populated demo resume (used in thumbnails)
    │   ├── templatesMeta.js      # metadata for the 10 templates
    │   ├── skillSuggestions.js   # role-keyed skill banks for AI suggestions
    │   ├── testimonials.js       # landing page content
    │   └── faqData.js            # landing page content
    │
    ├── utils/
    │   ├── aiGenerator.js        # client-side "AI" content generation engine
    │   ├── atsScorer.js          # 0–100 ATS scoring engine + category breakdown
    │   ├── pdfGenerator.js       # html2canvas + jsPDF export, and print()
    │   ├── validators.js         # email/phone/URL validation helpers
    │   ├── localStorage.js       # safe try/catch localStorage wrapper
    │   └── wizardSteps.js        # builder step configuration (drives sidebar + router)
    │
    ├── hooks/
    │   └── useDragReorder.js     # generic native HTML5 drag-to-reorder hook
    │
    ├── components/
    │   ├── common/                  # Button, Input, TextArea, Select, Toggle, Modal,
    │   │                             # Badge, ProgressBar, Logo, ThemeToggle, SectionCard,
    │   │                             # RepeaterItem, ErrorBoundary, ScrollToTop
    │   │
    │   ├── landing/                 # Navbar, Hero, FeaturesSection, TemplatesShowcase,
    │   │                             # AIFeaturesShowcase, TestimonialsSection, FAQSection,
    │   │                             # ContactSection, CTABanner, Footer
    │   │
    │   ├── dashboard/                # DashboardHeader, SearchBar, ResumeCard,
    │   │                             # CreateResumeModal, EmptyState
    │   │
    │   ├── builder/
    │   │   ├── sections/            # one form component per resume section (14 files)
    │   │   ├── AIGenerateButton.jsx
    │   │   ├── ATSScoreCard.jsx
    │   │   ├── ResumeImprovementPanel.jsx
    │   │   ├── BuilderSidebarNav.jsx
    │   │   ├── BuilderToolbar.jsx
    │   │   ├── CustomizationPanel.jsx
    │   │   └── SectionReorderPanel.jsx
    │   │
    │   ├── preview/
    │   │   ├── ResumePreview.jsx        # scaled live preview + hidden full-res export node
    │   │   ├── TemplateThumbnail.jsx    # small fixed-scale preview for galleries
    │   │   └── TemplateSelectorModal.jsx
    │   │
    │   └── templates/
    │       ├── shared.jsx                    # shared atoms + the generic ResumeSectionList
    │       ├── index.js                      # template registry (id → component + meta)
    │       └── Template*.jsx                 # the 10 template layouts
    │
    └── pages/
        ├── LandingPage.jsx
        ├── DashboardPage.jsx
        ├── BuilderPage.jsx
        └── NotFoundPage.jsx
```

---

## 🧠 How the AI features work

There's no external API call (and so, no API key to configure). `src/utils/aiGenerator.js` and `src/utils/atsScorer.js` implement deterministic, content-aware generation and scoring using the resume's own data — phrase banks for summaries/objectives/project descriptions, a role-keyed skill bank (`src/data/skillSuggestions.js`), and a rules engine for improvement suggestions and the ATS score breakdown.

**To swap in a real LLM later:** every generator function (`generateSummary`, `generateObjective`, `generateProjectDescription`, `suggestSkills`, `generateImprovementSuggestions`) already returns a `Promise` and has a stable signature — replace the function body with a `fetch()` call to your model provider of choice and nothing else in the app needs to change.

---

## 📄 PDF Export

`ResumePreview` renders the active template **twice**: a scaled, visible copy for on-screen editing, and an off-screen, full-resolution copy (`#resume-print-area`) at true A4 width. `BuilderToolbar`'s **Download PDF** button captures that hidden node with `html2canvas` at 2.5× scale and tiles it across as many A4 pages as needed with `jsPDF`, so the exported file always matches the live preview exactly. **Print** uses the browser's native print dialog against the same node via the print styles in `index.css`.

---

## 🛠️ Tech Stack

| Concern | Choice |
|---|---|
| UI library | React 18 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 (custom design tokens: `ink`, `paper`, `brand`) |
| Icons | react-icons (Heroicons set) |
| PDF export | jsPDF + html2canvas |
| Build tool | Vite |
| Persistence | Browser `localStorage` (no backend) |

---

## 📦 Notes for production deployment

- Run `npm run build` and deploy the `/dist` folder to any static host (Vercel, Netlify, GitHub Pages, S3, etc.) — no server runtime is required.
- Because resumes are stored in `localStorage`, each browser/device has its own resume library. Wire `ResumeContext.jsx` up to a real API if you need cross-device sync.
- The favicon and meta tags in `index.html` are already set up for basic SEO/social sharing — update the URLs once you have a real domain.
