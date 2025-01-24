import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', icon: 'icon-park-outline:home' , link: '/'  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-two',
    items: [
      { text: '官网', icon: 'icon-park-outline:home' , link: 'https://kuke.ink' },
      { text: '在线玩家列表', icon: 'material-symbols:patient-list' , link: 'https://kuke.ink/player.html' },
      { text: '运行状态监控', icon: 'material-symbols:monitor-heart-outline' , link: 'https://status.kuke.ink' },
      { text: '玩家封禁名单', icon: 'material-symbols:patient-list' , link: 'https://kuke.ink/banlist.html' },
    ]
  },
])
