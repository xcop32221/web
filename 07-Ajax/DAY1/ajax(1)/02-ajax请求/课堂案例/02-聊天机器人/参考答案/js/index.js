// 配置全局的baseURL
axios.defaults.baseURL = 'http://ajax-base-api-t.itheima.net'

// 1. 需求：当用户输入内容，并且点击发送，把内容输出到页面的右侧
$('.input_sub').on('click', function () {
  // 获取用户输入的内容
  let content = $('.input_txt').val()
  if (!content) {
    alert('请输入内容')
    return
  }
  // 在ul里追加一条li
  $('.talk_list').append(`
         <li class="right_word">
            <img src="img/person02.png" />
            <span>${content}</span>
          </li>
  `)
  // 只要调用resetui() ，页面就会自动滚动到最底部
  resetui()
  // 把输入框里的内容清空
  $('.input_txt').val('')

  // 调用axios发送http请求
  postContent(content)
})

// 1.1 给input框绑定keyup事件
$('.input_txt').on('keyup', function (e) {
  // console.log(e)
  if (e.keyCode === 13) {
    // console.log('你按了回车键')
    // 当用户按了回车键，效果和点击发生效果一致，所以直接click()一个即可
    $('.input_sub').click()
  }
})

// 2. 发送用户输入的内容，获取机器人的回复
function postContent(content) {
  axios({
    method: 'GET',
    url: '/api/robot',
    params: {
      spoken: content,
    },
  })
    .then(res => {
      let text = res.data.data.info.text
      // 把聊天机器人的回应信息渲染到页面中
      $('.talk_list').append(`
       <li class="left_word">
          <img src="img/person01.png" />
          <span>${text}</span>
        </li>
      `)
      // 只要调用resetui() ，页面就会自动滚动到最底部
      resetui()

      // 在这里发送文字转换成语言的http请求
      getSound(text)
    })
    .catch(err => {})
}

// 3. 发送文字获取语音
function getSound(text) {
  axios({
    method: 'get',
    url: '/api/synthesize',
    params: {
      text: text,
    },
  })
    .then(res => {
      // 给<audio> 更换src属性即可播报对应的语言
      $('#audio').attr('src', res.data.voiceUrl)
    })
    .catch(err => {})
}
