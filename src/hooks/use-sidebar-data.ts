import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '@/components/layout/types'

export function useSidebarData(): SidebarData {
  const { t } = useTranslation()

  return useMemo(
    () => ({
      user: {
        name: 'satnaing',
        email: 'satnaingdev@gmail.com',
        avatar: '/avatars/shadcn.jpg',
      },
      teams: [
        {
          name: t('nav.teams.shadcnAdmin'),
          logo: Command,
          plan: t('nav.teams.shadcnPlan'),
        },
        {
          name: t('nav.teams.acmeInc'),
          logo: GalleryVerticalEnd,
          plan: t('nav.teams.enterprise'),
        },
        {
          name: t('nav.teams.acmeCorp'),
          logo: AudioWaveform,
          plan: t('nav.teams.startup'),
        },
      ],
      navGroups: [
        {
          title: t('nav.groups.general'),
          items: [
            {
              title: t('nav.items.dashboard'),
              url: '/',
              icon: LayoutDashboard,
            },
            {
              title: t('nav.items.tasks'),
              url: '/tasks',
              icon: ListTodo,
            },
            {
              title: t('nav.items.apps'),
              url: '/apps',
              icon: Package,
            },
            {
              title: t('nav.items.chats'),
              url: '/chats',
              badge: '3',
              icon: MessagesSquare,
            },
            {
              title: t('nav.items.users'),
              url: '/users',
              icon: Users,
            },
            {
              title: t('nav.items.clerk'),
              icon: ClerkLogo,
              items: [
                {
                  title: t('nav.items.signIn'),
                  url: '/clerk/sign-in',
                },
                {
                  title: t('nav.items.signUp'),
                  url: '/clerk/sign-up',
                },
                {
                  title: t('nav.items.userManagement'),
                  url: '/clerk/user-management',
                },
              ],
            },
          ],
        },
        {
          title: t('nav.groups.pages'),
          items: [
            {
              title: t('nav.items.auth'),
              icon: ShieldCheck,
              items: [
                {
                  title: t('nav.items.signIn'),
                  url: '/sign-in',
                },
                {
                  title: t('nav.items.signIn2Col'),
                  url: '/sign-in-2',
                },
                {
                  title: t('nav.items.signUp'),
                  url: '/sign-up',
                },
                {
                  title: t('nav.items.forgotPassword'),
                  url: '/forgot-password',
                },
                {
                  title: t('nav.items.otp'),
                  url: '/otp',
                },
              ],
            },
            {
              title: t('nav.items.errors'),
              icon: Bug,
              items: [
                {
                  title: t('nav.items.unauthorized'),
                  url: '/errors/unauthorized',
                  icon: Lock,
                },
                {
                  title: t('nav.items.forbidden'),
                  url: '/errors/forbidden',
                  icon: UserX,
                },
                {
                  title: t('nav.items.notFound'),
                  url: '/errors/not-found',
                  icon: FileX,
                },
                {
                  title: t('nav.items.internalServerError'),
                  url: '/errors/internal-server-error',
                  icon: ServerOff,
                },
                {
                  title: t('nav.items.maintenanceError'),
                  url: '/errors/maintenance-error',
                  icon: Construction,
                },
              ],
            },
          ],
        },
        {
          title: t('nav.groups.other'),
          items: [
            {
              title: t('nav.items.settings'),
              icon: Settings,
              items: [
                {
                  title: t('nav.items.profile'),
                  url: '/settings',
                  icon: UserCog,
                },
                {
                  title: t('nav.items.account'),
                  url: '/settings/account',
                  icon: Wrench,
                },
                {
                  title: t('nav.items.appearance'),
                  url: '/settings/appearance',
                  icon: Palette,
                },
                {
                  title: t('nav.items.notifications'),
                  url: '/settings/notifications',
                  icon: Bell,
                },
                {
                  title: t('nav.items.display'),
                  url: '/settings/display',
                  icon: Monitor,
                },
              ],
            },
            {
              title: t('nav.items.helpCenter'),
              url: '/help-center',
              icon: HelpCircle,
            },
          ],
        },
      ],
    }),
    [t]
  )
}
