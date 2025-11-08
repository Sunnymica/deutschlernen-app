import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationDE from './locales/de.json';
import translationEN from './locales/en.json';
import translationUK from './locales/uk.json';
import translationHR from './locales/hr.json';

const resources = {
  de: {
    translation: translationDE
  },
  en: {
    translation: translationEN
  },
  uk: {
    translation: translationUK
  },
  hr: {
    translation: translationHR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
