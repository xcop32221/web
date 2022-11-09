# DAY2



### fetch函数：工作中用法

合理的异步资源获取方式，不用自己管异步进程处理了什么操作

fetch一步完成xhr的构建，打开，设置，请求；fetch一调用就是send

参数：

1.url 

2.配置对象:method:'方式'，headers:{请求头对象}，body{传输值对象}

默认值：{  method:'GET'，

​		   headers：{'content-type':‘text/plain ’纯文本//applicaton/json'}

​		    body :undefined }

GET请求：直接fetch( url )



fetch之后两段then方法，如果要处理错误在后面加上catch

1. .then(func):等待一段时间(返回响应报文)后, 参数传给回调函数//返回数据解析工作(其中判断status和state)

   参数：响应报文的数据

2. .then(func): 等待一段时间(拿到response)后,参数传给回调函数//拿结果进行任务

   参数：第一段then的返回值

3. .catch(func):所有then回调里的错误，都会被catch捕获

   参数：错误类型



数据传输类型：大类型/小类型  

image/png

text/plain

application/json 

只有大类型：大类型/*

1.http报文的请求头中设置类型

2.input中的accpet属性



http请求头content-type类型：代表传输的数据类型



html表单元素：

input type=file 上传文件

文件输入事件：change 

input.files:整个文件列表  input.value:文件名

数据类型为文件时，content-type不需要设置



css hsla(颜色，饱和度，明亮度)函数：色度值的表示方法 表示颜色





## Promise

异步函数=>异步任务

回调地狱：嵌套层数深了很难发现变量冲突，丢失了封装性

只要是一个回调都能成为promise对象

**实例化promise**

传入一个参数为resolve函数和reject函数的回调



**Promise特点：**

.then表示一段时间以后



promise两个特点：

1.异步函数放在fetch函数外面

2.链式调用（优于xhr）《链式调用：.then().then()》

每个回调都放在then方法里面，每个then方法都可以返回fetch，每一段的返then的回调函数的返回值，都进入下一段的参数

链式调用：.then().then()

​	调用resolve和reject，他们的参数会成为第一个then的参数

​	1. 上一个.then(cb) cb的返回值，会成为下一个.then(cb2)cb2的参数

​	2. 如果then返回一个promise，下一个then获取的是promise的resolve，否则就是返回值







then中的异步函数只能访问上个异步函数的返回值；

嵌套异步函数能沿着作用域链一直向上访问

用then方法去形成作用域链，回调函数之间没有嵌套关系



axios：用于发送请求的API

浏览器封装xhr

node.js用http报文

当浏览器不支持适合需要axios



promise封装setTimeout

promise封装xhr

promise封装成一次性的获取inputfile的函数



1.reslove/rejiect是否在宏任务里执行

2.是否加在IO线程中



原理：函数当参数传递



把回调放在返回的then里面

//发布订阅模式

1.promise参数是个回调，这个回调的参数也是回调

2.then（）注册listener函数



返回一个结构被一直调用





外层函数随时去调用传入的参数函数

