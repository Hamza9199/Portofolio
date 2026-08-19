export const dict = {
  bs: {
    nav: {
      home: "Početna",
      about: "O meni",
      projects: "Projekti",
      contact: "Kontakt",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      resume: "CV",
    },
    aria: {
      homeSr: "Idi na početnu stranicu",
      soundButton: "Dugme za kontrolu zvuka",
      languageButton: "Dugme za promjenu jezika",
    },
    sound: {
      modal: {
        question: "Želite li pustiti muziku u pozadini?",
        yes: "Da",
        no: "Ne",
      },
    },
    loading: {
      home: { headline: "Start!", subline: "Priprema početne mreže" },
      projects: { headline: "Start!", subline: "Punimo zid u boksu za projekte" },
      contact: { headline: "Start!", subline: "Otvaramo garažu za kontakt" },
      about: { headline: "Start!", subline: "Podešavamo paddock o meni" },
    },
    projects: {
      view: "Otvori",
      linkSoon: "Link uskoro",
    },
    contact: {
      title: "Kontaktiraj me",
      description:
        "Bilo da imate pitanje ili želite da sarađujemo, ili jednostavno želite da se javite – slobodno me kontaktirajte! Uvek sam otvoren za nove projekte, kreativne ideje ili prilike da budem deo vaše vizije. Hajde da zajedno napravimo nešto sjajno!",
    },
    form: {
      placeholders: {
        name: "ime",
        email: "email",
        message: "poruka",
      },
      send: "Pošalji!",
      errors: {
        name: {
          required: "Ovo polje je obavezno!",
          min: "Ime treba imati najmanje 3 znaka.",
        },
        email: {
          required: "Ovo polje je obavezno!",
        },
        message: {
          required: "Ovo polje je obavezno!",
          max: "Poruka treba biti kraća od 500 znakova.",
          min: "Poruka treba biti duža od 50 znakova.",
        },
      },
      toast: {
        invalidEmail: "Unesite ispravan email prije slanja.",
        sending: "Šaljem vašu poruku, molim sačekajte...",
        error: "Došlo je do greške pri slanju, pokušajte ponovo kasnije!",
        success: "Primio sam vašu poruku, javit ću se uskoro!",
      },
    },
    about: {
      hero: {
        name: "Hamza Gačić",
        title: "Softverski inženjer",
      },
      section: {
        title: "Malo o mom putu i iskustvu",
        paragraph:
          "Ja sam strastven i posvećen full‑stack developer sa više od 3 godine iskustva u izradi dinamičnih i responzivnih web aplikacija. Radim sa tehnologijama kao što su React, Node.js, Express i MongoDB, uživam u timskom radu i uvijek sam spreman na nove izazove.",
      },
      stats: {
        clients: "klijenata",
        years: "godina iskustva",
        projects: "Projekata",
        technologies: "Tehnologija",
        learning: "Učenje",
      },
      alt: {
        topLangs: "Graf jezika",
        stats: "GitHub statistike",
        techStack: "Tehnologije",
        streak: "GitHub streak statistika",
        pin: {
          music: "Kartica repozitorija MusicStreamingService",
        },
      },
      experience: {
        title: "Iskustvo i Put",
        current: "Trenutno",
        featuredProject: "Istaknuti projekat",
        viewOnGitHub: "Pogledaj",
      },
      skills: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Alati",
        other: "Ostalo",
      },
      experiences: {
        exp1: {
          year: "2025 – Sada",
          title: "Full Stack Developer",
          company: "Freelance / Samostalni projekti",
          description: "Razvoj savremenih web aplikacija koristeći React, Next.js, Node.js i povezane tehnologije. Fokus na performanse, pristupačnost i korisničko iskustvo.",
        },
        exp2: {
          year: "2022 – 2025",
          title: "Software Engineer / Student",
          company: "Razni projekti / Praksa / Obrazovanje",
          description: "Rad na full-stack aplikacijama, API integracijama, baze podataka i testiranju. Iskustvo sa timskim radom, code review procesima i agilnom metodologijom.",
        },
        exp3: {
          year: "2019 – 2022",
          title: "Junior Developer / Student",
          company: "Osobni projekti",
          description: "Učenje osnova programiranja, algoritama, struktura podataka i prvih koraka u web razvoju. Izrada desktop i web aplikacija za učenje.",
        },
      },
    },
    languages: {
      bs: "Bosanski",
      en: "Engleski",
      de: "Njemački",
    },
    projectsData: {
      1: {
        name: "Una Film Distribucija",
        description:
          "Web aplikacija za distribuciju filmova i filmskih vijesti. Korisnici mogu gledati filmove, trailere, vijesti i drugi sadržaj, dok administratori upravljaju sadržajem putem kontrolne table.",
        date: "Web aplikacija",
      },
      2: {
        name: "Music Streaming Service",
        description:
          "Mobilna aplikacija za streaming muzike fokusirana na prilagodljivo korisničko iskustvo sa funkcijama poput offline režima.",
        date: "Mobilna aplikacija",
      },
      3: {
        name: "Cats Defenders",
        description:
          "Igra u stilu Space‑Invaders u C# (Windows Forms). Kontrolišite mačku koja brani svoju teritoriju od neprijatelja i preživite što duže.",
        date: "Igra",
      },
      4: {
        name: "ForgeAI",
        description:
          "Napredna tehnologija za muzičku produkciju koja omogućava intuitivno generisanje muzike pomoću tekstualnih upita i AI modela uz visok kvalitet i fleksibilnost.",
        date: "Plugin, Web aplikacija",
      },
      5: {
        name: "TrailerFlix",
        description:
          "Web aplikacija za pregled i organizaciju filmskih trailera, izrađena u sklopu kursa Web Dizajn. Uključuje pretragu, pregled, autentifikaciju i personalizovanu kontrolnu tablu.",
        date: "Web aplikacija",
      },
      6: {
        name: "Audio System",
        description:
          "Desktop muzički plejer u C++ sa fokusom na OOP. Pretražujte, slušajte i upravljajte lokalno sačuvanom muzikom kao u klasičnim Windows plejerima.",
        date: "Desktop aplikacija",
      },
      7: {
        name: "RedBullShop",
        description:
          "E‑commerce web aplikacija za pregled proizvoda, korpu, narudžbe, recenzije i upravljanje korisničkim profilom (frontend + backend).",
        date: "Web aplikacija",
      },
      8: {
        name: "Sistem Prijave za Posao",
        description:
          "Full‑stack aplikacija za upravljanje korisnicima, poslovima i recenzijama. Backend u Spring Boot, frontend u React; uključena uputstva za pokretanje.",
        date: "Web aplikacija",
      },
      9: {
        name: "End‑to‑End (E2E) testiranje u React aplikacijama",
        description:
          "Fokus na E2E testiranje React aplikacija pomoću Cypress‑a radi osiguranja funkcionalnosti i korisničkog iskustva.",
        date: "Testiranje web aplikacija",
      },
      10: {
        name: "Embedded Smart Car System",
        description:
          "Vozilo sa dvostrukim MCU‑om, fuzijom senzora, praćenjem okoline i IR daljinskim upravljačem.",
        date: "MCU",
      },
      11: {
        name: "DecibelOld",
        description:
          "Moderna muzička platforma za slušanje, plejlistе, praćenje izvođača i interakcije (komentari/sviđanja) uz jednostavno korisničko iskustvo.",
        date: "Web aplikacija",
      },
       12: {
        name: "Portofolio",
        description:
          "Interaktivni portfolio izgrađen pomoću Next.js, React Three Fiber i Framer Motion. Sadrži 3D modele, glatke animacije, i18n, kontakt formu, zvuk u pozadini i responzivni dizajn.",  
        date: "Web aplikacija",
      },
      13: {
        name: "Decibel",
        description:
          "Decibel je moderna muzička platforma koja omogućava korisnicima da otkrivaju, slušaju i upravljaju pjesmama, albumima i plejlistama, kao i da prate druge korisnike i izvođače. Projekat se sastoji od pet dijelova: backend (FastAPI + MySQL), frontend (React + Vite), mobilne aplikacije (React-native), Discord bot (Python) i desktop aplikacije (Electron).",
        date: "Multiplatformski sistem",
      }
    },

  },    
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      resume: "Resume",
    },
    aria: {
      homeSr: "Go to Home Page",
      soundButton: "Sound control button",
      languageButton: "Language switch button",
    },
    sound: {
      modal: {
        question: "Do you want to play background music?",
        yes: "Yes",
        no: "No",
      },
    },
    loading: {
      home: { headline: "Lights out", subline: "Dialing in the home grid" },
      projects: { headline: "Lights out", subline: "Fueling the project pitwall" },
      contact: { headline: "Lights out", subline: "Opening the contact garage" },
      about: { headline: "Lights out", subline: "Tuning the about paddock" },
    },
    projects: {
      view: "View",
      linkSoon: "Link soon",
    },
    contact: {
      title: "Contact Me",
      description:
        "Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and create something amazing together!",
    },
    form: {
      placeholders: {
        name: "name",
        email: "email",
        message: "message",
      },
      send: "Send!",
      errors: {
        name: {
          required: "This field is required!",
          min: "Name should be at least 3 characters long.",
        },
        email: {
          required: "This field is required!",
        },
        message: {
          required: "This field is required!",
          max: "Message should be less than 500 characters",
          min: "Message should be more than 50 characters",
        },
      },
      toast: {
        invalidEmail: "Please provide a valid email address before submitting.",
        sending: "Sending your message, please wait...",
        error: "There was an error sending your message, please try again later!",
        success: "I have received your message, I will get back to you soon!",
      },
    },
    about: {
      hero: {
        name: "Hamza Gačić",
        title: "Software Engineer",
      },
      section: {
        title: "A bit about my journey and experience",
        paragraph:
          "I am a passionate and dedicated full‑stack developer with over 3 years of experience building dynamic and responsive web applications. I work with technologies like React, Node.js, Express, and MongoDB, thrive in collaborative environments, and enjoy new challenges.",
      },
      stats: {
        clients: "clients",
        years: "years of experience",
        projects: "Projects",
        technologies: "Technologies",
        learning: "Learning",
      },
      alt: {
        topLangs: "Top languages chart",
        stats: "GitHub statistics",
        techStack: "Tech stack",
        streak: "GitHub streak stats",
        pin: {
          music: "MusicStreamingService repository card",
        },
      },
      experience: {
        title: "Experience & Journey",
        current: "Current",
        featuredProject: "Featured Project",
        viewOnGitHub: "View",
      },
      skills: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        other: "Other",
      },
      experiences: {
        exp1: {
          year: "2025 – Present",
          title: "Full Stack Developer",
          company: "Freelance / Personal Projects",
          description: "Development of modern web applications using React, Next.js, Node.js and related technologies. Focus on performance, accessibility and user experience.",
        },
        exp2: {
          year: "2022 – 2025",
          title: "Software Engineer / Student",
          company: "Various Projects / Internship / Education",
          description: "Work on full-stack applications, API integrations, databases and testing. Experience with teamwork, code review processes and agile methodology.",
        },
        exp3: {
          year: "2019 – 2022",
          title: "Junior Developer / Student",
          company: "Personal Projects",
          description: "Learning programming fundamentals, algorithms, data structures and first steps in web development. Creation of desktop and web applications for learning.",
        },
      },
    },
    languages: {
      bs: "Bosnian",
      en: "English",
      de: "German",
    },
    projectsData: {
      1: {
        name: "Una Film Distribution",
        description:
          "Web application for distributing movies and film news. Users can view movies, trailers, news and other content, while administrators manage content via a dashboard.",
        date: "Web App",
      },
      2: {
        name: "Music Streaming Service",
        description:
          "Mobile music streaming app focused on a customizable user experience with innovative features like offline mode.",
        date: "Mobile App",
      },
      3: {
        name: "Cats Defenders",
        description:
          "Space‑Invaders style game in C# (Windows Forms). Control a cat defending its territory from enemy attacks and survive as long as possible.",
        date: "Game",
      },
      4: {
        name: "ForgeAI",
        description:
          "Advanced music production technology enabling intuitive music generation using text prompts and AI models for high quality and flexibility.",
        date: "Plugin, Web App",
      },
      5: {
        name: "TrailerFlix",
        description:
          "Web app for viewing and organizing movie trailers, built as part of a Web Design course. Includes search, viewing, auth and a personalized dashboard.",
        date: "Web App",
      },
      6: {
        name: "Audio System",
        description:
          "Desktop music player built in C++ with OOP focus. Browse, listen to and manage locally stored music like classic Windows players.",
        date: "Desktop App",
      },
      7: {
        name: "RedBullShop",
        description:
          "E‑commerce web app for browsing products, cart, orders, reviews, and user profile management (frontend + backend).",
        date: "Web App",
      },
      8: {
        name: "Job Application System",
        description:
          "Full‑stack app for managing users, jobs and reviews. Backend in Spring Boot, frontend in React; includes setup and run instructions.",
        date: "Web App",
      },
      9: {
        name: "End‑to‑End (E2E) Testing in React Apps",
        description:
          "Focus on E2E testing in React apps using Cypress to ensure functionality and user experience in modern web development.",
        date: "Web App Testing",
      },
      10: {
        name: "Embedded Smart Car System",
        description:
          "Vehicle with dual MCU, sensor fusion, environmental monitoring and IR remote control.",
        date: "MCU",
      },
      11: {
        name: "DecibelOld",
        description:
          "Modern music platform for listening, playlists, following artists, and interactions (comments/likes) with a simple user experience.",
        date: "Web App",
      },
        12: {
        name: "Portofolio",
        description:
          "Interactive portfolio built with Next.js, React Three Fiber, and Framer Motion. Features 3D models, smooth animations, i18n, contact form, background sound, and responsive design.",       
        date: "Web App",
    },
    13: {
      name: "Decibel",
      description:
          "Decibel is a modern music platform that allows users to discover, listen to, and manage songs, albums, and playlists, as well as follow other users and artists. The project consists of five parts: backend (FastAPI + MySQL), frontend (React + Vite), mobile applications (React-native), discord bot (Python), and desktop applications (Electron).",
      date: "Multiplatform system",
        
    },
  },
},
  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      resume: "Lebenslauf",
    },
    aria: {
      homeSr: "Zur Startseite",
      soundButton: "Schaltfläche zur Tonsteuerung",
      languageButton: "Sprachwechsel-Schaltfläche",
    },
    sound: {
      modal: {
        question: "Möchten Sie Hintergrundmusik abspielen?",
        yes: "Ja",
        no: "Nein",
      },
    },
    loading: {
      home: { headline: "Ampeln aus", subline: "Startaufstellung wird vorbereitet" },
      projects: { headline: "Ampeln aus", subline: "Projekt-Pitwall wird betankt" },
      contact: { headline: "Ampeln aus", subline: "Kontakt-Garage wird geöffnet" },
      about: { headline: "Ampeln aus", subline: "About-Paddock wird abgestimmt" },
    },
    projects: {
      view: "Ansehen",
      linkSoon: "Link folgt",
    },
    contact: {
      title: "Kontaktieren Sie mich",
      description:
        "Ob Sie eine Frage haben, zusammenarbeiten möchten oder einfach nur Hallo sagen wollen, melden Sie sich gerne! Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu sein. Lassen Sie uns vernetzen und gemeinsam etwas Großartiges erschaffen!",
    },
    form: {
      placeholders: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
      },
      send: "Senden!",
      errors: {
        name: {
          required: "Dieses Feld ist erforderlich!",
          min: "Der Name sollte mindestens 3 Zeichen lang sein.",
        },
        email: {
          required: "Dieses Feld ist erforderlich!",
        },
        message: {
          required: "Dieses Feld ist erforderlich!",
          max: "Die Nachricht sollte weniger als 500 Zeichen umfassen.",
          min: "Die Nachricht sollte mehr als 50 Zeichen umfassen.",
        },
      },
      toast: {
        invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein, bevor Sie absenden.",
        sending: "Ihre Nachricht wird gesendet, bitte warten...",
        error: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten, bitte versuchen Sie es später erneut!",
        success: "Ich habe Ihre Nachricht erhalten und werde mich in Kürze bei Ihnen melden!",
      },
    },
    about: {
      hero: {
        name: "Hamza Gačić",
        title: "Softwareentwickler",
      },
      section: {
        title: "Ein wenig über meinen Weg und meine Erfahrung",
        paragraph:
          "Ich bin ein leidenschaftlicher und engagierter Full-Stack-Softwareentwickler mit über 3 Jahren Erfahrung in der Entwicklung dynamischer und responsiver Webanwendungen. Ich arbeite mit Technologien wie React, Node.js, Express und MongoDB, blühe in kollaborativen Umgebungen auf und genieße neue Herausforderungen.",
      },
      stats: {
        clients: "Kunden",
        years: "Jahre Erfahrung",
        projects: "Projekte",
        technologies: "Technologien",
        learning: "Lernen",
      },
      alt: {
        topLangs: "Top-Sprachen-Diagramm",
        stats: "GitHub-Statistiken",
        techStack: "Technologie-Stack",
        streak: "GitHub-Streak-Statistiken",
        pin: {
          music: "MusicStreamingService Repository-Karte",
        },
      },
      experience: {
        title: "Erfahrung & Weg",
        current: "Aktuell",
        featuredProject: "Hervorgehobenes Projekt",
        viewOnGitHub: "Auf ansehen",
      },
      skills: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        other: "Sonstiges",
      },
      experiences: {
        exp1: {
          year: "2025 – Heute",
          title: "Full Stack Developer",
          company: "Freelance / Persönliche Projekte",
          description: "Entwicklung moderner Webanwendungen mit React, Next.js, Node.js und verwandten Technologien. Fokus auf Leistung, Barrierefreiheit und Benutzererfahrung.",
        },
        exp2: {
          year: "2022 – 2025",
          title: "Software Engineer / Student",
          company: "Verschiedene Projekte / Praktikum / Ausbildung",
          description: "Arbeit an Full-Stack-Anwendungen, API-Integrationen, Datenbanken und Tests. Erfahrung mit Teamarbeit, Code-Review-Prozessen und agiler Methodik.",
        },
        exp3: {
          year: "2019 – 2022",
          title: "Junior Developer / Student",
          company: "Persönliche Projekte",
          description: "Erlernen von Programmiergrundlagen, Algorithmen, Datenstrukturen und ersten Schritten in der Webentwicklung. Erstellung von Desktop- und Webanwendungen zum Lernen.",
        },
      },
    },
    languages: {
      bs: "Bosnisch",
      en: "Englisch",
      de: "Deutsch",
    },
    projectsData: {
      1: {
        name: "Una Film Distribution",
        description:
          "Webanwendung für den Vertrieb von Filmen und Filmnachrichten. Benutzer können Filme, Trailer, Nachrichten und andere Inhalte ansehen, während Administratoren Inhalte über ein Dashboard verwalten.",
        date: "Web App",
      },
      2: {
        name: "Music Streaming Service",
        description:
          "Mobile Musik-Streaming-App mit Fokus auf ein anpassbares Benutzererlebnis mit innovativen Funktionen wie dem Offline-Modus.",
        date: "Mobile App",
      },
      3: {
        name: "Cats Defenders",
        description:
          "Space-Invaders-Spiel in C# (Windows Forms). Steuere eine Katze, die ihr Territorium vor feindlichen Angriffen verteidigt und überlebe so lange wie möglich.",
        date: "Spiel",
      },
      4: {
        name: "ForgeAI",
        description:
          "Fortschrittliche Musikproduktionstechnologie, die eine intuitive Musikgenerierung mithilfe von Textabfragen und KI-Modellen mit hoher Qualität und Flexibilität ermöglicht.",
        date: "Plugin, Web App",
      },
      5: {
        name: "TrailerFlix",
        description:
          "Web-App zum Ansehen und Organisieren von Filmtrailern, erstellt im Rahmen eines Webdesign-Kurses. Beinhaltet Suche, Anzeige, Authentifizierung und ein personalisiertes Dashboard.",
        date: "Web App",
      },
      6: {
        name: "Audio System",
        description:
          "Desktop-Musikplayer, entwickelt in C++ mit OOP-Fokus. Durchsuchen, Anhören und Verwalten von lokal gespeicherter Musik wie bei klassischen Windows-Playern.",
        date: "Desktop App",
      },
      7: {
        name: "RedBullShop",
        description:
          "E-Commerce-Web-App zum Durchsuchen von Produkten, Warenkorb, Bestellungen, Bewertungen und Benutzerprofilverwaltung (Frontend + Backend).",
        date: "Web App",
      },
      8: {
        name: "Bewerbungssystem",
        description:
          "Full-Stack-App zur Verwaltung von Benutzern, Jobs und Bewertungen. Backend in Spring Boot, Frontend in React; inklusive Setup- und Ausführungsanweisungen.",
        date: "Web App",
      },
      9: {
        name: "End-to-End (E2E) Tests in React-Apps",
        description:
          "Fokus auf E2E-Tests in React-Apps mit Cypress, um Funktionalität und Benutzererfahrung in der modernen Webentwicklung sicherzustellen.",
        date: "Web-App-Tests",
      },
      10: {
        name: "Eingebettetes Smart-Car-System",
        description:
          "Fahrzeug mit dualem MCU, Sensorfusion, Umweltüberwachung und IR-Fernbedienung.",
        date: "MCU",
      },
      11: {
        name: "DecibelOld",
        description:
          "Moderne Musikplattform zum Anhören, Erstellen von Playlists, Folgen von Künstlern und Interaktionen (Kommentare/Likes) mit einfachem Benutzererlebnis.",
        date: "Web App",
      },
      12: {
        name: "Portofolio",
        description:
          "Ein interaktives Portfolio, erstellt mit Next.js, React Three Fiber und Framer Motion. Mit 3D-Modellen, flüssigen Animationen, i18n, Kontaktformular, Hintergrundsound und reaktionsschnellem Design.",
        date: "Web App",
      },
      13: {
        name: "Decibel",
        description:
          "Decibel ist eine moderne Musikplattform, die es Benutzern ermöglicht, Songs, Alben und Playlists zu entdecken, anzuhören und zu verwalten sowie anderen Benutzern und Künstlern zu folgen. Das Projekt besteht aus fünf Teilen: Backend (FastAPI + MySQL), Frontend (React + Vite), mobilen Anwendungen (React-native), Discord-Bot (Python) und Desktop-Anwendungen (Electron).",
        date: "Multiplattform-System",
      },
    },
  },
};



