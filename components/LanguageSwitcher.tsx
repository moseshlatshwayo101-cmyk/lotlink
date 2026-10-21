"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lotlink-locale");
    if (saved) {
      setLocale(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      const supported = languages.find((l) => l.code === browserLang);
      if (supported) {
        setLocale(supported.code);
        localStorage.setItem("lotlink-locale", supported.code);
      }
    }
  }, []);

  const handleSelect = (code: string) => {
    localStorage.setItem("lotlink-locale", code);
    setLocale(code);
    setOpen(false);
  };

  const current = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          borderRadius: "0.4rem",
          border: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          padding: "0.35rem 0.7rem",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          cursor: "pointer",
        }}
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            zIndex: 50,
            marginTop: "0.4rem",
            width: "9rem",
            overflow: "hidden",
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            background: "var(--bg-secondary)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                textAlign: "left",
                fontSize: "0.85rem",
                background: lang.code === locale ? "var(--bg-primary)" : "transparent",
                color: lang.code === locale ? "var(--accent)" : "var(--text-secondary)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
