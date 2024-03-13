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

# 安装 yarn
npm install -g yarn

# 安装依赖
yarn

# 安装 nest
npm install -g @nestjs/cli

# 启动项目
nest start
```