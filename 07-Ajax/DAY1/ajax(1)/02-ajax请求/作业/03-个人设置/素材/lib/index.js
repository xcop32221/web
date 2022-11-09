// 上传昵称
const name = document.querySelector('input[name=nickname]')
function postName() {
    axios({
        method: 'POST',
        url: 'http://ajax-base-api-t.itheima.net/api/post'
    }).then(res => {
        console.log(res.data)
    })
}
