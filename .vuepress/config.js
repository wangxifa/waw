module.exports = {
  title: "汪啊汪",
  description: "为中华之崛起而读书。",
  dest: "public",
  base: "/waw/", // 不是github相关配置
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/wangxifa",
            icon: "reco-github"
          }
        ]
      }
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"]
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category" // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: "汪啊汪",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1007026946@qq.com",
        link: "https://juejin.cn/user/1415826707841437"
      }
    ],
    // logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "清风",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    // record: "xxxx",
    // 项目开始时间
    startYear: "2020",
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
      appId: "0lL4sdJExOX7DwWDmkQxNEBL-gzGzoHsz", // your appId
      appKey: "eqc3pTcyDBceqs4cbEW2QHwI" // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    ["@vuepress/active-header-links"],
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: ""
      }
    ]
    // [
    //   "@vuepress-reco/vuepress-plugin-bgm-player",
    //   {
    //     autoShrink: true,
    //     shrinkMode: "mini",
    //     position: {
    //       position: "fixed",
    //       right: "0px",
    //       top: "200px",
    //       opacity: "0.9",
    //       zIndex: 99999
    //     },
    //     floatStyle: {
    //       pointerEvents: "none",
    //       cursor: "default"
    //     },
    //     audios: [
    //       // 网络文件示例
    //       {
    //         name: "강남역 4번 출구",
    //         artist: "清风",
    //         url: "https://assets.smallsunnyfox.com/music/2.mp3",
    //         cover: "https://assets.smallsunnyfox.com/music/2.jpg"
    //       },
    //       {
    //         name: "用胳膊当枕头",
    //         artist: "清风",
    //         url: "https://assets.smallsunnyfox.com/music/3.mp3",
    //         cover: "https://assets.smallsunnyfox.com/music/3.jpg"
    //       }
    //     ]
    //   }
    // ]
  ]
};
