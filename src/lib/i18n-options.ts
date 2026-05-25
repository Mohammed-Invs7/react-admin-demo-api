import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Shield, UserCheck, Users, CreditCard } from 'lucide-react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Circle,
  CheckCircle,
  AlertCircle,
  Timer,
  HelpCircle,
  CircleOff,
} from 'lucide-react'

export function useUserRoles() {
  const { t } = useTranslation()
  return useMemo(
    () =>
      [
        { label: t('users.roles.superadmin'), value: 'superadmin', icon: Shield },
        { label: t('users.roles.admin'), value: 'admin', icon: UserCheck },
        { label: t('users.roles.manager'), value: 'manager', icon: Users },
        { label: t('users.roles.cashier'), value: 'cashier', icon: CreditCard },
      ] as const,
    [t]
  )
}

export function useUserStatuses() {
  const { t } = useTranslation()
  return useMemo(
    () =>
      [
        { label: t('users.statuses.active'), value: 'active' as const },
        { label: t('users.statuses.inactive'), value: 'inactive' as const },
        { label: t('users.statuses.invited'), value: 'invited' as const },
        { label: t('users.statuses.suspended'), value: 'suspended' as const },
      ] as const,
    [t]
  )
}

export function useTaskStatuses() {
  const { t } = useTranslation()
  return useMemo(
    () => [
      { label: t('tasks.statuses.backlog'), value: 'backlog' as const, icon: HelpCircle },
      { label: t('tasks.statuses.todo'), value: 'todo' as const, icon: Circle },
      {
        label: t('tasks.statuses.inProgress'),
        value: 'in progress' as const,
        icon: Timer,
      },
      { label: t('tasks.statuses.done'), value: 'done' as const, icon: CheckCircle },
      {
        label: t('tasks.statuses.canceled'),
        value: 'canceled' as const,
        icon: CircleOff,
      },
    ],
    [t]
  )
}

export function useTaskPriorities() {
  const { t } = useTranslation()
  return useMemo(
    () => [
      { label: t('tasks.priorities.low'), value: 'low' as const, icon: ArrowDown },
      {
        label: t('tasks.priorities.medium'),
        value: 'medium' as const,
        icon: ArrowRight,
      },
      { label: t('tasks.priorities.high'), value: 'high' as const, icon: ArrowUp },
      {
        label: t('tasks.priorities.critical'),
        value: 'critical' as const,
        icon: AlertCircle,
      },
    ],
    [t]
  )
}

export function useTaskLabels() {
  const { t } = useTranslation()
  return useMemo(
    () => [
      { value: 'bug', label: t('tasks.labels.bug') },
      { value: 'feature', label: t('tasks.labels.feature') },
      { value: 'documentation', label: t('tasks.labels.documentation') },
    ],
    [t]
  )
}

export const APP_KEYS = [
  'telegram',
  'notion',
  'figma',
  'trello',
  'slack',
  'zoom',
  'stripe',
  'gmail',
  'medium',
  'skype',
  'docker',
  'github',
  'gitlab',
  'discord',
  'whatsapp',
] as const

export type AppKey = (typeof APP_KEYS)[number]
