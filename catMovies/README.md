
## 电影管理系统

### 概述：

服务器端：提供API接口

客户端：ajax请求接口获得数据，使用数据渲染页面

### 可能使用的技术

服务器端： ts + express + mongodb + class-validator + class-transformer

客户端： ts + react全家桶(react + redux + antd)

### 开发顺序

1. 服务器端

使用postman测试

2. 客户端

---


### 服务器开发环境搭建

服务器端(server):
在server文件夹下

```
yarn init -y
```

```
tsc --init
```

```
 yarn add @types/node -D
```

---

### 使用tslint进行代码风格检查

跟eslint相似，是用于检查代码风格的

安装tslint
```
yarn add -D tslint typescript
```

生成配置文件tslint.json,全局安装用tslint --init 局部安装npx tslint --init

安装插件tslint有星星那个就是

---
### 开发Movie实体类


安装class-validator
```
yarn add class-validator
```


---
### 处理plainobect的转换

安装 class=transformer

```
 yarn add class-transformer
```

安装reflect-metadata

```
yarn add reflect-metadata
```



---
### 定义数据库模型

数据库：mongodb（官方）

数据库驱动：mongodb、mongoose(根据mongodb优化功能，好用的多)

以上两个数据库对TS支持不是太好，有些地方会缺失对类型检查

其他的数据库驱动：
typeorm :完全使用ts编写的，基于类，很遗憾的是，对关系型mongodb支持不好

安装mongoose

```
yarn add mongoose
```
导入声明文件

```
yarn add @types/mongoose -D
```


---
使用postman测试
### 增删改查功能

- 增
 1. 转换类型
 2. 数据验证
 3. 添加到数据库

- 改
 1. 转换类型
 2. 数据验证
 3. 修改到数据库
 
- 删
直接删除对应id值即可

- 查
转入一个id值查询对应电影

---

### 按条件查询电影

page limit key 值搜索电影

---
### 完成api接口

安装express

```
yarn add express
```

安装espress类型库

```
yarn -D add @types/express
```


---
### 完成图片上传接口

#####  文件上传
1. 通常情况下，服务器会提供一个统一的API接口，用于处理上传的文件
2. 客户端会使用post请求，请求服务器

content-type: multipart/form-data; 

3. 服务器如何得到上传的文件

使用express的中间件：multer

安装multer

```
yarn add multer 
```
安装multer类型库

```
yarn add -D @types/multer
```

问题：
- 如何设置上传的文件后缀名(根据客户端的文件后缀名决定)
- 如何限制文件的上传尺寸(大小)
- 如何限制文件的后缀名
- 当发生错误时，如何响应给客户端；正确时，如何响应！

正确：响应文件的路径

错误： 响应错误的消息

---
### 客户端

### 搭建客户端工程并完成ajax请求

客户端： ts + react全家桶(react + redux + antd)
react脚手架：create-react-app nextjs umijs

安装脚手架

```
create-react-app client --typescript
```
```
yarn add axios
```

1. 先开发客户端的api请求功能

有的时候，服务器和客户端会共用一个类型，如果要处理此处的重复代码问题，最佳做法是自行使用webpack搭建工程

客户端端口：3001，请求/api/movie,最终请求的地址：http://localhost:3001/api/movie使用使用代理模式，在package.json代理  "proxy": "http://localhost:3000"


---
### 创建reducer和action

1. 界面
2. 路由
3. redux 状态管理 大型项目使用，是可选的

action:平面对象 ，plain object,它描述了数据变化的方式
reducer: 数据变化的具体内容
store: 存储数据的仓库

安装redux

```
 yarn add redux
```

---
### 创建仓库

安装中间件redux-logger

```
yarn add redux-logger
```

```
yarn add -D @types/redux-logger
```

---
### 用thunk处理异步副作用
副作用： redux-thunk redux-saga、dva、umijs

安装redux-thunk

```
yarn add redux-thunk
```



---
### 添加路由功能

安装路由

```
yarn add react-router react-router-dom
```

升级
```
yarn upgrade core-js
```
安装路由类型库

```
yarn add -D @types/react-router @types/react-router-dom
```


---
### 制作布局

antd: UI库

安装antd库
```
yarn add antd
```
升级

```
yarn upgrade core-js
```


---
### 制作电影表格组件

安装react-redux库
```
yarn add react-redux
```
安装类型库

```
yarn add -D @types/react-redux
```


---
### 制作上传组件

---
### 制作电影表单组件

---
### 制作修改电影页面

---
### 项目打包

安装

```
yarn add  connect-history-api-fallback
```

安装类型库

```
yarn add --save @types/connect-history-api-fallback
```

