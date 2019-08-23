<h1 align="center">generateResume</h1>
<br />
 <div align="center">
 <img src="https://img.shields.io/badge/-vue-green"/>
 <img src="https://img.shields.io/badge/download-pdf-orange"/>
 <img src="https://img.shields.io/badge/build-passing-brightgreen"/>
</div> 
<br />
<br />

   >灵感来自：[best-resume-ever](https://github.com/salomonelli/best-resume-ever)

   还在满网络找简历模板心力交瘁？不如试试自己动手，输入自己的个消息，即可得到几份优美的简历!  [迅速开始👉](http://www.xieyezi.com:8080/#/)


### 简历模板

  此处要放图片
<!-- <div align="center">
 <img src="https://img.shields.io/badge/-vue-green"/>
 <img src="https://img.shields.io/badge/download-pdf-orange"/>
 <img src="https://img.shields.io/badge/TypeScript-v3.5.2-orange"/>
</div>  -->

### 开发环境
   1. `vue` 实现前台功能;
   2. `vuex` 实现数据保存;
   3. `localstorage` 实现本地缓存;
   4. `element ui` 页面布局;
   5. `font-awesome` 实现字体和图标的加载;
   6. `webpack` 对项目进行打包
### 生产环境

   通过`docker`的`Dockerfile`文件制作为镜像，然后通过nginx来进行部署。   
   Dockerfile:
   ```docker
    # resum Dockerfile
    #指定node镜像对项目进行依赖安装和打包
    FROM node:10.16.0 AS builder
    # 将容器的工作目录设置为/app(当前目录，如果/app不存在，WORKDIR会创建/app文件夹)
    WORKDIR /app 
    COPY package.json /app/ 
    RUN npm config set registry "https://registry.npm.taobao.org/" \
        && npm install
    
    COPY . /app   
    RUN npm run build 

    #指定nginx配置项目，--from=builder 指的是从上一次 build 的结果中提取了编译结果(FROM node:alpine as builder)，即是把刚刚打包生成的dist放进nginx中
    FROM nginx
    COPY --from=builder app/dist /usr/share/nginx/html/
    COPY --from=builder app/nginx.conf /etc/nginx/nginx.conf


    #暴露容器80端口
    EXPOSE 80
   ```


### 目前的问题
   
  目前的下载功能是通过 `html2canvas`和 `jspdf` 这两个npm包。其实现的原理为:先通过`html2canvas`将html页面捕捉为图片，然后通过`jspdf`将图片复制到`pdf`上面去，由此得到我们的`pdf`文件，但是现在有一个很大的问题:生成的`pdf`太过模糊，目前不知道有什么更好的方法来解决这个问题。会持续寻找更好的方案。
