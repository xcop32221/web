### 姓名	： 

### 分数	：

---

分数不重要，重点是掌握知识点，查漏补缺。

1.运算符优先级 ：一元运算优先级大于逻辑运算

2.短路逻辑赋值：1.&&：左边为真，右边为赋值

 			      2.||：左边为真，立即赋值

4.数据结构：左右两边结构需要一样，数组通过索引赋值，对象通过属性赋值

5.对象拓展：和迭代器拓展不同（依次返回ir的value），通过object.assign完成

6.暂时性死区：变量对象沿着作用域链搜索，发现该变量是在块级作用域中，但先使用再声明，报错；const不能重新赋值

7.归并函数，一定是函数的返回值作为下次的pre参数

8.实例不能使用构造函数的静态方法

9.箭头函数返回对象一定需要加()

10.对象如果没有重新tostring方法，那么返回一个字符串：[object，类]，即隐式转换的字符串；对象之间永远比较的是地址

## 一、单选题（共55题，总分110分）

##### 1. 下面代码的输出是什么？D

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();
```

- A: Lydia 和 undefined

- B: Lydia 和 ReferenceError

- C: ReferenceError 和 21

- D: undefined 和 ReferenceError



##### 2.下面代码的输出是什么?B 

```js
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`



##### 3. 哪个选项是正确的？A

```js
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size`是无效的

- B: `mouse[bird.size]`是无效的

- C: `mouse[bird["size"]]`是无效的

- D: 以上三个选项都是有效的



##### 4. 输出什么? C 

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: true false true

- B: false false true

- C: true false false

- D: false true true 



##### 5.  当我们这么做时，会发生什么？A

```js
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!

- B: SyntaxError. You cannot add properties to a function this way.

- C: undefined

- D: ReferenceError



##### 6. 下面代码的输出是什么? D  A 

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName())
```

- A: TypeError

- B: Lydia undefined

- C: Lydia Hallie

- D: undefined undefined 



##### 7. 下面代码输出什么？A

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined

- B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}

- C: Person {firstName: "Lydia", lastName: "Hallie"} and {}

- D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError 



##### 8. 下面代码的输出是什么?  C

```js
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: NaN

- B: TypeError

- C: "12"

- D: 3 



##### 9.  下面代码的输出是什么?  A C 
```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: 1 1 2

- B: 1 2 2

- C: 0 2 2

- D: 0 1 2 



##### 10. 下面代码输出什么？ B C
```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 })
```

- A: You are an adult!

- B: You are still an adult.

- C: Hmm.. You don't have an age I guess 



##### 11. 下边这代码输出是什么？B C

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
- A: "number"

- B: "array"

- C: "object"

- D: "NaN"




##### 12. 输出什么？A B

```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`



##### 13. 输出什么？B C

```js
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: { a: "one", b: "two" }

- B: { b: "two", a: "three" }

- C: { a: "three", b: "two" }

- D: SyntaxError 



##### 14. 下面代码输出是什么？D

```js
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`



##### 15. 下面代码输出是什么？A

```js
String.prototype.giveLydiaPizza = function(){
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza(); 
```

A: "Just give Lydia pizza already!"

B: TypeError: not a function

C: SyntaxError

D: undefined 



##### 16. 下面代码的输出是什么? A B 

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b])
```

A: 123

B: 456

C: undefined

D: ReferenceError 



##### 17. 下面代码输出什么？B

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

A: First Second Third

B: First Third Second

C: Second First Third

D: Second Third First 



##### 18. 下面代码的输出是什么? D

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

A: undefined is 21 和 Lydia is 21

B: function sayHi 和 function sayHi

C: Lydia is 21 和 Lydia is 21

D: Lydia is 21 和 function sayHi



##### 19. 输出什么？D

```js
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`



##### 20.  下面代码的输出是什么? B

```js
console.log(typeof typeof 1);
```

A: "number"

B: "string"

C: "object"

D: "undefined"



##### 21. 下面代码输出什么？C

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

A: [1, 2, 3, 7 x null, 11]

B: [1, 2, 3, 11]

C: [1, 2, 3, 7 x empty, 11]

D: SyntaxError



##### 22. 下面代码输出什么？C

```js
[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);
  },[1, 2]);
```

A: [0, 1, 2, 3, 1, 2]

B: [6, 1, 2]

C: [1, 2, 0, 1, 2, 3]

D: [1, 2, 6]



##### 23. 输出什么 D

```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`



##### 24. `setInterval`方法的返回值什么? A 

```js
setInterval(() => console.log("Hi"), 1000);
```

A：一个唯一的id

B：指定的毫秒数

C：传递的函数

D：undefined



##### 25. 下面这段代码的返回值是？A

```js
[..."Lydia"];
```

A: ["L", "y", "d", "i", "a"]

B: ["Lydia"]

C: [[], "Lydia"]

D: [["L", "y", "d", "i", "a"]] 



##### 26.  事件传播的三个阶段是什么？D

A: Target > Capturing > Bubbling

B: Bubbling > Target > Capturing

C: Target > Bubbling > Capturing

D: Capturing > Target > Bubbling



##### 27. 输出是什么？C

```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

A: `[[1, 2, 3, 4, 5]]`

B: `[1, 2, 3, 4, 5]`

C: `1`

D: `[1]`



##### 28.输出是什么？A B

```js
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`



##### 29.输出什么？D A

```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`



##### 30. 输出什么？ B D

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

##### 31. 输出什么？B A

```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `SyntaxError`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

##### 32. 输出什么 C B

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

##### 33. 输出什么？D

```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

##### 34. 输出什么？A

```js
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`



##### 35. 输出什么？C B

```js
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

##### 36. 哪些方法修改了原数组？D

```js
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

##### 37.  输出什么？A

```js
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

##### 38. 下面那个选项将会返回 `6`?   C

```js
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

##### 39. 输出什么 B

```js
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

##### 40. 输出什么？D 

```js
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- A: `1` `2` `3`
- B: `{1: 1}` `{2: 2}` `{3: 3}`
- C: `{ 1: undefined }` `undefined` `undefined`
- D: `undefined` `undefined` `undefined`

##### 41. 输出什么？A B

```js
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

##### 42. 输出什么？ A D

```js
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`



##### 43. 输出什么？B 

```js
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

##### 44. 输出什么  D A

```js
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

##### 45. 输出什么？C

```js
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```

- A: 1
- B: 2
- C: 3
- D: 4

##### 46. 输出什么？C 

```js
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

##### 47. 输出什么 D B

```js
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

##### 48. 输出什么 A 

```js
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

##### 49. 输出什么？ A B

```js
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

##### 50. 哪一个选项会导致报错？C D

```js
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

##### 51. 输出什么？D 

```js
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

##### 52. 输出什么 A 

```js
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`



##### 53. 输出什么？B 

```js
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

##### 54. 输出什么 D C

```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

##### 55.输出什么？ B

```js
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`


---



//1.表达式运算符 ++前 ++后

//2.数据解构

//3.函数定义参数

//4.变量声明：块级作用域，变量提升

//5.剩余参数

//6.算数优先级



## 二、 简答题  （共8题，总分40分）



##### 1. 说一说什么是BFC，怎么触发？ 

```
BFC:Block formatting context，即块级格式化上下文，是浏览器渲染的一种方式
触发：
1.overflow:hidden
2.定位除static定位
3.display:flex,display:inline-block,display:table

```



##### 2. 什么是深拷贝，什么是浅拷贝？实现浅拷贝的方式，实现深拷贝的方式？

```
浅拷贝：在堆空间中新建一个对象，拷贝原对象的一层到新对象，即基本数据类型属性互相不影响，引用数据类型属性互相影响
方式：1.Object.assign()  2.{...obj}   3.array.slice()  4.array.concat()

深拷贝：在堆空间中新建一个对象，递归拷贝原对象的属性到新对象，即所有数据类型的属性互不影响
方式：1.递归函数  2.JSON(parse,stringify) 3.lodash(._deepclone)
```



##### 3. 什么是闭包? 有什么作用？会造成什么问题？

```
闭包：是一种作用域，当一个作用域引用另一个作用域的变量形成，通常是嵌套函数形式
作用：使外层函数中的变量在调用结束后不会被垃圾回收，可以在其他作用域访问到该变量
问题：内存泄露
```



##### 4. var let const 的区别？

```
1.let const具有块级作用域，var没有
2.let const具有暂时性死区，即在声明之前不能使用该变量，var可以
3.let const不允许重复赋值，var可以
4.var声明的变量会变量提升，到当前作用域的变量对象的顶端，let const没有
5.var声明的变量会成为全局对象的属性，let const不会
6.const声明的变量需要初始值，且声明后不可改变该值
```



##### 5.  改变this的指向有哪些方法，它们的区别是？

```
apply(obj,[var]):立即调用，将函数中的this指向obj，传入参数数组
call(obj,var1,...var2)：立即调用，将函数中的this指向为obj，传入参数
bind(obj,var1,...var2)：返回一个新函数，新函数中this指向传入对象，可以传入参数
```



##### 6. 谈一谈你对原型的理解？原型链的理解呢？

```
原型：每个函数都有一个prototype属性指向原型，同时原型中存在constructor属性指向该函数；当函数作为构造函数生成的每个实例，都有__proto__属性，指向对应构造函数的原型；实例共享的属性和方法放在原型上

原型链：每个对象都有原型，通过__proto__属性访问到，原型也具有原型，当想获取一个对象的属性和方法时，先到实例中找，如果找不到就沿这__proto__去原型上找，直到Object.prototype停止，这个机制就叫原型链
```



##### 7.  什么是防抖，什么是节流？它们的主要应用场景？

```
防抖：持续触发事件时，两个事件之间设置一段延迟时间，当延迟时间内再次触发事件，将延迟时间清零，当延迟时间结束后执行任务
场景：搜索内容时，点击按钮时


节流：持续触发事件时，多个触发事件，只在规定时间内执行一个任务，减少执行频率
场景：resize事件，mousemove事件等密集触发的事件
```



##### 8. 聊一聊你对垃圾回收机制的理解呢？

```
garbage collection：JS引擎线程管理内存的方式

主要的方法：
1.引用计数法:非周期性的清理内存
方式：即被引用次数加1，失去引用次数减1，当引用次数为0时，垃圾回收启动去清理内存
缺点：内存泄露

2.标记清理法：周期性清理内存
方式：1.标记变量 2.清除变量 3.内存整理(防止内存不连续)
```



## 三、代码题  （20）

##### 1. 手写防抖？ （6分）

```
function debounce(fn,ms){
  let timerId
  return function(...args){
   		clearTimeOut(timerId)
    	timerId=setTimeinterval(()=>{
          fn.call(this,...args)
    	},ms)
  }
}
```



##### 2. 手写节流？（6分）

```
//用date实现
function throttle(fn,ms){
  let start=0
  return function(...args){
    let now=+new Date()
    if(now-start>ms){
      fn.call(this，...args)
      start=+new Date()
    }
  }
}
//用定时器实现
function throttle(fn,ms){
  let timerid
  return function(...args){
    if(!timerid){
      setTimeout(()=>{
        fn.call(this,...args)
        timerid=null
      },ms)
    }
  }
}

```





##### 3. 渲染商品，并且筛选过滤 ？素材见综合案例。（8分）

```
const filter=document.querySelector('.filter')
    const lists=document.querySelector('.list')
    const render=function(list,min_price=0,max_price=99999){
      let new_lists=list.map((el,index)=>{
        
        if(el.price>min_price && el.price<max_price){
          return `
          <div class="item">
          <img src="${el.picture}" alt="">
          <p class="name">${el.name}</p>
          <p class="price">${el.price}</p>
        </div>        
        `
        }
      })
      lists.innerHTML=new_lists.join('')
    }
    filter.addEventListener('click',function(e){
        if(e.target.tagName==='A')
        {
          switch(e.target.dataset.index){
            case '1':
              render(goodsList,0,100)
              break
            case '2':
              render(goodsList,100,200)
              break
            case '3':
              render(goodsList,200,300)
              break
            default:
              render(goodsList)
          }
        }
      })
```

