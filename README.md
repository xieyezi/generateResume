# resume

## docker学习笔记

  这个项目我准备用docker来部署，所以会涉及到docker的相关知识。以下为docker的学习笔记。
### image文件
  1. docker把应用程序及其依赖，打包在image文件里面
  2. image文件可以看做是容器的模板，docker根据image文件生成容器的实例
  3. 同一个image文件，可以生成多个同时运行的模板
  4. `docker image pull` 是抓取image文件的命令 (eg: `docker image pull hello-world`)
  5. 使用`docker image ls`查看本机下面的已有的docker image文件
  6. 运行image文件:`docker container run hello-world`,该命令会从image文件，生成一个正在运行的容器实例
  7. 终止正在运行的容器: `docker container kill [containID]`

### 容器文件
   1. 容器文件指的是image文件生成的容器实例
   2. 关闭容器不会删除容器，只会停止运行
   3. 查看本机正在运行的容器: `docker container ls`
   4. 查看本机所有的容器(运行和非运行): `docker container ls --all`
   5. 删除容器: `docker container rm [containerID]`

### Dcokerfile文件

  用来配置image 的文本文件。 Docker会根据该文件生成二进制的image文件。
  写Dockerfile文件的步骤:
  1. 先clone自己的项目: `git clone xxxx`;
  2. 在项目的根目录下，新建一个文本文件:`.dockerignore`:
  ```
  .git
   node_modules
   npm-debug.log
  ```
   该文件会排除以上的三个路径下的文件，告诉docker不要将这三个打包到image文件。


  3. 在项目的根目录下，新建一个文本文件`Dockerfile`:
  ```
    FROM node:8.4       //指定node的版本
    COPY . /app        //将当前目录下的所有文件，都拷贝至iamge文件的/app目录
    WORKDIR /app       // 指定接下来的工作路径为/app
    RUN npm install --registry=https://registry.npm.taobao.org  // 在/app目录下，运行npm intall 安装项目依赖，这些依赖都会被打包进image文件
    EXPOSE 3000        //将容器的3000端口暴露出来，允许外部连接
  ```
### 创建image文件
  有了Dockerfile文件之后，就可以使用 `docker iamge build` 命令来创建image文件了。
  创建命令:
  ```
  docker image build -t [imageName] .
  ```
  或者:
  ```
  docker image build -t [imageName]:0.0.1 .
  ```
  `-t` 指定文件image文件的名字， 最后那个点则是Dockerfile文件所在的路径，还可以使用`:`来指定标签
  执行完成之后，查看当前image文件: `docker image ls`

### 生成容器
   `docker container run ` 命令会从image文件生成容器:
   ```
    docker container run -p 8000:3000 -it [iamgeName] /bin/bash
   ```
   或者:
   ```
    docker container run -p 8000:3000 -it [iamgeName]:0.0.1 /bin/bash
   ```
   `-p`参数: 容器的3000端口映射到本机的8000端口   

   `-it`参数: 容器的Shell映射到当前的Shell，然后你在本机窗口输入的命令，就会传入到容器    
   
   `/bin/bash`参数: 容器启动以后，内部第一个执行的命令，这里是启动Bash，保证用户可以使用Shell
   当跑完这些命令的时候，会返回一个命令行提示符，然后就可以在里面执行命令了
### 其他有用的命令
  （1）`docker container start`   


    前面的docker container run命令是新建容器，每运行一次，就会新建一个容器。同样的命令运行两次，就会生成两个一模一样的容器文件。如果希望重复使用容器，就要使用docker container start命令，它用来启动已经生成、已经停止运行的容器文件:
      
      
    ```
    docker container start [containerID]
    ```
（2）`docker container stop`

   前面的docker container kill命令终止容器运行，相当于向容器里面的主进程发出 SIGKILL 信号。而docker container stop命令也是用来终止容器运行，相当于向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号。 
   ```
   bash container stop [containerID]
   ```
   这两个信号的差别是，应用程序收到 SIGTERM 信号以后，可以自行进行收尾清理工作，但也可以不理会这个信号。如果收到 SIGKILL 信号，就会强行立即终止，那些正在进行中的操作会全部丢失。

（3）`docker container logs`

   `docker container logs` 命令用来查看 docker 容器的输出，即容器里面 Shell 的标准输出。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令查看输出。
    ```
    docker container logs [containerID]
    ```
（4）`docker container exec`

    `docker container exec` 命令用于进入一个正在运行的 docker 容器。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了。
     ```
     docker container exec -it [containerID] /bin/bash
     ```
（5）`docker container cp`

     `docker container cp` 命令用于从正在运行的 Docker 容器里面，将文件拷贝到本机。下面是拷贝到当前目录的写法。
     ```
     docker container cp [containID]:[/path/to/file] 
     ```
