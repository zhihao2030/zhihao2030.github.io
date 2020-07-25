const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
  title: "Zzh’s blog",
  description: '莫听穿林打叶声，何妨吟啸且徐行。',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  //主题配置文件
  themeConfig: {
    nextLinks: true,
    prevLinks: true,
         mode: 'dark', 
    modePicker: true,
  
    nav: [ 
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时空机', link: '/timeline/', icon: 'reco-date' },
      { text: '推荐', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/zhihao2030', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '',
        desc: '',
        email: '',
        link: ''
      },
      {
        title: '',
        desc: '待定.',
        avatar: "",
        link: ''
      },
    ],
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '更新时间',
    // 作者
    author: 'zzh',
    // 作者头像
    authorAvatar: 'https://s.gravatar.com/avatar/dabf73056918d6940a7ad3174e166a44?s=80',
    // 备案号
    record: '',
    // 项目开始时间
    //startYear: '2020'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

     valineConfig: {
       appId: 'Pf0Ii5KWLdLIuIY3jVAmKRT6-gzGzoHsz',// your appId
      appKey: 'PSEnFRrzGB2aKHoApVbxLQAB', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },

  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  },

plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-4H800SD2DB' // UA-00000000-0
      }
    ]
  ],



  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // Don't forget to install moment yourself
         
         
          return moment(timestamp).format("YYYY-MM-DD H:mm:ss")
        }
      }
    ]
  ]

}


