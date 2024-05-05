import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Blog - WengX',
  cleanUrls: true,
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/refactorCode/exit-loop' },
    ],

    sidebar: [
      {
        text: 'Refactor code',
        items: [
          { text: '退出顶层循环', link: '/refactorCode/exit-loop' },
          { text: '返回匹配的字符串', link: '/refactorCode/return-matching-string' },
          { text: 'if 中相同变量的判断', link: '/refactorCode/if-judgment' },
        ],
      },
      {
        text: 'JavaScript',
        items: [
          { text: '添加事件的注意事项', link: '/js/add-event' },
          { text: '文件上传进度条功能', link: '/js/upload-progress' },
        ],
      },
      {
        text: 'uni-app',
        items: [
          { text: '踩坑集', link: '/uniApp/development-pitfalls' },
          { text: '实现加载资源等待页面功能', link: '/uniApp/load-resources' },
        ],
      },
      {
        text: 'Utils',
        items: [{ text: '策略模式实现 验证器', link: '/utils/validator' }],
      },
      {
        text: 'Vue',
        items: [{ text: '判断 slots 是否传入', link: '/vue/slots' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/iwengx' }],

    search: {
      provider: 'local',
    },

    footer: {
      copyright: 'Copyright © 2022-present WengX',
    },
  },
})