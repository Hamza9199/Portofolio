"use client";
import { useLanguage } from "../../app/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {(["bs", "en", "de"]).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: code === lang ? "2px solid #fff" : "1px solid #777",
            background: code === lang ? "#333" : "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
          aria-pressed={code === lang}
          aria-label={`Set language ${code}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
