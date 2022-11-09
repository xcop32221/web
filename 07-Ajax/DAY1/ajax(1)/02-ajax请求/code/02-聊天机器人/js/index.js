// 1. 用户点击发送按钮，发送框内容发送到聊天区域右侧
const send = document.querySelector('.input_sub')
const input_txt = document.querySelector('.input_txt')
const talk_list = document.querySelector('.talk_list')

send.addEventListener('click', function () {
    let chat = input_txt.value
    if (!chat) {
        alert('请输入内容')
        return
    }
    const li = document.createElement('li')
    li.classList.add('right_word')
    li.innerHTML = `
        <img src="img/person02.png" />
        <span>${chat}</span>
    `
    talk_list.appendChild(li)

    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    // 只要调用resetui() ，页面就会自动滚动到最底部
    resetui()
    input_txt.value = ''

    sendChat(chat)
})

// 2. 把用户输入的内容发送给服务器，服务器返回聊天回复显示在聊天区域左侧
function sendChat(chat) {
    axios({
        method: 'GET',
        url: 'http://ajax-base-api-t.itheima.net/api/robot',
        params: {
            spoken: chat
        }
    }).then(res => {
        console.log(res.data)
        if (res.data.data.type !== 5000) {
            alert('发送失败！')
            return
        }

        const li = document.createElement('li')
        let text = res.data.data.info.text
        li.classList.add('left_word')
        li.innerHTML = `
            <img src="img/person01.png" />
            <span>${text}</span>
        `
        talk_list.appendChild(li)
        resetui()
        
        getVoice(text)

    }).catch(err => {
        alert('出了一点小差错*……*')
    })
}

// 机器人回复语音
function getVoice(text) {
    axios({
        method: 'GET',
        url: 'http://ajax-base-api-t.itheima.net/api/synthesize',
        params: {
            text: text
        }
    }).then(res => {
        // console.log(res.data)
        if (res.data.status !== 200) {
            return
        }
        const audio = document.querySelector('#audio')
        audio.src = res.data.voiceUrl
    }).catch(err => {
        alert('出了一点小差错*……*')
    })
}