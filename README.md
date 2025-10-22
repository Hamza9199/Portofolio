[![BS](https://img.shields.io/badge/lang-BS-blue)](README.bs.md) [![EN](https://img.shields.io/badge/lang-EN-green)](README.md) [![DE](https://img.shields.io/badge/lang-DE-yellow)](README.de.md)


# Portfolio 🎨

A stunning and interactive creative portfolio built with Next.js, React Three Fiber, and Framer Motion. Showcases projects and skills with engaging 3D models and animations.

This portfolio is designed to be visually appealing and user-friendly, providing a seamless experience for visitors to explore your work and learn about your expertise. It leverages the power of Next.js for performance and SEO, React Three Fiber for immersive 3D graphics, and Framer Motion for smooth animations.

## 🚀 Key Features

- **Interactive 3D Models:** Engaging 3D models rendered with React Three Fiber bring the portfolio to life.
- **Smooth Animations:** Framer Motion provides fluid animations and transitions for a delightful user experience.
- **Responsive Design:** Adapts seamlessly to different screen sizes using the `useScreenSize` hook.
- **Contact Form:** A functional contact form built with `react-hook-form` and integrated with `emailjs`.
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
    *   [@emailjs/browser](https://www.emailjs.com/): Used for sending emails directly from the browser.
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

    Create a `.env` file in the root directory and add the necessary environment variables. For example:

    ```
    NEXT_PUBLIC_GITHUB_STATS_URL=your_github_stats_url
    ```


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
