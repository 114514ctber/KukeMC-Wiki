import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '更多',
    icon: 'icon-park-outline:more-two',
    items: [
      { text: '在玩玩家列表', link: 'https://kuke.ink/player.html' },
      { text: '运行状态监控', link: 'https://status.kuke.ink' },
      { text: '玩家封禁名单', link: 'https://kuke.ink/banlist.html' },
    ]
  },
])
