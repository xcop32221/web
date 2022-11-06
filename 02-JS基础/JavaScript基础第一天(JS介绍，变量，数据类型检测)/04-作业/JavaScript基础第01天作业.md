# 											每日作业-JavaScript第01天

# 一部分: 基础测验

## (1) 选择题

1. 下列定义的变量名中，不合法的是 ()

   ####  A： 2age

    B： newClass

    C： userName

    D： _age

2. 下列有关字符串变量定义正确的是（） 可以多选~~~  

   #### A： let strMsg = "我爱北京天安门"

   #### B： let  strMsg2 = '我爱吃猪蹄'

   C： let  strMsg3 = 我爱大肘子

   D： let  strMsg4 = '我是'高帅富'程序猿'

3. 下面那些是字面量？（） 可以多选

   #### A:  123

   #### B:  '大肘子'

   #### C:  ture    

   #### D:   []

   . JavaScript由以下哪几部分组成 (  )		 多选 


   A:  JScript

####    B:  ECMAScript

####    C:  DOM

####    D:  BOM

   E:  Object

5. 下面不属于JavaScript数据类型的是？ ( )

   A、number
   B、string
   C、boolean

   #### D、int

   E、undefined

6. 在js代码中，'123'+ 4 的运行结果是

   A:127

   #### B:'1234'  字符串型

   C:1234 数字型

   D:'123'4

7. 请选出下面正确的答案？（）

   A:  console.log(typeof '1')  // 返回结果是 number

   #### B:  console.log(typeof  ’1‘ + 1)  // 返回结果是 string1 

   C:  console.log( ’1‘ - 1)  // 返回结果是  11

   #### D:  console.log('pink' + 1)  // 返回结果是 string

8. 下列有关javascript变量命名说法错误的是

   A:变量名不能是关键字比如 let 、var、if 等

   B: 变量名是区分大小写的

   #### C:变量名可以由数字、字母、下划线、$组成，可以以数字开头

   D:变量名建议使用驼峰命名法

9. 请问  console.log(typeof  +'136') 输出的结果是？

    A： 136

   ####  B： number

    C： NaN

    D： string

10. 请问  console.log(NaN + 1) 输出的结果是？

   A:    1

   B： 报错

   #### C： NaN

   D： undefined

## (2) 今日单词

1.今日单词1： 请问页面文档输出的语句是？

A:prompt()

B:alert()

#### C: document.write()

D:console.log()

2.今日单词2： 请问控制台打印输出的语句是？

A:prompt()

B:alert()

C:document.write()

#### D:console.log()

3.今日单词3： 请问页面弹出警示框语句是？

A:prompt()

#### B: alert()

C: document.write()

D:console.log()



4.今日单词4： 请问页面弹出对话框语句是？

#### A: prompt()

B: alert()

C: document.write()

D: console.log()



5.今日单词5： 请问数据类型转换中，转换为数字型的语句是？

A:Number()

#### B:number()

C:String()

D:Boolean()



6.今日单词6： 请问检测数据类型的语句是？

A:type

B:Number()

#### C:typeof

D: script

7. 今日单词7： 请问定义常量的关键字是？

A: let

B: var

#### C:const

D: function

8. 今日单词8： 请问不能转换为数字型的是？

A: Number()

B:  parseInt()

C: parseFloat()

#### D:  Boolean()

E: + 

## (3) 简答题

1. 请说出变量的使用场景？

~~~
作为容器，存储各种类型数据
~~~

2. 请说出基本数据类型有哪5种？

~~~
1.number 2.string 3.Boolean 4.undefine 5.null
~~~

3. 请说出模板字符串使用方法？

~~~
使用${变量名}
~~~

4. 下面代码输入结果是？ （21，’1011‘，21） 

```javascript
   const  num = 10
   console.log( num + 11)
   console.log( num + '11')
   console.log( num +  +'11')
```

5. 下面代码输入结果是？ （number11,string,number）

```javascript
const  num = 10
console.log( typeof num + '11')
console.log( typeof (num + '11'))
console.log( typeof (num +  +'11'))
```





------



# 二部分: 编程题



## (1) 获取用户信息

- 题目描述

  依次询问并获取用户的姓名、年龄、性别，收集数据之后在控制台依次打印出来。

  具体表现如下图：

<img src="images/%E5%9B%BE%E7%89%871.png">

<img src="images/%E5%9B%BE%E7%89%874.png">

- 题目提示
  - 通过prompt来弹出提示框，收集用户信息
  - 通过变量保存数据



## (2) 增加年龄

- 题目描述

  1、询问用户年龄，用户输入年龄后，把用户输入的年龄增加5岁

  2、增加5岁后，通过弹出框提示用户 “ 据我估计，五年后，你可能XX岁了”

  <img src="images/%E5%9B%BE%E7%89%875.png">

  <img src="images/%E5%9B%BE%E7%89%876.png">

- 题目提示

  - 通过prompt来弹出提示框，收集用户信息
  - 通过变量保存数据
  - 转换数据类型(需要预习第二天的数据类型转换哟)



## (3) 计算银行卡余额案例

- 题目描述

  1、用户输入总的银行卡金额，依次输入本月花费的电费，水费，网费。

  2、页面打印一个表格，计算出本月银行卡还剩下的余额。

  <img src="images/111.gif">


- 题目提示

  - 思路：

    1.我们需要5个变量：银行卡总额、水费、电费、网费、银行卡余额

    2.银行卡余额= 银行卡总额 – 水费 –电费  - 网费  

    3.第一步准备5个变量接受输入的数据

    4.第二步计算银行卡余额 

    5.第三步页面打印生成表格，里面填充数据即可。

    6.当然可以提前把html页面搭好。
