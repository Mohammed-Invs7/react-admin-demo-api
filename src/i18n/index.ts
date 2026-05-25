import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getCookie } from '@/lib/cookies'
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

export const SUPPORTED_LOCALES = ['en', 'ar'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const LOCALE_COOKIE_NAME = 'lang'
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

export function getStoredLocale(): Locale {
  const stored = getCookie(LOCALE_COOKIE_NAME)
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE
}

export function localeToDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getStoredLocale(),
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
})

export default i18n
