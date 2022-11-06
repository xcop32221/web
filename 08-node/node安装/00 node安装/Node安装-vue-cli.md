#### 1. 安装node

[下载node](https://nodejs.org/zh-cn/download/) 

推荐



- windows  --> 使用 msi 安装包形式
- mac  -->  pkg 安装包形式

<img src=".\imgs\image-20220519005216034.png" alt="image-20220519005216034" style="zoom:50%;" />

#### 2. 进入安装界面

- 接受 accept ， 复选框勾上

![image-20220519005038136](.\imgs\image-20220519005038136.png)

- 默认配置， 一路next，直接点击

  ![image-20220519005345675](.\imgs\image-20220519005345675.png)



#### 3. 安装完后查看是否安装上

##### 1. 终端是什么

terminal ： 主要用于用户信息的输入以及处理结果的输出。

windows 打开终端的快捷方式： `win+R` 输入 cmd

![image-20220519024214816](.\imgs\image-20220519024214816.png)

终端中输入：

```js
node -v 
或者 
node --version  可以查看安装的node版本
```

#### 4. 安装docsify-cli

```js
npm i docsify-cli -g    // npm install docsify-cli --global
// npm i : npm install 命令的简写 ， 表示安装某个插件（JS库，模块）
// -g    :  --global的简写， 表示全局安装    
```

##### 1. 全局安装和本地安装的区别

```js
全局安装：`npm install xxx -g`  // global
本地安装：`npm install xxx`   // local
```

 **全局安装 :**  

- 表示把我们需要的依赖或者工具库 安装到 npm的node_modules目录下
  -  `C:\Users\电脑名字\AppData\Roaming\npm\node_modules` 
-  这样我们电脑上的任何项目都可以使用这个依赖或者工具 。

**本地安装 :**  

- 表示安装到我们**当前项目文件夹**中 ，即依赖会被下载安装到本地文件夹的`node_modules`中
- 这样安装的依赖就只有本地项目可以使用



- 查看通过npm全局安装的包（依赖，插件，库）

```bash
# 终端中执行
npm ls -g  // 会显示全局安装的包， 同时会显示包的所有依赖 （它又依赖哪些包）
npm ls -g --depth 0 // 只会查到安装的包
```

![image-20220519020935609](.\imgs\image-20220519020935609.png)



#### 5. cli 是什么？

- 安装docsify ， 首先我们会安装 docsify-cli
- 安装vue， 我们以后也会遇到 vue-cli
- 安装hexo,  第一步也是安装 hexo-cli 

那么， cli 是什么东东？

 CLI（command-line interface，[命令行界面](http://baike.baidu.com/view/5483485.htm)）是指可在用户提示符下键入可执行指令的界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。



简单理解：命令行界面，俗称脚手架。 可以解决一些重复性工作，比如创建项目，启动服务等。

通常来说 ：安装完某个cli， 就可以执行对应的命令  比如 docsify-cli 安装完后， 可以执行 docsify 命令



名词解释：

- 脚手架是为了保证各施工过程顺利进行而搭设的工作平台。

<img src=".\imgs\image-20220519015303860.png" alt="image-20220519015303860" style="zoom:50%;" />

##### 1. 扩展： [Vue-cli](https://cli.vuejs.org/zh/guide/installation.html)

vue ： 前端框架，非常重要，以后要学~~ 工作中就使用它， 什么bootstrap，jquery都一边儿去~~

```js
npm install -g @vue/cli
```

安装之后，你就可以在命令行中访问 `vue` 命令

```bash
# 查看vue-cli 版本， 注意不是vue版本，
vue --version
```

##### 2. **创建一个Vue的新项目**

```bash
vue create hello-world
# 创建一个名为hello-world的项目， 也就是创建了一个hello-world文件夹，里面会初始化很多vue的相关项目代码
```

![image-20220519021520795](.\imgs\image-20220519021520795.png)

1. 是否使用镜像地址来更快的安装依赖， 它说我们npm默认下载安装的那个地址，速度慢，是否要换一个地址。  Y

![image-20220519021857701](.\imgs\image-20220519021857701.png)

2.  预设置，问我们是要装vue3， 还是vue2  ， 可以使用上下箭头选着， 回车确认。 第三个是manually， 手动选择一些特性。

   1. 砸门直接上vue3 ,  看一看，溜达一圈试试。

   ![image-20220519022224156](.\imgs\image-20220519022224156.png)

   2.  这里回车确认后，安装一些插件，结束后，显示上面的样子。  
   3.  cd 进入hello-world这个文件夹   （cd 表示进入的意思 ：打开指定目录）
      1. 我们可以用vscode打开这个文件夹， 然后 `ctrl+J` 或者 **ctrl+`** 来打开vscode终端， 然后执行 npm run serve 
   4. `npm run serve`  表示启动一个服务，也就是我们本地可以启动一个vue项目了

   ![image-20220519023217989](.\imgs\image-20220519023217989.png)

   - ctrl按住点击鼠标左键，打开默认浏览器， 会显示vue的一个项目， 表示已经启动成功，也就是我们本地运行了一个vue的项目了

   ![image-20220519023650374](.\imgs\image-20220519023650374.png)

- package.json里面显示了vue的版本

![image-20220519023816514](.\imgs\image-20220519023816514.png)



#### 6. 报错处理

##### eg1.  执行 `docsify serve` 报错

- 安装完`docsify-cli`这个

![image-20220519012659292](.\imgs\image-20220519012659292.png)

```bash
docsify : 无法加载文件 C:\Users\99602\AppData\Roaming\npm\docsify.ps1，因为在此系统上禁止运行脚本。有关详细信
息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ docsify serve
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

- **权限问题**

  ![image-20220519013400492](.\imgs\image-20220519013400492.png)

1. 以管理员身份打开终端

2. 执行 `set-ExecutionPolicy RemoteSigned`
3. 如果有选项 ， 输入Y， 没有选项，如下，直接输入上面这一句，就配置好权限了。

![image-20220519013609663](.\imgs\image-20220519013609663.png)

4. 回到刚才的vscode中， 再次输入`docsify serve` , 发现已经可以运行，启动一个本地服务器了，端口 默认3000

![image-20220519013920964](.\imgs\image-20220519013920964.png)

##### eg2.  环境变量

- 右键我的电脑， 属性。

![image-20220519024743711](.\imgs\image-20220519024743711.png)

- 点击高级系统设置

![image-20220519024859503](.\imgs\image-20220519024859503.png)

- 点击环境变量

![image-20220519024928701](.\imgs\image-20220519024928701.png)

- 查看系统变量中是否有配置环境变量

![image-20220519025140292](.\imgs\image-20220519025140292.png)

##### eg3. 待补充

#### 7. hexo blog搭建

[hexo官网](https://hexo.io/zh-cn/)

##### 1. 安装hexo-cli脚手架

```bash
npm install hexo-cli -g
```

##### 2. 新建一个blog文件夹

- 通过终端打开进入这个目录

```bash
# 1. 执行下面的初始化 initial
hexo init
# 2. 执行npm install 安装hexo需要的一些依赖
npm install # 可以不执行？
```

##### 3. 启动hexo服务

```bash
hexo serve  # 可以简写为 hexo s
```

![image-20220519030515529](${imgs}/image-20220519030515529.png)