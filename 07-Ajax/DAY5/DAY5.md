# DAY 5 

多个写法去做同一件事

Axios：支持ie

1. axios 可以声明实例，让一类 axios 请求不用再配置根路径，头部等信息

2. axios 设置 responseType，而非 fetch 第一段 then 处理结果

3. axios 可以设置 GET 请求的 params，会被自动转成 url params

4. axios 可以设置默认的结果处理函数

   ```js
   transformResult: (data, headers) => {
       return data;
    },
   ```

5. axios返回的Promise对象的promiseResult直接就是object（处理过reponse后的）



fetch比axios更灵活，第一个返回的是一个流，通过调用函数得到的promise的PromiseResult为数据

axios是封装的xhr适应能力更强