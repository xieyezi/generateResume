# resume Dockerfile

#设置基础镜像
FROM nginx;
#设置作者信息
MAINTAINER www.xieyezi.xyz;
#设置容器工作目录
WORKDIR /app

#将当前所有文件拷贝至容器/app目录下
COPY . /app
# #将项目中的nginx.conf文件拷贝至容器内的nginx.conf文件作为配置文件
# COPY nginx.conf /app/

#进入容器之后执行如下命令
RUN npm config set registry "https://registry.npm.taobao.org/" \
    ; npm install \
    ; npm run build \ 

#EXPOSE 暴露端口
EXPOSE 80