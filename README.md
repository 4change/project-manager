# project-manager
## 运行
### 1.安装 MongoDB
```shell
docker run -d -p 27017:27017 --name my-mongo-container mongo
```
### 2. 运行
```shell
cd project-manager

# 切换 node 版本到 v16.20.0
nvm use v16.20.0

npm install yarn -g

npm install -g @nestjs/cli

# 安装依赖
npm install

# 启动项目
nest start
```