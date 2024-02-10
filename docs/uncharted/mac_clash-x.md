# 在 Mac 的终端中走 ClashX 网络代理

> Clash 系列的开源仓库已将被作者给删除了，原因不详。

- 在软件开发过程中，需要通过一些墙外的仓库中心安装一些依赖。
- 启动代理之后需要设置终端也走代理。
- 验证终端命令是否通过代理，执行命令：`curl cip.cc`或者`curl ipinfo.io/json`。

- 在终端中执行命令：

```shell
# 这种方法只在当前窗口有效，新建的窗口或者关闭后打开将无效。
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

- 执行命令(编辑`～/.zshrc`文件)：`vi ~/.zshrc`
- 将以下内容追加到文件中：

```shell
# 设置终端命令通过系统代理
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890

# 执行命令(使其生效)
source ~/.zshrc
```