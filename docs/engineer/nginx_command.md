# Nginx 常用命令与配置

## 常用的 nginx 命令

- 启动命令：`systemctl stop nginx.service`
- 停止命令：`systemctl start nginx.service`

## 示例的 nginx 配置

```nginx
## www.example.com
server {
    listen       80;
    server_name  www.example.com example.com;
    gzip on; # 开启和关闭gzip模式
    gzip_min_length 1k; # gizp压缩起点，文件大于1k才进行压缩
    gzip_comp_level 6; # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
    #进行压缩的文件类型。
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json image/png image/gif image/jpeg;

    #nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
    #gzip_static on|off

    #是否在http header中添加Vary: Accept-Encoding，建议开启
    gzip_vary on;

    #设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区
    gzip_buffers 4 16k;

    #设置gzip压缩针对的HTTP协议版本
    #gzip_http_version 1.1;

    location / {
        proxy_pass   http://127.0.0.1:6200/;
        index  index.html index.htm;
    }

    location ^~ /restApi/ {
        proxy_pass   http://127.0.0.1:6062/;
    }

    location /static/ {
        alias  /home/static/;
        # 随机响应一个文件
        random_index on;
    }
}
```
