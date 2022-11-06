### 姓名	： 

### 分数	：

---

满分(100  + 10)分  

考试时间  180分钟 (9:00 - 12:00)

希望大家做选择时，不要把代码放在VSCode或浏览器上运行得出答案，全靠自觉哈~ 考试分数不重要，重点是掌握知识点，查漏补缺。

该试题是一份markdown文件,  可以直接在typora上打开编辑

> **注意: 随时记得 Ctrl +S 保存. 边做边保存, 以免不小心将答过的题丢失!!!** 



## 一、单选题（共20题，总分40分）

##### 1. 下列变量名合法的是  (	c  )

A: 	5show

B: 	return

**C: 	$user**

D: 	var



##### 2. parseInt("6*7", 10) 的 结果是  (	a  )

**A: 	42**

B: 	"42"

C: 	6

D: 	NaN



##### 3. 请问下面那个方法可以删除数组最后一个元素？   (	 c )

A:      shift()

B:      unshift()

C:  	pop()

D:  	push()



##### 4. js 数据类型说法错误的是?  (	d  )

A:   js 数据类型分为基本数据类型和引用数据类型

B： 简单类型又叫做基本数据类型或者值类型

C： 复杂类型又叫做引用类型

D： 简单数据类型存放到堆里面，引用数据类型存放到栈里面



##### 5. 以下while循环的次数是  (	  c)

```js
let i = 0
while (i===1){
    i++
}
```

A:		无限次

B:		有语法错误, 不能执行

C:		一次也不执行

D:		执行一次



##### 6. 下面不属于JavaScript数据类型的是  (	d  )

A、	number
B、	string
C、	boolean
D、	int



##### 7. 下列哪种方式访问对象属性会报错  (	d  )

```js
let obj = {
    name:'周杰伦',
    age: 20
}
```

A:	obj['name']

B:	obj.name

C:	obj["age"]

D:	obj[age]





##### 8. 下列哪一个语句结果为22    (d	  )

```js
let num1 = 5
let num2 = 4
```

A:	++num2  +  num1 * 2  +  num2 * 2 - 2

B:	++num2  +  num1 * 2  +  ++num2 + 2

C:	++num2  +  num1 * 2  +  num2++ +2

D: 	num2++  +  num1 * 2  +  num2 * 2 - 2



##### 9. 关于数组的描述错误的是  (	c  )

A:	可以用 new Array(1, 2, 3, 4) 这种方式创建数组

B:	数组的创建方式还可以是 [1, 2, 3, 4, 5]

C:	数组的每一项值都有索引， 索引默认从1开始

D:	数组是引用数据类型，或者说是复杂数据类型



##### 10. 下面哪个选项可以产生 0 <= num <= 10 的随机数	 ( 	c)

A: 	Math.ceil (Math.random() * 9 )

B: 	Math.floor (Math.random() * 10)

C: 	Math.floor (Math.random() * 11)

D:    Math.ceil (Math.random() * 11)



##### 11.  下列代码执行结果  (  b	)

```js
function sum(a, b) {
  return a + b;
}
console.log(sum(1, "2"))
console.log(typeof sum(1, "2"))
```

A:	 3      string

B:	12	 string

C:	 3  	 number

D:	12 	number



##### 12. 下面代码的执行结果为（c	 ）

```js
let a = 20;
function foo(){
   console.log(a) ; 
    a = 10 ;
   ++a;
   console.log(a) ;
}
foo();
```

A: 	20 	10

B: 	10 	11

C: 	20 	11

D: 	undefined 	11





##### 13. 代码的输出结果是?（	 c  ）

```js
function fnMax(a,b,c){
   let max = a > b ? a : b;
   if(c > max){ max = c;}
   alert(max);
}
fnMax(8, 2, 5);
```

A:	5

B:	2

C:	8

D:	10



##### 14. 下面代码输出什么？a  

```js
function addToList(item, list) {
  return list.push(item)
}
let result = addToList('apple', ['banana'])
console.log(result)
```

A:	['banana', 'apple']

B:   ['apple', 'banana']

C:	2

D:   true





##### 15. 关于JS中数据类型转换, 下列说法正确的是?    (	 a )

A:	    console.log(true + 1)                   会在控制台打印2

B:	    console.log(undefined + null)     在控制台打印 0

C：	  console.log( 1+ "1")                     在控制台打印 2

D:		console.log(parseInt('12px'))     在控制台打印 12px



##### 16. 下面代码输出  (	b  )

```js
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`



##### 17. 需要在 html 页面上引用脚本文件myJs.js，下列语句中，正确的是  (	d  )

A:    `<script href="myJs.js" type="text/javascript" />`

B:   `<script href="myJs.js" type="text/javascript" />`

C:	`<script scr="myJs.js" type="text/javascript"></script>`

D:   `<script src="myJs.js" type="text/javascript"></script>`



##### 18. 下列的哪一个表达式将返回假  (	b  )

A:        !(3<=1)

B:        (4>=4)&&(5<=2)

C:        2<3

D:       (2<3)||(3<2)



##### 19. 求以下函数运算的结果  (	 c )

```js
function fn(){

console.log(100)

}
console.log(fn())  
```

 A： 报错

 B： 100 100

 C： 100 undefined

 D： undefined undefined





##### 20. 以下代码运行的结果是  (	c  )

```js
let a = 888
++a
console.log(a++)
```

A:		888

B:		889

C:		890	

D:		891



## 二、 简答题  (共3题，总分20分)

##### 1. == 和 === 的区别 ?  (3+3分)

```js
//两者都是比较是否相等； ==是值相等；===是类型和值都相等
```



##### 2. typeof null     typeof [1, 2, 3]    的结果是什么  (3+3分)

```js
// object；array
```



##### 3.  基本数据类型有哪些？检测数据类型的方式？（5+3分）  

```js
//基本数据类型有：Number,String,Boolean,Null,Undefine;检测方式有1.typeof 变量 2.type(变量)
```





## 三、 代码题 （共4+1题，总分40+10分 ）

##### 1. 在控制台中打印出1~100中能被3整除的数的和 (包含1和100)      (10分)

```js
// 


```



##### 2. 筛选数组，请将arr数组 [1, 2, 3, 4, 2, 4, 2, 6, 9, 2, 7, 5] 中大于等于5的数据筛选出来，存放到新数组newArr里面，并打印出来。 (10分)

```js
let arr = [1, 2, 3, 4, 2, 4, 2, 6, 9, 2, 7, 5]
// 筛选大于等于5的数


```



##### 3. 冒泡排序   （10分）

```js
let arr = [5, 1, 6, 9, 2]
// 实现冒泡排序


```



##### 4. 请完成函数 getResult，实现得到输入的数组中的  (10分)

1. 最小值

2. 最大值

3. 平均值
4. 总和 

```js
要求如下：
   函数名：getResult       
   函数接收的参数：数组arr
   函数调用方式：getResult([数值 1，数值 2，数值 3，数值 4.....])
   函数返回值: 对象
   函数功能：返回值是一个对象，这个对象有sum总和, max最大值, min最小值, avg平均值等几个属性名
```



```js
// 代码
function getResult(arr){
    
    
    
}
```



##### *5. 两数之和， 附加题（选做，可加分）10分*

```js
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]

解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
```

```js
// 代码


```







