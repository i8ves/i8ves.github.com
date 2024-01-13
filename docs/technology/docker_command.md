# Docker 常用命令以及常用软件的安装

## docker 安装与启动

- 安装 docker: `yum install docker-ce docker-ce-cli containerd.io`
- 启动 docker: `systemctl start docker`
- 设置 docker 开机启动: `systemctl enable docker`

## mariadb 安装与启动

- 安装 mariadb：`docker pull mariadb`
- 启动 mariadb:

```
  docker run
  --name [my-mariadb]
  -p [3036:3306]
  -e MYSQL_ROOT_PASSWORD=[root123456]
  -v [/data/mariadb-data:/var/lib/mysql]
  -d [mariadb:10.11.5]
  ```
