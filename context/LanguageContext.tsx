// app/context/LanguageContext.tsx
"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface Language {
  code: string;
  name: string;
}

interface LanguageContextType {
  selected: Language;
  setSelected: (lang: Language) => void;
}

const ASIAN_LANGUAGES: Language[] = [
  { code: "en", name: "English (US)" },
  { code: "bn", name: "Bangla" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "hi", name: "Hindi" },
  { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" },
  { code: "id", name: "Indonesian" },
  { code: "ms", name: "Malay" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Language>(ASIAN_LANGUAGES[0]);

  return (
    <LanguageContext.Provider value={{ selected, setSelected }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export { ASIAN_LANGUAGES };
