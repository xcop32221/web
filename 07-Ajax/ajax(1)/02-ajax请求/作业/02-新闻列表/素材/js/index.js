axios({
    method: 'GET',
    url: 'http://ajax-base-api-t.itheima.net/api/news',
}).then(res => {
    if (res.data.status !== 200) {
        alert('获取新闻列表失败')
        return
    }
    
    console.log(res.data.data)
    const list = document.querySelector('#news-list')
    let arr_news = res.data.data.map(item => {
        const { cmtcount, id, img, source, tags, time, title } = item

        // 将字符串转为数组，split('选择以什么进行分割', '规定数组长度（可选）')
        const arr_tags = tags.split(',')
        // console.log(arr_tags)

        // tags的数量不一定，通过maps渲染
        const new_tags = arr_tags.map(item => {
            return `
                <span>${item}</span>
            `
        }).join('')

        return `
        <div class="news-item">
            <img
            class="thumb"
            src="http://www.liulongbin.top:3006${img}"
            alt=""
            />
            <div class="right-box">
                <h1 class="title">${title}</h1>
                <div class="tags">
                    ${new_tags}
                </div>
                <div class="footer">
                    <div>
                    <span>${source}</span>
                    &nbsp;&nbsp;
                    <span>${time}</span>
                    </div>
                    <span>评论数：${cmtcount}</span>
                </div>
            </div>
        </div>
        `
    })
    list.innerHTML = arr_news.join('')
}).catch(err => {
    alert('出了一点小差错*……*')
})