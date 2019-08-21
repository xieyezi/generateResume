# resum Dockerfile

#指定node镜像对项目进行依赖安装和打包
FROM node
COPY . /app/
RUN npm config set registry "https://registry.npm.taobao.org/" \
    npm install \
    npm run build \

#指定nginx配置项目，--from=0 指的是从上一次 build 的结果中提取了编译结果，即是把刚刚打包生成的dist放进nginx中
FROM nginx
COPY --from=0 /app/dist /app 
COPY --from=0 /app/nginx.conf /etc/nginx/nginx.conf
#暴露容器80端口
EXPOSE 80
#配置nginx前台运行
CMD ["nginx","-g","daemon off;"]