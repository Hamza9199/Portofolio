# Portofolio

Bosanski

Kratak i moderan portfolio sa više stranica (Home, About, Projects, Contact), 3D modelima, pozadinskim efektima i zvukom. Baziran na Next.js App Router arhitekturi.

- Home: hero sekcija sa 3D modelom i navigacijom
- About: kratka biografija i vještine
- Projects: lista projekata sa linkovima
- Contact: forma za kontakt i linkovi na mreže

Funkcionalnosti
- 3D GLB modeli (public/models) i renderer komponenta
- Dinamički podaci o projektima i navigaciji (src/app/data.js)
- Pozadinske slike po stranici (public/background)
- Pozadinski zvuk (public/audio)
- Responsive dizajn i jednostavna navigacija

Tehnologije
- Next.js (App Router), React
- WebGL rendering za GLB modele
- CSS modules/global styles

Struktura projekta (sažeto)
- public/
  - background/ (pozadine za stranice)
  - models/ (GLB modeli)
  - audio/ (mp3 zvuk)
  - resume.pdf
- src/
  - app/
    - page.js (Home)
    - (sub pages)/about/page.js, projects/page.js, contact/page.js
    - data.js (projekti i navigacija)
    - globals.css, layout.js
  - components/
    - models/ (Wizard, Hat, Staff)
    - projects/, about/, contact/
    - Sound.jsx, RenderModel.jsx, FireFliesBackground.jsx, navigation/

Zahtjevi
- Node.js 18+ i npm/yarn/pnpm

Pokretanje
1) Instalacija paketa
- npm install

2) Development
- npm run dev
Aplikacija: http://localhost:3000

3) Production build
- npm run build
- npm start

Prilagođavanje
- Projekti i navigacija: urediti src/app/data.js
  - projectsData: dodaj/uredi projekte (id, name, description, date, demoLink)
  - BtnList: dodaj/uredi linkove u navigaciji (Home, About, Projects, Contact, eksterni linkovi)
- Pozadine: zamijeni slike u public/background/*.png (isti naziv datoteka)
- Modeli: dodaj GLB u public/models i učitaj kroz RenderModel/komponente u components/models
- Zvuk: zamijeni/ukloni public/audio/*.mp3 i kontroliši kroz components/Sound.jsx
- CV: zamijeni public/resume.pdf i provjeri da postoji link u BtnList (icon: "resume")

Dodavanje novog projekta (primjer)
- Otvori src/app/data.js
- U projectsData dodaj novi objekt sa: id, name, description, date, demoLink
- Projekat će se automatski prikazati na /projects

Deploy
- Preporuka: Vercel (nativna podrška za Next.js)
  - Import repo u Vercel i deploy bez dodatne konfiguracije
  - Postavi Node 18+ u Project Settings ako je potrebno

Troubleshooting
- 3D model se ne učitava: provjeri putanje u public/models i nazive datoteka (velika/mala slova)
- Zvuk se ne pušta: moderni browseri traže korisničku interakciju; provjeri components/Sound.jsx
- 404 za CV: potvrdi da public/resume.pdf postoji i da BtnList sadrži link na "/resume.pdf"

Skripte
- npm run dev
- npm run build
- npm start

Licenca
- Dodaj LICENSE datoteku (npr. MIT) ako planiraš open-source.

Autor
- GitHub: https://github.com/Hamza9199
- LinkedIn: https://www.linkedin.com/in/hamza-gacic-dev/

---

English

A concise, modern multi-page portfolio (Home, About, Projects, Contact) with 3D models, background effects, and sound. Built with Next.js App Router.

- Home: hero with 3D model and navigation
- About: short bio and skills
- Projects: list of projects with links
- Contact: contact form and social links

Features
- 3D GLB models (public/models) with a renderer component
- Dynamic data for projects and navigation (src/app/data.js)
- Per-page background images (public/background)
- Background audio (public/audio)
- Responsive layout and simple navigation

Tech Stack
- Next.js (App Router), React
- WebGL rendering for GLB models
- CSS modules/global styles

Project Structure (short)
- public/: background/, models/, audio/, resume.pdf
- src/app/: page.js, (sub pages)/about|projects|contact, data.js, globals.css, layout.js
- src/components/: models/, projects/, about/, contact/, Sound.jsx, RenderModel.jsx, FireFliesBackground.jsx, navigation/

Requirements
- Node.js 18+ and npm/yarn/pnpm

Run
- Install: npm install
- Dev: npm run dev (http://localhost:3000)
- Prod: npm run build && npm start

Customization
- Edit src/app/data.js (projectsData, BtnList)
- Replace backgrounds in public/background/*.png
- Add GLB to public/models and wire via components/models
- Audio via components/Sound.jsx
- Replace public/resume.pdf and ensure a "resume" link exists in BtnList

Add a new project
- Append an object to projectsData with id, name, description, date, demoLink
- It appears automatically on /projects

Deploy
- Recommended: Vercel (zero-config for Next.js)
- Ensure Node 18+ in project settings if needed

Troubleshooting
- Missing 3D model: check file path/name under public/models
- Audio blocked: browsers may require user interaction; see components/Sound.jsx
- Resume 404: ensure public/resume.pdf exists and link path is "/resume.pdf"

Scripts
- npm run dev
- npm run build
- npm start

License
- Add a LICENSE file (e.g., MIT) if open-sourcing.

Author
- GitHub: https://github.com/Hamza9199
- LinkedIn: https://www.linkedin.com/in/hamza-gacic-dev/

---

Deutsch

Ein kurzes, modernes Mehrseiten-Portfolio (Home, About, Projects, Contact) mit 3D-Modellen, Hintergrundeffekten und Ton. Erstellt mit Next.js App Router.

- Home: Hero mit 3D-Modell und Navigation
- About: kurze Bio und Fähigkeiten
- Projects: Projektliste mit Links
- Contact: Kontaktformular und soziale Links

Funktionen
- 3D-GLB-Modelle (public/models) mit Renderer-Komponente
- Dynamische Daten für Projekte und Navigation (src/app/data.js)
- Seitenspezifische Hintergründe (public/background)
- Hintergrundaudio (public/audio)
- Responsives Design und einfache Navigation

Technologien
- Next.js (App Router), React
- WebGL-Rendering für GLB-Modelle
- CSS-Module/global styles

Projektstruktur (kurz)
- public/: background/, models/, audio/, resume.pdf
- src/app/: page.js, (sub pages)/about|projects|contact, data.js, globals.css, layout.js
- src/components/: models/, projects/, about/, contact/, Sound.jsx, RenderModel.jsx, FireFliesBackground.jsx, navigation/

Voraussetzungen
- Node.js 18+ und npm/yarn/pnpm

Starten
- Installation: npm install
- Entwicklung: npm run dev (http://localhost:3000)
- Produktion: npm run build && npm start

Anpassung
- src/app/data.js bearbeiten (projectsData, BtnList)
- Hintergründe in public/background/*.png ersetzen
- GLB-Dateien nach public/models hinzufügen und über components/models einbinden
- Audio über components/Sound.jsx steuern
- public/resume.pdf ersetzen und Link in BtnList ("resume") sicherstellen

Neues Projekt hinzufügen
- Objekt zu projectsData mit id, name, description, date, demoLink hinzufügen
- Es erscheint automatisch unter /projects

Deployment
- Empfehlung: Vercel (Next.js ohne zusätzliche Konfiguration)
- Node 18+ in den Projekteinstellungen sicherstellen

Fehlerbehebung
- 3D-Modell fehlt: Pfad/Dateiname unter public/models prüfen
- Audio blockiert: Browser verlangen evtl. Interaktion; siehe components/Sound.jsx
- Resume 404: public/resume.pdf vorhanden und Pfad "/resume.pdf" prüfen

Skripte
- npm run dev
- npm run build
- npm start

Lizenz
- Füge eine LICENSE-Datei hinzu (z. B. MIT), falls Open-Source geplant ist.

Autor
- GitHub: https://github.com/Hamza9199
- LinkedIn: https://www.linkedin.com/in/hamza-gacic-dev/