# 搭建Spring Boot Web应用教程

## 步骤1：准备工作

确保你已经安装好Azul的OpenJDK。你可以从 [Azul官网](https://www.azul.com/downloads/) 下载并按照说明进行安装。

## 步骤2：创建Spring Boot项目

使用Spring Initializer创建一个新的Spring Boot项目。

访问 [Spring Initializer](https://start.spring.io/)，配置你的项目信息。

- 选择项目语言为Java。
- 选择Spring Boot版本。
- 填写Group、Artifact信息。
- 添加Web依赖（在Dependencies中搜索"web"并选择）。
- 在"Project"选项卡中，选择"Gradle"作为构建工具。

点击"Generate"按钮下载项目的压缩包。

## 步骤3：导入项目到IDE

将下载的项目压缩包解压，然后使用你喜欢的集成开发环境（IDE）导入项目。

在IntelliJ IDEA中，选择"File" -> "Open"，然后选择解压后的项目文件夹。

## 步骤4：创建一个简单的Controller

在`src/main/java/com/example/demo`目录下创建一个新的Java类，例如`HelloController.java`，并添加以下代码：

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

这是一个简单的RESTful API，当访问`/hello`时，会返回"Hello, Spring Boot!"。

## 步骤5：运行应用程序

使用IDE运行Spring Boot应用程序。在IntelliJ IDEA中，右键点击项目中的`DemoApplication`类，选择"Run 'DemoApplication'"。

等待应用程序启动，控制台会显示启动日志。

## 步骤6：访问API

打开浏览器或API测试工具，访问 `http://localhost:8080/hello` ，你应该能够看到返回的"Hello, Spring Boot!"。

至此，你已经成功搭建了一个简单的Spring Boot Web应用程序，使用了Gradle构建项目并使用Azul的OpenJDK。你可以根据需要添加更多的功能和页面，并进一步学习Spring
Boot的其他特性。祝你编码愉快！