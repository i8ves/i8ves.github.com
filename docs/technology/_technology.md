# 技术开发

## 在 Mac 中搭建开发环境(Java & Node)

#### 写在前面的话

**确定电脑 CPU 架构**
在终端中使用`arch`命令或者`uname -m`命令。

- `x86-64` 架构：`x86_64`
- `arm64` 架构：`arm64`(Mac), `aarch64`(Linux)
- 本文中默认`arm64`架构

**查看 MacOS 默认的 Shell**

- 在终端中执行命令：`which $SHELL`
- `/zsh`: `~/.zshrc`
- `bash`: `~/.bash_profile`
- 本文中默认`~/.zshrc`

#### 需要安装的清单

> 以下版本截止时间 2023 年 <br/>
> 关于版本的选择，个人习惯是选择最新的 LTS(长期维护版本) 进行安装。

**依赖安装**

- Java JDK LTS OpenJDK17
- Gradle7.x
- MariaDB LTS 10.11.6
- Node LTS & Yarn: Latest LTS Version: 20.11.0 (includes npm 10.2.4)

**工具安装**

- Homebrew 包管理工具(俗称野包管理器)
- Git 版本控制工具
- Jetbrains 下的 Idea、webstorm 需要购买正版或者激活(jetbra)

#### Java JDK LTS 的安装

- 我们选择安装 Azul Zulu Builds of OpenJDK。下载地址([官方下载](https://www.azul.com/downloads/#zulu))
- 选择 Java 17(LTS), Mac, ARM 64-bit, JDK
- 安装位置：`/Library/Java/JavaVirtualMachines/zulu-17.jdk`

#### Gradle 的安装

- 我们选择上一个大版本号的最新版本。下载地址([官方下载](https://gradle.org/releases/))
- 安装位置：`/opt/gradle-7.6.3`

#### MariaDB LTS 的安装

- 我们这里采用 homebrew 包管理安装方式进行安装，需要提前安装好 homebrew 包管理工具。
- 截止2023年12月08日，MariaDB 的长期支持版(LTS)最新版本是10.11.6。
- 由于 MariaDB 官方没有提供 MacOs 安装包，就直接使用 brew 进行安装。
- 参考资料：[查看 MariaDB 版本信息](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.11.6&os=source&m=xtom_hk), [官网安装教程](https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/)
- 安装步骤：

```shell
brew search mariadb # 查找软件包
brew install mariadb@10.11 # 安装指定包
brew services start mariadb@10.11 # 设置自启动
brew services info mariadb@10.11 # 检查运行状态
```

- 设置数据库密码(在终端中运行以下命令)：

```shell
mysql # 进入到 mariadb 控制台。
show databases; # 查看所有数据库。
use mysql; # 进入到 mysql 数据库。
show tables; # 查看所有数据表。
select User, Host, Password, Select_priv from user; # 查看 user 表中的部分数据。
set password for 'root'@'localhost'=password('root'); # 设置 root 用户的密码为 root。
exit; # 退出 mariadb 控制台。
mysql -uroot -proot # 进入 mariadb 控制台，以检验设置是否成功！
```

#### Node LTS 和 Yarn 的安装

- 我们直接在官网下载最新的LTS版本进行安装。下载地址([官方下载](https://nodejs.org/))
- 安装完成后在终端中执行命令`npm install --g yarn`安装`yarn`。可能会遇到权限不足的问题，使用`sudo`即可解决。

#### Homebrew 的安装

> Mac 上面的包管理工具有很多，Homebrew 只是其中一个。

- 我们直接安装官网的安装教程进行安装。官网地址(https://brew.sh/zh-cn/)
- 如果在中国大陆，官网的安装方式需要进行**科学上网**。
- 安装位置：`/opt/homebrew`
- 安装完成后在终端中执行命令`brew -v`查看 brew 版本号以便检验是否安装成功。
- 如果执行`brew -v`出现`brew：command not found`, 则需要配置环境变量。
- **配置 brew 环境变量**, 在终端中执行命令：

```shell
# 添加环境变量至 .zshrc
echo 'export PATH="/usr/local/bin:/usr/local/sbin:/opt/homebrew/bin:/opt/homebrew/sbin:$PATH"' >> ~/.zshrc
# 刷新环境变量
source ~/.zshrc
```

- 常用的`brew`命令有：

```shell
brew search xxx # 搜索软件
brew install xxx@v.v # 安装软件
brew uninstall xxx # 卸载软件
brew list # 查看列表
brew update # 更新brew
brew info # 查看信息
brew deps # 显示依赖
brew doctor # 查看状态
# 配置仓库：。。。
```

#### Git 版本工具的安装

- 在 Mac 中直接在终端中运行 git 命令，如果没有系统会自动进行安装的。
- 本文中在安装`homebrew`时安装了`xcode-tools`，而其中携带了 git 的安装。
- 在`～/.gitconfig`文件中填写以下内容, 完成 git 全局基础配置：
- `[http "https://github.com"]` 栏目是表示 github.com 通过本机的代理

```text
[user]
    name = Your Name
    email = you@example.com

[http "https://github.com"]
    proxy = http://127.0.0.1:7890
```

#### Jetbrains 的 Idea、webstorm 的激活(jetbra)

> 软件的安装就没什么好说的了，激活方面请购买正版。

- 激活工具：[热心大佬的的key](https://3.jetbra.in/)
- vmoptions 文件位置：`finder/应用程序/WebStorm.app(右键>显示包内容)/Contents/bin/webstorm.vmoptions`
- 注意：在更改配置文件前需要先打开一遍该软件，同时注意`/opt/jetbra`的文件夹路径
- 将以下内容添加到`xxx.vmoptions`文件中,

```text
-javaagent:/opt/jetbra/ja-netfilter.jar=jetbrains
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
```
