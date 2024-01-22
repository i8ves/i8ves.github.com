export const sidebarZh = [
    {
        text: '使用技巧', collapsible: false, link: '/usage-tips/_usage-tips.md',
        children: [
            {text: '在 Mac 的终端中走 ClashX 代理', link: '/usage-tips/clash-x_in_mac.md', children: []},
            {text: '在Git项目中使用代理的配置指南', link: '/usage-tips/git_use_proxy.md', children: []},
            {text: 'idea 在 Mac 中的快捷键', link: '/usage-tips/idea-in-mac-shortcut-keys.md', children: []},
            {text: '在win10/11中使用旧版图片查看器', link: '/usage-tips/win10_11-photo-viewer.md', children: []},
        ],
    },
    {
        text: '技术开发', link: '/technology/_technology.md',
        children: [
            {text: 'Linux 常用命令', link: '/technology/linux_command.md'},
            {text: 'Linux 查找文件内容', link: '/technology/linux_find-file-content_command.md'},
            {text: 'Docker 常用命令及示例', link: '/technology/docker_command.md'},
            {text: 'Nginx 常用命令及配置', link: '/technology/nginx_command.md'},
            {text: 'Node 常用命令及组件', link: '/technology/node_command.md'},
            {text: 'Python 的一些知识', link: '/technology/python_command.md'},
        ]
    },
    {
        text: 'Java 基础', collapsible: true, // link: '/java-base/_java-base.md',
        children: [
            {text: 'Java 线程池', link: '/java-base/thread-pool.md',},
            {text: 'OkHTTP 常见用法', link: '/java-base/okhttp.md',},
        ],
    },

    {
        text: 'Spring系列', collapsible: false, link: '/spring/_spring.md',
        children: [
            {text: '搭建 SpringBoot Web 项目', link: '/spring/spring_boot_project_build.md',},
            {text: 'Spring Data JPA 中的 Auditing', link: '/spring/spring_data_jpa_auditing.md',},
        ],
    },
    {text: '网址导航', link: '/navigation'},
    //
]