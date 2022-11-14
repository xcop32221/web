# DAY1

# 1. React概念

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



# 2. React使用

写的不是JS，是写的JSX，在JS上提出一些要求和语法

## 1.React核心库：

1.核心库 react.development.js 引入React对象

2.虚拟DOM库 react-dom.develoment.js 引入ReactDom对象



## 2.React三大API:

页面只有一个root元素，其他都用React来管

#### **React.creatElement():**

```js
const button=React.creatElement('button',{props},'点我一下')
```

作用：用于创建一个React元素

替代了所有的dom方法

参数：

​	1.元素的名称(html标签必须小写)

​	2props标签中的属性：

​		class属性需要使用className来设置

​		设置事件时，属性名需要修改为驼峰命名

​	3.元素的内容(子元素)

注意点：

​	1.React元素最终会通过虚拟DOM转换为真实的DOM元素

​	2.React元素一旦创建就无法修改，只能通过新创建的元素进行替换（React里就没有修改这个事情）

​	



### ReactDOM.createRoot()

```js
const root=ReactDOM.createRoot(dom元素)
```

作用：用于创建一个React根元素

参数：页面上的一个dom元素



### render()

```js
root.render(button)
```

作用：用虚拟DOM去渲染根元素（虚拟DOM方法）

注意点：

1.当重复调用render渲染时，React会自动进行比较两次渲染的元素，只在真实DOM中更新发生变化的部分(diffing算法)

2。根元素中所有的内容都会被删除，被React元素替换
















