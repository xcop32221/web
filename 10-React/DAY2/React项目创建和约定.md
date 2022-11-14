# DAY2

## React项目约定

当浏览器引入node管理的文件时，需要webpack打包

react-script包：测试框架，配置好的webpack包等

项目配置：约定优于配置

### **1.创建约定目录**

initial根目录

​	public：创建index.html:添加标签<div id="root"></div>：静态文件

​	scr:源码文件： 创建index.js：脚本入口文件		      

​       

### src文件结构：

项目主要使用的部分， 包含：组件文件，css样式表

#### index.js：

1.引入css样式表

2.引入APP组件文件

3.渲染root

#### App.js：

主要的功能在组件文件里面实现：定义一个APP.js文件用于组合其他大功能组件

#### index.css：

其中只包含外部容器所需要的样式

#### component directory：

1.该文件内根据大功能分成其他组件文件夹，用于存放小组件文件夹

可以再细分下去，拆分组件需要考虑：

​	1.功能复杂度

​	2.复用的可能性

2.小组件文件夹：样式表+组件文件(一一对应)

注意：组件文件中引入样式表（引入资源需要带路径，不然识别成模块）



### **2.安装依赖**

1.npm init -y

2.安装依赖库：npm install react react-dom raect-scripts -S

webpack：自动将index.js放入index.html

1.打包，部署到服务器

2.测试服务器，避免改一点就打包一次



npm管理的项目无法在网页上直接运行，需要webpack打包才能正常执行：

### **3.运行react项目**

//开发流程：

1.调用react-script包：npx react-scripts build打包(打包放在服务器运行)

2.出现bulid文件夹，webpack生成的；运行在网页中的就是该文件

3.如果没有部署到真正的服务器，应该用相对路径

json文件夹中可以简写命令



//测试流程

1.npx react-scripts start：运行测试服务器，不是运行bulid里的

2.相当于把代码编译在测试服务器运行

3.ctrl+c停止服务器



流程：测试成功后，打包build文件夹，放在服务器运行

