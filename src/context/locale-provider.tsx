import { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCookie, removeCookie, setCookie } from '@/lib/cookies'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  type Locale,
  isLocale,
  localeToDirection,
} from '@/i18n'
import { useDirection } from '@/context/direction-provider'

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  resetLocale: () => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const { setDir } = useDirection()
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = getCookie(LOCALE_COOKIE_NAME)
    return stored && isLocale(stored) ? stored : DEFAULT_LOCALE
  })

  const applyLocale = (next: Locale) => {
    setLocaleState(next)
    void i18n.changeLanguage(next)
    setCookie(LOCALE_COOKIE_NAME, next, LOCALE_COOKIE_MAX_AGE)
    document.documentElement.lang = next
    setDir(localeToDirection(next))
  }

  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale)
    }
    document.documentElement.lang = locale
    setDir(localeToDirection(locale))
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync once on mount
  }, [])

  const setLocale = (next: Locale) => {
    applyLocale(next)
  }

  const resetLocale = () => {
    removeCookie(LOCALE_COOKIE_NAME)
    applyLocale(DEFAULT_LOCALE)
  }

  return (
    <LocaleContext value={{ locale, setLocale, resetLocale }}>
      {children}
    </LocaleContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
