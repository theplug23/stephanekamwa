import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en', // Spécifie la langue par défaut sur l'anglais
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: require("./locales/en/common.json")
      },
      fr: {
        common: require("./locales/fr/common.json")
      },
      de:{
        common: require("./locales/de/common.json")
      }
    }
  });

export default i18n;
