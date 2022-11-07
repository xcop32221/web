# DAY1

## 服务器：

角色特殊的计算机，一种管理计算资源的计算机：

1.IO 2.业务 3.运维

服务器什么时候返回是不确定的

服务端的数据不可信/不可信信道上传输可信数据

后端会提供接口文档

### B/S架构：

浏览器-----数据传输----------服务器



cdn：把代码放在网站上



前后端交互：

BFF：前后端都写

RPC  ：不用接口了

GRAPHQL:给个接口，自己查询

### URL地址：

协议+域名+端口+资源地址

IP地址中：192.168是局域网掩码  127.0.0.1为本机内网网址



# Ajax(**A**synchronous **J**avascript **A**nd **X**ML)

异步的javescript+XML

Web数据交互方式，使用现有技术集合的‘新’方法

如果是同步JS，那么请求数据就要等到服务器返回数据后才开始后面操作，性能不好





#### XML:形如<tag arrtribute='name'>data</tag>

作用：被设计来传输和扩展数据的一种协议

定义：一定需要结束标签

HTML是特殊的XML



#### 异步JS:

任务不是同步进行，两个计算单元数据不一致

JS改JS的，html改html的，互不影响



## 浏览器原生Ajax api

### 1.XMLHttpRequest：通过HTTP协议利用XML来发送请求

优化：1.采用框架

​	    2.采用xhr的一些api

​	    3.封装函数

流程：

1.构建请求对象 **new XMLHTTPRequest（）**



2.构建请求回调函数(当请求成功后加入任务队列)  

异步JS：这里通过异步JS解决同步占用时间过长的问题，当请求成功后添加任务队列

**onreadystatechange事件**：

**HTTP状态码：xhr.status**            服务器返回回来的报文状态

100-199：传输信息

200-299：传输成功

300-399：重定向

400-499：浏览器响应错误

500-599：后端有问题

**请求状态码：xhr.readyState**     连接状态本身的状态

0：new

1：open

2：send

3：传输中

4：传输完成



lamda函数

闭包：函数会记住周边特定时刻的状态，不管之后如何改变其值不会改变

数据尽量在回调函数内部去拿

```js
const {readystate,status}=xhr
xhr.onreadystatechange=()=>{
  //4 200  1 0
  console.log(xhr.readyState,xhr.status,readyState,status)
})
```

#### XHR属性

1. responseText:：请求的数据原始格式,只有type是't'和默认时


2. responsetype：同一返回服务器返回给我们的数据类型 
3. response:请求的数据(需要和type一起用，一一对应：json—>object;text—>string)



3.打开请求：**open(method,url)**

方式：

1.GET：请求数据

在GET请求里面发数据：在url里面加 ？属性='数据'

2.POST：发送数据



4.设置请求头(设定和后端交互的规范): **setRequestHeader('content-type','application/json')**

告诉后端传递的数据是什么





5.发送请求: **send(发送的数据)**

发送数据：JSON.stringify(data) 这是是我们发送给服务器的数据格式

发送请求后，服务器会进行回复，这里去监听执行回调任务



### 获取表单数据

const formdata= new FormData(form dom元素)

方法：formdata.get(name属性)-->返回表单中的数据

想让formdata拿到数据就需要给input加name属性





### 2.fetch函数：工作中用法

语法糖，封装了promise

参数：1.url

​	    2.Api对象:{method:'GET'}

fetch() . then(执行的函数，参数：传入xhr的response) . then(执行的函数，参数：传入xhr的response)



css hsla(颜色，饱和度，明亮度)函数：色度值的表示方法 表示颜色

