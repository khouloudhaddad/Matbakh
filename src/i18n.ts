import { createI18n } from "vue-i18n";
import en from "./locales/en";
import ar from "./locales/ar";

const messages = {
  en,
  ar,
} as const; // Ensures type safety for messages

// Define type for available locales
export type Locale = keyof typeof messages;

const i18n = createI18n({
  locale: "en", // Default language
  fallbackLocale: "en",
  messages,
  legacy: false, // Required for Composition API
});

export default i18n;