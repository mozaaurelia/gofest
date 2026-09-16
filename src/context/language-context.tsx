import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, Language, getTranslation } from "@/constants/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
  t: (k) => k,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let text = getTranslation(language, key);
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          text = text.replace(`{${k}}`, String(v));
        });
      }
      return text;
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  return <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { t, language, setLanguage, toggleLanguage } = useLanguage();
  return { t, language, setLanguage, toggleLanguage };
}
