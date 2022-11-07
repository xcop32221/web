# DAY1

# React概念

定义：将数据渲染为HTML视图的JS库（数据-视图）

开发：Facebook开发且开源

原生缺点：

1.原生JS繁琐效率低（DOM-APi操作UI）

2.操作DOM会引起不断进行回流和重绘

3.原生JS没有组件化的编码方案，复用低（模块化：JS交互 /组件化：结构，样式，JS，音视频都拆）

React特点：声明式，组件化，RN原生应用，高效

1.采用组件化模式，声明式编码，提高开发效率和复用

声明式：通过语法，表达要做的事，React来做

命名式：得到节点-改变节点

2.在React Native中可以使用React语法进行移动端开发(编写安卓应用和IOS应用)

3.使用虚拟DOM+Diffing算法，尽量减少与真实DOM交互

原生JS操作DOM:采用innerHtml，每次数据更新，生成新的DOM丢去原来的DOM，重新再写一遍

React操作DOM：采用虚拟DOM,虚拟DOM去代理真实DOM，每次数据更新，去比较虚拟DOM差异，再去更新真实DOM



React高效原因：虚拟DOM+Diffing算法



# React使用

写的不是JS，是写的JSX，在JS上提出一些要求和语法

## 引入React：

1.核心库 react.development.js 引入React对象

2.虚拟DOM库 react-dom.develoment.js 引入ReactDom对象

3.引入翻译器bable：将jsx转换为js（在浏览器中引入bable很耗时，开发中需要开发者工具完成再引入,类比less）

4.使用script标签一定需要type属性为bable

## 使用React:

script中使用jsx来写：

1.需要一个容器（原生JS）

2.**创建虚拟DOM**

3.将虚拟DOM去渲染原生DOM



# 虚拟DOM

### 创建虚拟DOM:

1.JS创建虚拟DOM:一般不用

```js
const vdom=React.creatElement('标签'，{属性值},React.creatElement('标签'，{属性值}，'内容 '）
```

2.JSX创建虚拟DOM:采用React来创建虚拟dom的语法糖

（更加简单的创建虚拟dom）

```js
const vdom=<h1><span>hello,world</span></h1>
```



### 虚拟DOM定义:

**在JSX里面写的标签就是虚拟DOM**

1.虚拟DOM本质是Object类型的对象;真实DOM是HTMLDivElement类		     型对象

2.虚拟DOM比较轻，真实DOM比较重，因为虚拟DOM是react内部在用，无需真实DOM上那么多属性

3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上



### 渲染虚拟DOM:

ReactDOM.render(虚拟DOM,容器真实DOM)：

1.React解析该标签；

如果标签是大写字母开头是组件的话，就去找该组件；找不到就报错

2.React转换为真实DOM，去渲染页面

如果组件是函数定义，就去调用该函数，将返回的虚拟DOM转化为真实DOM



## 虚拟DOM中的JS表达式{}

表达式和语句不是一个概念

表达式：产生一个值，可以放在任何一个需要值的地方

定义一个变量去左边接，有值就是表达式

表达式：1.a 变量名

​		2.a+b !a a++

​		3.demo(1)

​		4.arr.map()

​		5.function(){}  new function()

语句：1.if(){}

​	    2.for(){}

​	    3.switch(){case:xxxx}

虚拟DOM里采用map去做遍历



### JSX(JavaScript XML)语法规则

1.类似于XML的JS拓展语法(直接写标签(虚拟DOM)能被翻译):

​      1.定义虚拟DOM时不要写''

      2.虚拟DOM混JS形式使用：{}

      3.样式的类名不要用class，要用className（避开关键字）

      4.内联样式：{{key：value}} JS形式的样式对象

      5.虚拟DOM中只能写一个根标签(父元素)

      6.标签必须闭合

      7.标签首字母:

        1.若小写字母开头，则将该标签转为html同名元素；若html无同名元素，则报错

        2.若大写字母开头，react去渲染对应的组件，若组件没有定义，则报错

2.通过bable翻译，且开启JS严格模式

严格模式中：禁止自定义的函数指向window(成为window的方法)，所以严格模式中的自定义函数this的值为undefined



# 模块与组件

## 模块：只拆JS

理解：一般一个.js文件就是一个模块

作用：复用js，简化js编写，提高js运行效率

## 模块化：

理解：当应用的js都以模块来编写，这个应用就是模块化应用



## 组件：结构样式动作都拆

理解：用来实现局部功能效果代码和资源的集合(html/css/img/video/...)

作用：复用组件

## 组件化：

当应用是以多组件的方式实现，这个应用就是一个组件化的应用





# React面向组件编程

项目经过打包然后服务器上线React dev打包才会亮才会

component:组件

Profiler:组件的性能



## 创建组件：

1.函数式组件

定义：声明一个函数：

1.首字母大写。

2.返回值一定需要有虚拟DOM



使用：render方法中，需要以标签形式传入组件



2.类式组件