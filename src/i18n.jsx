import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

// Solo accede a localStorage si está en el navegador
const getInitialLang = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "es";
  }
  return "es"; // por defecto en servidor
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLang(),
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
