// 1. 需求：请求图书列表的数据，并渲染到页面中
function getBookList() {
  axios({
    method: 'get',
    url: 'http://ajax-base-api-t.itheima.net/api/getbooks',
  })
    .then(function (res) {
      // res.data.data 是图书列表的数组
      // map方法返回一个新数组，新数组里的元素就是return的值
      let new_arr = res.data.data.map(function (item) {
        return `
      <tr>
        <td>${item.id}</td>
        <td>${item.bookname}</td>
        <td>${item.author}</td>
        <td>${item.publisher}</td>
        <td><a href="javascript:;" data-id="${item.id}" class="del">删除</a></td>
      </tr>
      `
      })
      // new_arr 是一个数组，想要把它渲染到页面上必须先转换成字符串
      document.querySelector('#tb').innerHTML = new_arr.join('')
    })
    .catch(function (err) {
      // 当请求出错时会自动触发catch里的函数
      alert('网络异常，请稍后再试')
      console.log(err)
    })
}

// 当用户刚打开页面时调用一次
getBookList()

// 2. 需求：当用户点击添加按钮，我们就发送一个http请求，携带用户输入的内容
document.querySelector('#btnAdd').addEventListener('click', function () {
  axios({
    method: 'POST',
    url: 'http://ajax-base-api-t.itheima.net/api/addbook',
    data: {
      bookname: document.querySelector('#iptAuthor').value,
      author: document.querySelector('#iptBookname').value,
      publisher: document.querySelector('#iptPublisher').value,
    },
  })
    .then(function (res) {
      console.log(res)
      // 当添加图片成功后，再次发起ajax请求获取最新的图书列表数据，并渲染到页面中
      getBookList()
    })
    .catch(function (err) {
      // 当请求出错时会自动触发catch里的函数
      alert('网络异常，请稍后再试')
      console.log(err)
    })
})

// 3. 需求：当用户点击删除按钮，我们就发送一个http请求，让服务器把该图书删除调
// console.log(document.querySelector('.del'))
// 错误， 原因：当用户刚打开页面时，页面中没有删除的<a>，因为这个是动态渲染上去的。所以必须得用事件委托的方式实现
// document.querySelector('.del').addEventListener('click', function () {
//   // console.log(1111)
// })
document.querySelector('#tb').addEventListener('click', function (e) {
  // 用户真正点击的是哪个元素，e.target就指向那个元素
  // console.log(e.target)
  if (e.target.className !== 'del') {
    // 说明用户点的不是<a>, 所以直接return
    return
  }

  // 真正的删除操作
  // 给每个<a>添加一个data-id属性，值为该图片的id，然后再获取
  // console.log(e.target.getAttribute('data-id'))
  axios({
    method: 'DELETE',
    url: 'http://ajax-base-api-t.itheima.net/api/delbook',
    params: {
      id: e.target.getAttribute('data-id'),
    },
  })
    .then(function (res) {
      // 当图书删除成功后刷新页面
      getBookList()
      console.log(res)
    })
    .catch(function (err) {
      // 当请求出错时会自动触发catch里的函数
      alert('网络异常，请稍后再试')
      console.log(err)
    })
})
