## JSX

javaScrpt syntax extation

声明式编程，结果导向的编程



#### 定义：

1. 在React中可以通过JSX（JS扩展）来创建React元素，JSX需要被翻译为JS代码，才能被React执行
2. 要在React中使用JSX，必须引入babel来完成“翻译”工作
3. JSX就是React.createElement()的语法糖

#### 注意点：

1. JSX不是字符串，不要加引号

2. JSX中的html标签应该小写，React组件大写开头

3. JSX可以使用{}来嵌入表达式：网页中放入一些变量

   表达式是布尔类型，null，undefined这些值不会显示

   {}中不能放语句，但是其script块中可以

   数组作为内容时JSX会自动遍历数组

4. JSX中有且只有一个根标签(整体)

5. JSX中的标签必须是闭标签

6. JSX属性/事件可以直接在标签中设置

   注意：

   1. class需要className设置.

   2. style中需要传入对象表示.

      ​


#### 实际场景中：

1.尽量少在JSX中写逻辑，逻辑放在外面写；JSX中引入表达式就好了

2.显示一组数据，一定是通过遍历方式去实现的(map)

3.迭代生成的JSX，一定需要加key属性：

​	1. 当迭代的JSX位置不会发生变化的时候，那么可以使用数组的索引作为key

​	2.如果出现可能发生位置变化的JSX，可以用后端数据的id来设置key