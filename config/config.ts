import { defineConfig } from "umi";

export default defineConfig({
    // 标题
    title: '智能报表',

    // 主题
    theme: { '@primary-color': '#1DA57A' },

    // 数据流
    plugins: [
        '@umijs/plugins/dist/initial-state',

        // 开启状态管理
        '@umijs/plugins/dist/model',

        // 开启 antd 组件库
        '@umijs/plugins/dist/antd',
    ],
    initialState: {},
    model: {},

    targets: {
        ie: 11,
    },

    // 路由
    history:{type:'hash'},
    hash: true,

    // 国际化
    // locale: {
    //     default: 'zh-CN',
    // },

    // 本地代理
    proxy: {
        '/api': {
          'target': 'http://oa-beta.6du.cn/',
          'changeOrigin': true,
        }
    },

    manifest: {
        basePath: '/',
    },


    routes: [
        { path: "/", component: "index" },
        { path: "/docs", component: "docs" },
    ],
    npmClient: 'yarn',


    // 模板配置
    // 设置网页 meta 标签
    metas: [ 
        {
            name: 'keywords',
            content: '智能报表',
        },
        {
            name: 'description',
            content: 'A UmiJS project',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
    ],
    // 设置 head 中的 JavaScript 脚本
    headScripts: [ 
        {
            src: 'https://static-beta.6du.cn/public/contact_relate_v1.0/contact.relate.js',
            defer: true,
        },
    ],
    // 设置网页链接
    links: [ 
        {
            rel: 'stylesheet',
            href: '/iconfonts/iconfont.css',
        },
        {
            rel: 'stylesheet',
            href: '/static/dark.css',
            id: "darkTheme",
            disabled: "disabled"
        },
    ],
});