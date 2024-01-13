import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

import {navbarZh} from "./config/navbar";
import {sidebarZh} from './config/sidebar'

// 默认主题配置
const mDefaultTheme = {
    logo: '/favicon.ico',
    navbar: navbarZh,
    // sidebarDepth: 4, /*h2, h3, h4, h5*/
    sidebar: sidebarZh,
    // page meta
    lastUpdatedText: '更新时间',
    contributorsText: '参与贡献',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接',],
    backToHome: '返回首页',
}

export default defineUserConfig({
    lang: 'zh-CN',
    title: '亿念博客',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    description: '亿念成魔，亿念成佛！',

    bundler: viteBundler(),
    theme: defaultTheme(mDefaultTheme),

    // markdown: {
    //     // headers: {level: [2, 3, 4]},
    //     // toc: {level: [2, 3, 4]},
    // },
    plugins: [],
})