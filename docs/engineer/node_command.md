# Node 常用命令和常用组件

#### Node 清空缓存

```
npm cache clean -f
npm cache verify
```

## PM2 相关命令

- 启动服务器：`pm2 start npm --name '项目名' -- run start`
- 查看运行状态：`pm2 list`
- 查看日志：`pm2 logs`
- 启动应用：`pm2 start id`
- 停止应用：`pm2 stop name`
- 删除应用：`pm2 delete name`
- 重启应用：`pm2 restart name`
- 重置重启次数：`pm2 reset xx`



