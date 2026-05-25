import type { ReactNode } from 'react'
import {
  IconTelegram,
  IconNotion,
  IconFigma,
  IconTrello,
  IconSlack,
  IconZoom,
  IconStripe,
  IconGmail,
  IconMedium,
  IconSkype,
  IconDocker,
  IconGithub,
  IconGitlab,
  IconDiscord,
  IconWhatsapp,
} from '@/assets/brand-icons'
import { type AppKey } from '@/lib/i18n-options'

const logos: Record<AppKey, ReactNode> = {
  telegram: <IconTelegram />,
  notion: <IconNotion />,
  figma: <IconFigma />,
  trello: <IconTrello />,
  slack: <IconSlack />,
  zoom: <IconZoom />,
  stripe: <IconStripe />,
  gmail: <IconGmail />,
  medium: <IconMedium />,
  skype: <IconSkype />,
  docker: <IconDocker />,
  github: <IconGithub />,
  gitlab: <IconGitlab />,
  discord: <IconDiscord />,
  whatsapp: <IconWhatsapp />,
}

export const apps: { key: AppKey; logo: ReactNode; connected: boolean }[] =
  [
    { key: 'telegram', logo: logos.telegram, connected: false },
    { key: 'notion', logo: logos.notion, connected: true },
    { key: 'figma', logo: logos.figma, connected: true },
    { key: 'trello', logo: logos.trello, connected: false },
    { key: 'slack', logo: logos.slack, connected: false },
    { key: 'zoom', logo: logos.zoom, connected: true },
    { key: 'stripe', logo: logos.stripe, connected: false },
    { key: 'gmail', logo: logos.gmail, connected: true },
    { key: 'medium', logo: logos.medium, connected: false },
    { key: 'skype', logo: logos.skype, connected: false },
    { key: 'docker', logo: logos.docker, connected: false },
    { key: 'github', logo: logos.github, connected: false },
    { key: 'gitlab', logo: logos.gitlab, connected: false },
    { key: 'discord', logo: logos.discord, connected: false },
    { key: 'whatsapp', logo: logos.whatsapp, connected: false },
  ]
