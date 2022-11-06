# DAY5

函数传参：函数实参传入undefined相当于没有传入参数/无返回值函数返回undefined

## 对象定义

数据类型：引用数据类型

作用：用于存储各种键值对（name：'张三'）--属性的结合

​	     用来描述一个具体的事物

object：字面量为{ }

对象使用：1.var={key1:value1,key2:value2} 

​		     2.var=new Object()

### **对象的使用：**

1.查：访问对象属性

object.key

部分对象属性名带有特殊字符，需要变为字符串，此时不能取直接取到

object[key]

2.改：修改对象属性值

object.key=new  value

3.增：新增一个没有的键值对到对象中

object.newkey=value

重复的键值对会覆盖

4.删：删除键值对

delet object.key

### **对象的方法**

声明：匿名函数赋值给属性

语法:   key:function(){ }

### **遍历对象**

语法：for(let k in obj){

​	k:为对象中的属性名/隐式转换为string

​	obj[k]:为对象中的属性值

}

### **内置对象**

js内部提供的对象，现成可以使用的对象，需要直接调用

#### 1.Math对象

属性：1.Pi

​	    2.ceil(num) 向上取整   返回值

​	    3.floor(num) 向下取整   返回值

​	    4.round(num)四舍五入  最后一位小数开始(整数结束)进行四舍五入    返回值

​	    4.max(num1,2,3,4) 取最大返回值

​	    5.min(num1,2,3,4)取最小返回值

**6.随机数**：random()

随机生成0-1之间的小数，包括0，不包括1

随机生成N-M之间的一个随机数：Math.floor(Math.random() * (M-N+1))+N)

