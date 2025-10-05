# Portfolio 🎨

A stunning and interactive creative portfolio built with Next.js, React Three Fiber, and Framer Motion. Showcases projects and skills with engaging 3D models and animations.

This portfolio is designed to be visually appealing and user-friendly, providing a seamless experience for visitors to explore your work and learn about your expertise. It leverages the power of Next.js for performance and SEO, React Three Fiber for immersive 3D graphics, and Framer Motion for smooth animations.

## 🚀 Key Features

- **Interactive 3D Models:** Engaging 3D models rendered with React Three Fiber bring the portfolio to life.
- **Smooth Animations:** Framer Motion provides fluid animations and transitions for a delightful user experience.
- **Responsive Design:** Adapts seamlessly to different screen sizes using the `useScreenSize` hook.
- **Contact Form:** A functional contact form built with `react-hook-form` and integrated with `emailjs` (currently demo mode).
- **Project Showcase:** A dedicated projects page with detailed information about each project.
- **About Me Section:** A comprehensive "About" page with details about your skills, experience, and statistics.
- **Internationalization (i18n):** Supports multiple languages (Bosnian, English, German) for a global audience.
- **Optimized Images:** `next/image` component ensures optimized image loading and performance.
- **Background Audio:** A subtle background sound effect enhances the user experience.
- **Fireflies Background:** A visually appealing fireflies background effect adds a touch of magic.

## 🛠️ Tech Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/): React framework for building performant web applications.
    *   [React](https://reactjs.org/): JavaScript library for building user interfaces.
    *   [React DOM](https://reactjs.org/docs/react-dom.html): Provides DOM-specific methods.
    *   [React Three Fiber](https://github.com/pmndrs/react-three-fiber): React renderer for Three.js.
    *   [@react-three/drei](https://github.com/pmndrs/drei): Collection of useful helpers and abstractions for React Three Fiber.
    *   [Framer Motion](https://www.framer.com/motion/): A motion library for React.
    *   [Lucide React](https://lucide.dev/): A library of beautiful SVG icons for React.
    *   [clsx](https://github.com/lukeed/clsx): A utility for constructing `className` strings conditionally.
    *   [react-hook-form](https://www.react-hook-form.com/): Library for building forms in React.
    *   [Sonner](https://sonner.emilkowal.ski/): Library for creating toast notifications.
*   **3D Graphics:**
    *   [Three.js](https://threejs.org/): JavaScript 3D library.
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
    *   [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript.
    *   [Autoprefixer](https://github.com/postcss/autoprefixer): A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
    *   [Global CSS](`src/app/globals.css`): Custom global styles.
*   **Internationalization:**
    *   Custom dictionary (`src/app/i18n/dict.js`): For storing translations.
*   **Email:**
    *   [@emailjs/browser](https://www.emailjs.com/): Used for sending emails directly from the browser (currently demo mode).
*   **Image Processing:**
    *   [Sharp](https://sharp.pixelplumbing.com/): High-performance image processing library.
*   **Linting:**
    *   [ESLint](https://eslint.org/): JavaScript linting tool.
    *   [eslint-config-next](https://nextjs.org/docs/basic-features/eslint): ESLint configuration for Next.js projects.

## 📦 Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Hamza9199/Portofolio
    ```

2.  Navigate to the project directory:

    ```bash
    cd portfolio
    ```

3.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

4.  Set up environment variables:

    Create a `.env.local` file in the root directory and add the necessary environment variables. For example:

    ```
    NEXT_PUBLIC_GITHUB_STATS_URL=your_github_stats_url
    ```

    **Note:** The email sending functionality is currently disabled in the demo. If you want to enable it, you'll need to configure `emailjs` and update the `src/components/contact/Form.jsx` file.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev  # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```
nextjs-creative-portfolio/
├── .next/                   # Next.js build output
├── public/                  # Static assets (images, fonts, etc.)
│   └── background/          # Background images
│       ├── about-background.png
│       ├── contact-background.png
│       ├── home-background.png
│       └── projects-background.png
├── src/
│   ├── app/                  # Next.js application directory
│   │   ├── (sub pages)/      # Sub pages (about, contact, projects)
│   │   │   ├── about/
│   │   │   │   └── page.js   # About page
│   │   │   ├── contact/
│   │   │   │   └── page.js   # Contact page
│   │   │   └── projects/
│   │   │       └── page.js   # Projects page
│   │   ├── i18n/
│   │   │   └── dict.js       # Translation dictionary
│   │   ├── data.js           # Static data (projects, navigation)
│   │   ├── layout.js         # Root layout
│   │   └── page.js           # Home page
│   ├── components/           # React components
│   │   ├── about/
│   │   │   ├── index.jsx     # About details component
│   │   │   └── ItemLayout.jsx# Layout for about items
│   │   ├── contact/
│   │   │   └── Form.jsx      # Contact form component
│   │   ├── hooks/
│   │   │   └── useScreenSize.jsx # Custom hook for screen size
│   │   ├── models/           # 3D models
│   │   │   ├── HatModel.jsx  # Hat 3D model
│   │   │   ├── Staff.jsx     # Staff 3D model
│   │   │   └── Wizard.jsx    # Wizard 3D model
│   │   ├── navigation/       # Navigation component
│   │   │   └── index.jsx     # Navigation component
│   │   ├── projects/
│   │   │   ├── index.jsx     # Project list component
│   │   │   └── ProjectLayout.jsx # Individual project layout
│   │   ├── FireFliesBackground.jsx # Fireflies background component
│   │   ├── RenderModel.jsx   # 3D model rendering component
│   │   └── Sound.jsx         # Sound component
│   ├── styles/              # Global styles
│   │   └── globals.css
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## 📸 Screenshots

(Will be added)


## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, please feel free to contact me at [hamza.gacic.22@size.ba](mailto:hamza.gacic.22@size.ba).

## 💖 Thanks

Thank you for checking out my creative portfolio! I hope you find it inspiring and helpful.

[![BS](https://img.shields.io/badge/lang-BS-blue)](#bosanski) [![EN](https://img.shields.io/badge/lang-EN-green)](#english) [![DE](https://img.shields.io/badge/lang-DE-yellow)](#deutsch)

## Bosanski

Interaktivan portfolio napravljen u Next.js sa React Three Fiber i Framer Motion. Prikazuje projekte i vještine uz 3D modele, animacije i i18n (bosanski/engleski/njemački).

Ključne funkcije
- 3D modeli (React Three Fiber) i glatke animacije (Framer Motion)
- Responsivan dizajn (useScreenSize hook)
- Kontakt forma (react-hook-form, emailjs – demo)
- Stranice: Početna, O meni, Projekti, Kontakt
- i18n: BS/EN/DE jezički izbor
- Optimizirane slike (next/image), pozadinski zvuk i Fireflies efekat

Tehnologije
- Next.js, React, React Three Fiber, drei, Framer Motion
- Three.js, Tailwind CSS, PostCSS, Autoprefixer
- ESLint, eslint-config-next, Sharp

Pokretanje
- Instalacija: npm install
- Dev: npm run dev (http://localhost:3000)
- Build/Start: npm run build && npm start

Struktura (sažetak)
- public/background, public/models, public/audio
- src/app: (sub pages), i18n/dict.js, data.js, layout.js, page.js
- src/components: about, contact, models, navigation, projects, FireFliesBackground.jsx, RenderModel.jsx, Sound.jsx

Licenca i kontakt
- MIT licenca. Pitanja: hamza.gacic.22@size.ba

## Deutsch

Interaktives Portfolio mit Next.js, React Three Fiber und Framer Motion. Zeigt Projekte und Fähigkeiten mit 3D‑Modellen, Animationen und i18n (Bosnisch/Englisch/Deutsch).

Funktionen
- 3D‑Modelle (React Three Fiber) und flüssige Animationen (Framer Motion)
- Responsives Design (useScreenSize Hook)
- Kontaktformular (react-hook-form, emailjs – Demo)
- Seiten: Start, Über mich, Projekte, Kontakt
- i18n: BS/EN/DE Sprachauswahl
- Optimierte Bilder (next/image), Hintergrundaudio, Fireflies‑Effekt

Tech‑Stack
- Next.js, React, React Three Fiber, drei, Framer Motion
- Three.js, Tailwind CSS, PostCSS, Autoprefixer
- ESLint, eslint-config-next, Sharp

Lokales Starten
- Installation: npm install
- Entwicklung: npm run dev (http://localhost:3000)
- Produktion: npm run build && npm start

Struktur (kurz)
- public/background, public/models, public/audio
- src/app: (sub pages), i18n/dict.js, data.js, layout.js, page.js
- src/components: about, contact, models, navigation, projects, FireFliesBackground.jsx, RenderModel.jsx, Sound.jsx

Lizenz und Kontakt
- MIT‑Lizenz. Fragen: hamza.gacic.22@size.ba