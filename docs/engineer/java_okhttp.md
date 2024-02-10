# OkHTTP 基础说明

OkHttp 是一个用于在 Java 中进行 HTTP 请求的开源库。`okhttp3` 是 OkHttp 的第三个版本，它提供了一个简单、高效、灵活的 API，使得发送 HTTP 请求和处理响应变得更加容易。下面是对
OkHttp3 的详细讲解：

### 1. **引入 OkHttp3**

首先，你需要在项目中引入 OkHttp3 依赖。可以使用 Maven、Gradle 等构建工具，以下是使用 Maven 的示例：

```xml

<dependency>
    <groupId>com.squareup.okhttp3</groupId>
    <artifactId>okhttp</artifactId>
    <version>3.x.x</version>
</dependency>
```

### 2. **创建 OkHttpClient 实例**

在使用 OkHttp3 之前，需要创建一个 `OkHttpClient` 实例。`OkHttpClient` 是 OkHttp 的主要入口，负责配置和处理 HTTP 请求。

```java
import okhttp3.OkHttpClient;

OkHttpClient client = new OkHttpClient();
```

### 3. **创建 HTTP 请求**

使用 `Request` 类来创建 HTTP 请求。你可以设置 URL、请求头、请求体等信息。

```java
import okhttp3.Request;

Request request = new Request.Builder()
    .url("https://api.example.com/data")
    .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
    .get()
    .build();
```

### 4. **发送同步请求**

使用 `client.newCall(request).execute()` 来发送同步请求，这将阻塞当前线程直到请求完成。

```java
import okhttp3.Response;
import okhttp3.ResponseBody;

try (Response response = client.newCall(request).execute()) {
    if (response.isSuccessful()) {
        ResponseBody responseBody = response.body();
        if (responseBody != null) {
            String responseData = responseBody.string();
            System.out.println(responseData);
        }
    } else {
        System.out.println("Request failed: " + response.code());
    }
}
```

### 5. **发送异步请求**

如果你不希望阻塞当前线程，可以使用异步请求。通过实现 `Callback` 接口，定义请求成功和失败时的回调逻辑。

```java
import okhttp3.Call;
import okhttp3.Callback;

client.newCall(request).enqueue(new Callback() {
    @Override
    public void onResponse(Call call, Response response) {
        if (response.isSuccessful()) {
            ResponseBody responseBody = response.body();
            if (responseBody != null) {
                String responseData = responseBody.string();
                System.out.println(responseData);
            }
        } else {
            System.out.println("Request failed: " + response.code());
        }
    }

    @Override
    public void onFailure(Call call, IOException e) {
        System.out.println("Request failed: " + e.getMessage());
    }
});
```

### 6. **POST 请求**

如果需要发送 POST 请求，可以通过 `post()` 方法设置请求体。

```java
import okhttp3.MediaType;
import okhttp3.RequestBody;

// JSON 请求体
String jsonBody = "{\"key\":\"value\"}";
RequestBody requestBody = RequestBody.create(MediaType.parse("application/json"), jsonBody);

Request postRequest = new Request.Builder()
    .url("https://api.example.com/data")
    .post(requestBody)
    .build();
```

这只是 OkHttp3 的基本用法。OkHttp3 提供了很多功能，如拦截器、连接池、超时、缓存等，可以根据具体需求进行更高级的配置和使用。详细信息可以参考 OkHttp
的官方文档：[OkHttp Documentation](https://square.github.io/okhttp/)。