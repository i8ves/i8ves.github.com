import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "亿念",
    description: "亿念成魔，亿念成佛！",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '网址首页', link: '/'},
            {text: 'AI&设计', link: '/'},
            {text: '软件开发', link: '/engineer/mac_dev-env'},
            {text: '其它文章', link: '/uncharted/mac_clash-x'},
            {text: '公网导航', link: '/navigation'},
            {text: '关于本站', link: '/about'},
        ],

        sidebar: [
            {
                text: '软件开发',
                items: [
                    {text: 'Docker 中的常见命令', link: '/engineer/docker_command.md'},
                    {text: 'Git 在本项目中走 Proxy', link: '/engineer/git_use_proxy.md'},

                    {text: 'Java 中 Okhttp 的基本知识', link: '/engineer/java_okhttp.md'},
                    {text: 'Java 中 ThreadPool 基本知识', link: '/engineer/java_thread-pool.md'},

                    {text: 'Linux 中的常见命令', link: '/engineer/linux_command.md'},
                    {text: 'Linux 中查找文件', link: '/engineer/linux_find-file_command.md'},

                    {text: 'Mac 中搭建 DEV 环境', link: '/engineer/mac_dev-env.md'},
                    {text: 'Mac 中 idea 的常用快捷键', link: '/engineer/mac_idea_shortcut-keys.md'},

                    {text: 'Nginx 中的常用命令', link: '/engineer/nginx_command.md'},
                    {text: 'Node 中的常用命令', link: '/engineer/node_command.md'},
                    {text: 'Python 中的常用命令', link: '/engineer/python_command.md'},

                    {text: 'SpringBoot 项目搭建', link: '/engineer/spring-boot_project-build.md'},
                    {text: 'SpringDataJpa 中的 Auditing', link: '/engineer/spring-data-jpa_auditing.md'},
                ]
            },

            {
                text: '其它文章',
                items: [
                    {text: 'Mac 在终端中走 Proxy', link: '/uncharted/mac_clash-x'},
                    {text: 'Win10/11 使用旧版图片查看器', link: '/uncharted/win10_11-photo-viewer.md'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
