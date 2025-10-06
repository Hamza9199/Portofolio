[![BS](https://img.shields.io/badge/lang-BS-blue)](README.bs.md) [![EN](https://img.shields.io/badge/lang-EN-green)](README.md) [![DE](https://img.shields.io/badge/lang-DE-yellow)](README.de.md)


# Portfolio 🎨

Ein beeindruckendes und interaktives kreatives Portfolio, erstellt mit Next.js, React Three Fiber und Framer Motion. Präsentiert Projekte und Fähigkeiten mit fesselnden 3D‑Modellen und Animationen.

Dieses Portfolio ist darauf ausgelegt, visuell ansprechend und benutzerfreundlich zu sein und bietet Besucherinnen und Besuchern ein nahtloses Erlebnis, um deine Arbeit zu entdecken und mehr über deine Expertise zu erfahren. Es nutzt die Stärken von Next.js für Leistung und SEO, React Three Fiber für eindrucksvolle 3D‑Grafiken und Framer Motion für flüssige Animationen.

## 🚀 Wichtige Funktionen

- **Interaktive 3D‑Modelle:** Fesselnde 3D‑Modelle mit React Three Fiber erwecken das Portfolio zum Leben.
- **Sanfte Animationen:** Framer Motion sorgt für flüssige Animationen und Übergänge für ein angenehmes Nutzererlebnis.
- **Responsives Design:** Passt sich mithilfe des `useScreenSize`‑Hooks nahtlos an unterschiedliche Bildschirmgrößen an.
- **Kontaktformular:** Funktionales Kontaktformular mit `react-hook-form` und Integration von `emailjs` (derzeit Demo‑Modus).
- **Projektübersicht:** Eigene Projektseite mit detaillierten Informationen zu jedem Projekt.
- **Über‑mich‑Bereich:** Umfassende „Über“‑Seite mit Details zu deinen Fähigkeiten, Erfahrungen und Statistiken.
- **Internationalisierung (i18n):** Unterstützt mehrere Sprachen (Bosnisch, Englisch, Deutsch) für ein globales Publikum.
- **Optimierte Bilder:** Die `next/image`‑Komponente sorgt für optimiertes Laden von Bildern und bessere Performance.
- **Hintergrundaudio:** Dezenter Hintergrund‑Soundeffekt verbessert das Nutzererlebnis.
- **Glühwürmchen‑Hintergrund:** Ein ansprechender Glühwürmchen‑Hintergrundeffekt verleiht einen Hauch von Magie.

## 🛠️ Tech‑Stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/): React‑Framework zum Erstellen performanter Webanwendungen.
    *   [React](https://reactjs.org/): JavaScript‑Bibliothek zum Erstellen von Benutzeroberflächen.
    *   [React DOM](https://reactjs.org/docs/react-dom.html): Stellt DOM‑spezifische Methoden bereit.
    *   [React Three Fiber](https://github.com/pmndrs/react-three-fiber): React‑Renderer für Three.js.
    *   [@react-three/drei](https://github.com/pmndrs/drei): Sammlung nützlicher Helfer und Abstraktionen für React Three Fiber.
    *   [Framer Motion](https://www.framer.com/motion/): Eine Animationsbibliothek für React.
    *   [Lucide React](https://lucide.dev/): Bibliothek mit schönen SVG‑Icons für React.
    *   [clsx](https://github.com/lukeed/clsx): Hilfsbibliothek zum bedingten Erstellen von `className`‑Strings.
    *   [react-hook-form](https://www.react-hook-form.com/): Bibliothek zum Erstellen von Formularen in React.
    *   [Sonner](https://sonner.emilkowal.ski/): Bibliothek zum Erstellen von Toast‑Benachrichtigungen.
*   **3D‑Grafik:**
    *   [Three.js](https://threejs.org/): JavaScript‑3D‑Bibliothek.
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/): Utility‑First‑CSS‑Framework.
    *   [PostCSS](https://postcss.org/): Werkzeug zum Transformieren von CSS mit JavaScript.
    *   [Autoprefixer](https://github.com/postcss/autoprefixer): PostCSS‑Plugin zum Parsen von CSS und zum Hinzufügen von Vendor‑Präfixen.
    *   [Globale CSS](`src/app/globals.css`): Eigene globale Styles.
*   **Internationalisierung:**
    *   Eigenes Wörterbuch (`src/app/i18n/dict.js`): Zum Speichern der Übersetzungen.
*   **E‑Mail:**
    *   [@emailjs/browser](https://www.emailjs.com/): Zum Senden von E‑Mails direkt aus dem Browser (derzeit Demo‑Modus).
*   **Bildverarbeitung:**
    *   [Sharp](https://sharp.pixelplumbing.com/): Hochleistungs‑Bildverarbeitungsbibliothek.
*   **Linting:**
    *   [ESLint](https://eslint.org/): Linting‑Tool für JavaScript.
    *   [eslint-config-next](https://nextjs.org/docs/basic-features/eslint): ESLint‑Konfiguration für Next.js‑Projekte.

## 📦 Erste Schritte

### Voraussetzungen

*   Node.js (v18 oder neuer)
*   npm oder yarn

### Installation

1.  Repository klonen:

    ```bash
    git clone https://github.com/Hamza9199/Portofolio
    ```

2.  In das Projektverzeichnis wechseln:

    ```bash
    cd portfolio
    ```

3.  Abhängigkeiten installieren:

    ```bash
    npm install  # oder yarn install
    ```

4.  Umgebungsvariablen einrichten:

    Erstelle eine `.env.local` im Projektwurzelverzeichnis und füge die erforderlichen Umgebungsvariablen hinzu. Zum Beispiel:

    ```
    NEXT_PUBLIC_GITHUB_STATS_URL=your_github_stats_url
    ```

    Hinweis: Die E‑Mail‑Funktion ist in der Demo derzeit deaktiviert. Wenn du sie aktivieren möchtest, konfiguriere `emailjs` und aktualisiere die Datei `src/components/contact/Form.jsx`.

### Lokal ausführen

1.  Entwicklungsserver starten:

    ```bash
    npm run dev  # oder yarn dev
    ```

2.  Öffne den Browser und rufe `http://localhost:3000` auf.

## 📂 Projektstruktur

```
nextjs-creative-portfolio/
├── .next/                   # Build‑Output von Next.js
├── public/                  # Statische Assets (Bilder, Schriften, etc.)
│   └── background/          # Hintergrundbilder
│       ├── about-background.png
│       ├── contact-background.png
│       ├── home-background.png
│       └── projects-background.png
├── src/
│   ├── app/                  # Next.js‑Anwendungsverzeichnis
│   │   ├── (sub pages)/      # Unterseiten (Über, Kontakt, Projekte)
│   │   │   ├── about/
│   │   │   │   └── page.js   # Über‑Seite
│   │   │   ├── contact/
│   │   │   │   └── page.js   # Kontaktseite
│   │   │   └── projects/
│   │   │       └── page.js   # Projektseite
│   │   ├── i18n/
│   │   │   └── dict.js       # Übersetzungswörterbuch
│   │   ├── data.js           # Statische Daten (Projekte, Navigation)
│   │   ├── layout.js         # Root‑Layout
│   │   └── page.js           # Startseite
│   ├── components/           # React‑Komponenten
│   │   ├── about/
│   │   │   ├── index.jsx     # Details‑Komponente für „Über“
│   │   │   └── ItemLayout.jsx# Layout für „Über“‑Elemente
│   │   ├── contact/
│   │   │   └── Form.jsx      # Kontaktformular‑Komponente
│   │   ├── hooks/
│   │   │   └── useScreenSize.jsx # Eigenen Hook für Bildschirmgröße
│   │   ├── models/           # 3D‑Modelle
│   │   │   ├── HatModel.jsx  # 3D‑Modell Hut
│   │   │   ├── Staff.jsx     # 3D‑Modell Stab
│   │   │   └── Wizard.jsx    # 3D‑Modell Zauberer
│   │   ├── navigation/       # Navigations‑Komponente
│   │   │   └── index.jsx     # Navigations‑Komponente
│   │   ├── projects/
│   │   │   ├── index.jsx     # Projektlisten‑Komponente
│   │   │   └── ProjectLayout.jsx # Layout für einzelne Projekte
│   │   ├── FireFliesBackground.jsx # Glühwürmchen‑Hintergrund‑Komponente
│   │   ├── RenderModel.jsx   # Komponente zum Rendern von 3D‑Modellen
│   │   └── Sound.jsx         # Sound‑Komponente
│   ├── styles/              # Globale Styles
│   │   └── globals.css
├── next.config.mjs         # Next.js‑Konfiguration
├── package.json            # Projektabhängigkeiten und Skripte
└── README.md               # Diese Datei
```

## 📸 Screenshots

(Wird hinzugefügt)


## 📝 Lizenz

Dieses Projekt steht unter der [MIT‑Lizenz](LICENSE).

## 📬 Kontakt

Bei Fragen oder Vorschlägen kannst du mich gerne unter [hamza.gacic.22@size.ba](mailto:hamza.gacic.22@size.ba) kontaktieren.

## 💖 Danke

Vielen Dank, dass du dir mein kreatives Portfolio angesehen hast! Ich hoffe, es ist inspirierend und hilfreich.
