"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Languages } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const TARGET_VOLUME = 0.4;
const AUDIO_SRC = "/audio/birds39-forest-20772.mp3";
const LANGUAGE_ORDER = ["bs", "en", "de"];

const Modal = ({ onClose, toggle, t }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            "
      >
        <p className="font-light">{t("sound.modal.question")}</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            {t("sound.modal.yes")}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            {t("sound.modal.no")}
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = TARGET_VOLUME;

    const ensureVolume = () => {
      audio.volume = TARGET_VOLUME;
    };

    audio.addEventListener("volumechange", ensureVolume);
    return () => audio.removeEventListener("volumechange", ensureVolume);
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    audioRef.current.volume = TARGET_VOLUME;
    setShowModal(false);
  };

  const toggleLangMenu = () => setMenuOpen((v) => !v);
  const selectLanguage = (code) => {
    setLang(code);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onDocClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 flex items-center gap-2">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} t={t} />
      )}

      <div className="relative">
        <button
          ref={btnRef}
          onClick={toggleLangMenu}
          className="relative w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label={`${t("aria.languageButton")} ${lang.toUpperCase()}`}
          name="Language switch button"
          title={lang.toUpperCase()}
        >
          <Languages className="w-full h-full" strokeWidth={1.5} />
          <span className="pointer-events-none absolute -bottom-1 -right-1 text-[10px] xs:text-xs px-1.5 py-0.5 rounded bg-foreground text-background font-semibold">
            {lang.toUpperCase()}
          </span>
        </button>

        {menuOpen && (
          <div
            ref={menuRef}
            role="menu"
            className="absolute right-0 mt-2 w-36 custom-bg border border-accent/30 rounded shadow-glass-inset py-1 z-[60]"
          >
            {LANGUAGE_ORDER.map((code) => (
              <button
                key={code}
                role="menuitemradio"
                aria-checked={code === lang}
                onClick={() => selectLanguage(code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:text-accent ${
                  code === lang ? "text-accent" : "text-foreground"
                }`}
              >
                <span>{t(`languages.${code}`) || code.toUpperCase()}</span>
                <span aria-hidden="true">{code === lang ? "✓" : ""}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src={AUDIO_SRC} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg group"
        aria-label={t("aria.soundButton")}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
