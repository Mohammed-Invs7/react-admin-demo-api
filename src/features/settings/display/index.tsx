import { useTranslation } from 'react-i18next'
import { ContentSection } from '../components/content-section'
import { DisplayForm } from './display-form'

export function SettingsDisplay() {
  const { t } = useTranslation()

  return (
    <ContentSection
      title={t('settings.displayTitle')}
      desc={t('settings.displayDesc')}
    >
      <DisplayForm />
    </ContentSection>
  )
}
