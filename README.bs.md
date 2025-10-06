[![BS](https://img.shields.io/badge/lang-BS-blue)](README.bs.md) [![EN](https://img.shields.io/badge/lang-EN-green)](README.md) [![DE](https://img.shields.io/badge/lang-DE-yellow)](README.de.md)


# Portfolio 🎨

Zapanjujući i interaktivni kreativni portfolio napravljen pomoću Next.js, React Three Fiber i Framer Motion. Prikazuje projekte i vještine uz zanimljive 3D modele i animacije.

Ovaj portfolio je dizajniran da bude vizuelno privlačan i jednostavan za korištenje, pružajući besprijekorno iskustvo posjetiocima da istraže vaš rad i saznaju više o vašoj stručnosti. Iskorištava snagu Next.js‑a za performanse i SEO, React Three Fiber‑a za impresivnu 3D grafiku i Framer Motion‑a za glatke animacije.

## 🚀 Ključne karakteristike

- **Interaktivni 3D modeli:** Zanimljivi 3D modeli renderovani pomoću React Three Fiber‑a oživljavaju portfolio.
- **Glatke animacije:** Framer Motion obezbjeđuje fluidne animacije i prijelaze za prijatno korisničko iskustvo.
- **Responzivan dizajn:** Besprijekorno se prilagođava različitim veličinama ekrana koristeći `useScreenSize` hook.
- **Kontakt forma:** Funkcionalna kontakt forma napravljena sa `react-hook-form` i integrisana sa `emailjs` (trenutno demo režim).
- **Prikaz projekata:** Posebna stranica s projektima sa detaljnim informacijama o svakom projektu.
- **Odjeljak O meni:** Sveobuhvatna „O meni“ stranica sa detaljima o vašim vještinama, iskustvu i statistikama.
- **Internacionalizacija (i18n):** Podrška za više jezika (bosanski, engleski, njemački) za globalnu publiku.
- **Optimizirane slike:** `next/image` komponenta osigurava optimizovano učitavanje slika i bolju performansu.
- **Pozadinski zvuk:** Suptilan pozadinski zvučni efekat poboljšava korisničko iskustvo.
- **Pozadina sa krijesnicama:** Vizuelno privlačan efekat pozadine sa krijesnicama dodaje dozu magije.

## 🛠️ Tehnološki stack

*   **Frontend:**
    *   [Next.js](https://nextjs.org/): React framework za izradu performantnih web aplikacija.
    *   [React](https://reactjs.org/): JavaScript biblioteka za izgradnju korisničkih interfejsa.
    *   [React DOM](https://reactjs.org/docs/react-dom.html): Pruža DOM‑specifične metode.
    *   [React Three Fiber](https://github.com/pmndrs/react-three-fiber): React renderer za Three.js.
    *   [@react-three/drei](https://github.com/pmndrs/drei): Zbirka korisnih pomoćnih alata i apstrakcija za React Three Fiber.
    *   [Framer Motion](https://www.framer.com/motion/): Biblioteka za animacije u React‑u.
    *   [Lucide React](https://lucide.dev/): Biblioteka lijepih SVG ikona za React.
    *   [clsx](https://github.com/lukeed/clsx): Utilita za uslovno kreiranje `className` stringova.
    *   [react-hook-form](https://www.react-hook-form.com/): Biblioteka za izgradnju formi u React‑u.
    *   [Sonner](https://sonner.emilkowal.ski/): Biblioteka za kreiranje toast notifikacija.
*   **3D grafika:**
    *   [Three.js](https://threejs.org/): JavaScript 3D biblioteka.
*   **Stilizovanje:**
    *   [Tailwind CSS](https://tailwindcss.com/): CSS framework baziran na utilitama.
    *   [PostCSS](https://postcss.org/): Alat za transformaciju CSS‑a pomoću JavaScript‑a.
    *   [Autoprefixer](https://github.com/postcss/autoprefixer): PostCSS dodatak za parsiranje CSS‑a i dodavanje vendor prefiksa.
    *   [Globalni CSS](`src/app/globals.css`): Prilagođeni globalni stilovi.
*   **Internacionalizacija:**
    *   Prilagođeni rječnik (`src/app/i18n/dict.js`): Za čuvanje prijevoda.
*   **E‑pošta:**
    *   [@emailjs/browser](https://www.emailjs.com/): Za slanje e‑pošte direktno iz pregledača (trenutno demo režim).
*   **Obrada slika:**
    *   [Sharp](https://sharp.pixelplumbing.com/): Biblioteka visokih performansi za obradu slika.
*   **Linting:**
    *   [ESLint](https://eslint.org/): Alat za lintanje JavaScript‑a.
    *   [eslint-config-next](https://nextjs.org/docs/basic-features/eslint): ESLint konfiguracija za Next.js projekte.

## 📦 Početak rada

### Preduvjeti

*   Node.js (v18 ili noviji)
*   npm ili yarn

### Instalacija

1.  Klonirajte repozitorij:

    ```bash
    git clone https://github.com/Hamza9199/Portofolio
    ```

2.  Pređite u direktorij projekta:

    ```bash
    cd portfolio
    ```

3.  Instalirajte zavisnosti:

    ```bash
    npm install  # ili yarn install
    ```

4.  Postavite varijable okruženja:

    Kreirajte `.env.local` datoteku u korijenu projekta i dodajte potrebne varijable okruženja. Na primjer:

    ```
    NEXT_PUBLIC_GITHUB_STATS_URL=your_github_stats_url
    ```

    Napomena: Funkcionalnost slanja e‑pošte je trenutno onemogućena u demo verziji. Ako je želite omogućiti, potrebno je konfigurisati `emailjs` i ažurirati datoteku `src/components/contact/Form.jsx`.

### Lokalno pokretanje

1.  Pokrenite razvojni server:

    ```bash
    npm run dev  # ili yarn dev
    ```

2.  Otvorite pregledač i idite na `http://localhost:3000`.

## 📂 Struktura projekta

```
nextjs-creative-portfolio/
├── .next/                   # Build izlaz Next.js‑a
├── public/                  # Statička sredstva (slike, fontovi, itd.)
│   └── background/          # Pozadinske slike
│       ├── about-background.png
│       ├── contact-background.png
│       ├── home-background.png
│       └── projects-background.png
├── src/
│   ├── app/                  # Direktorij aplikacije Next.js
│   │   ├── (sub pages)/      # Podstranice (o meni, kontakt, projekti)
│   │   │   ├── about/
│   │   │   │   └── page.js   # Stranica O meni
│   │   │   ├── contact/
│   │   │   │   └── page.js   # Stranica Kontakt
│   │   │   └── projects/
│   │   │       └── page.js   # Stranica Projekti
│   │   ├── i18n/
│   │   │   └── dict.js       # Rječnik prijevoda
│   │   ├── data.js           # Statički podaci (projekti, navigacija)
│   │   ├── layout.js         # Korijenski layout
│   │   └── page.js           # Početna stranica
│   ├── components/           # React komponente
│   │   ├── about/
│   │   │   ├── index.jsx     # Komponenta detalja „O meni“
│   │   │   └── ItemLayout.jsx# Raspored za stavke „O meni“
│   │   ├── contact/
│   │   │   └── Form.jsx      # Komponenta kontakt forme
│   │   ├── hooks/
│   │   │   └── useScreenSize.jsx # Prilagođeni hook za veličinu ekrana
│   │   ├── models/           # 3D modeli
│   │   │   ├── HatModel.jsx  # 3D model šešira
│   │   │   ├── Staff.jsx     # 3D model štapa
│   │   │   └── Wizard.jsx    # 3D model čarobnjaka
│   │   ├── navigation/       # Navigaciona komponenta
│   │   │   └── index.jsx     # Navigaciona komponenta
│   │   ├── projects/
│   │   │   ├── index.jsx     # Komponenta liste projekata
│   │   │   └── ProjectLayout.jsx # Raspored pojedinačnog projekta
│   │   ├── FireFliesBackground.jsx # Komponenta pozadine sa krijesnicama
│   │   ├── RenderModel.jsx   # Komponenta za renderovanje 3D modela
│   │   └── Sound.jsx         # Zvučna komponenta
│   ├── styles/              # Globalni stilovi
│   │   └── globals.css
├── next.config.mjs         # Next.js konfiguracija
├── package.json            # Zavisnosti i skripte projekta
└── README.md               # Ova datoteka
```

## 📸 Screenshots

(Bit će dodano)


## 📝 Licenca

Ovaj projekat je licenciran pod [MIT licencom](LICENSE).

## 📬 Kontakt

Ako imate bilo kakvih pitanja ili prijedloga, slobodno me kontaktirajte na [hamza.gacic.22@size.ba](mailto:hamza.gacic.22@size.ba).

## 💖 Hvala

Hvala vam što ste pogledali moj kreativni portfolio! Nadam se da će vam biti inspirativan i koristan.
