// filepath: src/app/ClientProviders.jsx
"use client";
import { LanguageProvider } from "./i18n/LanguageProvider";

export default function ClientProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
