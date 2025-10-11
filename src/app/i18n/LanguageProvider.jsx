"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict } from "../i18n/dict";

const LanguageContext = createContext({
  lang: "en",
  t: (path) => path,
  setLang: () => {},
});

function getFromPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children, defaultLang = "en" }) {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved && (saved === "bs" || saved === "en" || saved === "de")) setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key) => getFromPath(dict[lang] || dict.en, key) || key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
