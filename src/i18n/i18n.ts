import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, enMetadata } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { hi } from './locales/hi';
import { ja } from './locales/ja';
import { pt_BR } from './locales/pt_BR';
import { uk } from './locales/uk';

const resources = {
    en,
    es,
    fr,
    de,
    hi,
    ja,
    pt_BR,
    uk,
};

i18n.use(initReactI18next).init({
    resources,
    lng: enMetadata.code,
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: enMetadata.code,
    debug: false,
});

export { i18n };
