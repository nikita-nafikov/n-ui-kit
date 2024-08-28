import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';

export const DEFAULT_LOCALE = 'ru';
export const LANGUAGES = {
  en,
  ru,
};

export const config = {
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'ru',
  messages: LANGUAGES,
};

const i18n = createI18n(config);

export default i18n;
