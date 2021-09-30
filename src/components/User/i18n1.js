import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from "../../../src/locales/en/translationEN.json";
import translationKO from "../../../src/locales/ko/translationKO.json";
import translationCH from "../../../src/locales/chi/translationCH.json";

const resources = {
    en: {
        translation: translationEN,
    },
    ko: {
        translation: translationKO,
    },
    chi: {
        translation: translationCH,
    },
};



i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
      resources,
      lng: 'ko',
      fallbackLng: "chi",
      react: {
          useSuspense: false //   <---- this will do the magic
      },

    interpolation: {
      escapeValue: false
    },
  });

export default i18n;