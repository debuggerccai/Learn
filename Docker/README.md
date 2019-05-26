### 什么是 Docker ？

Docker 是一个开源的应用容器引擎，基于 [Go 语言](https://www.runoob.com/go/go-tutorial.html) 并遵从Apache2.0协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

#### 认识容器 container

>

####认识镜像 image

>

---

### Dockerfile

| 命令       | 用途         |
| :--------- | ------------ |
| FROM       | base image   |
| RUN        | 执行命令     |
| ADD        | 添加文件     |
| COPY       | 拷贝文件     |
| CMD        | 执行命令     |
| EXPOSE     | 暴露端口     |
| WORKDIR    | 指定路径     |
| MAINTAINER | 维护者       |
| ENV        | 设定环境变量 |
| ENTRYPOINT | 容器入口     |
| USER       | 指定用户     |
| VOLUME     | mount point  |


### Docker 命令

| 命令          | 用途                              |
| ------------- | --------------------------------- |
| docker pull   | 获取 iamge                        |
| docker  build | 创建 iamge                        |
| docker images | 列出 iamges                       |
| docker run    | 运行 container                    |
| docker ps     | 列出 container                    |
| docker rm     | 删除 container                    |
| docker rmi    | 删除 image                        |
| docker cp     | 在 host 和 container 之间拷贝文件 |
| docker commit | 保存改动为新的 image              |

---

### 进阶 Docker Compose

>Compose is a tool for defining and running multi-container Docker applications.

