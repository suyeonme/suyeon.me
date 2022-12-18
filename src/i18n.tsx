import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ['en', 'ko'];

let ready: boolean;
let readyCallback: () => void;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
    },
    fallbackLng: 'en',
    debug: false,
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
  .then(() => {
    ready = true;
    if (readyCallback) {
      readyCallback();
    }
  });

export const setCallback = (callback: () => void): void => {
  readyCallback = callback;
  if (ready) {
    readyCallback();
  }
};

export default i18n;
