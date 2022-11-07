axios({
  method: 'get',
  url: 'http://ajax-base-api-t.itheima.net/api/news',
})
  .then(function (res) {
    let arr = res.data.data.map(item => {
      console.log(item.tags) // '三大运营商,中国移动,5G商用'

      // 通过,分隔符把字符串转换成数组
      let tags_arr = item.tags.split(',')
      // 遍历数组，把拼接好的字符串一个个添加到tags_new_arr这个新数组中
      let tags_new_arr = tags_arr.map(tag => {
        return '<span>' + tag + '</span>'
      })
      // tags_new_arr 长这个样子：['<span>三大运营商</span>','<span>中国移动</span>','<span>5G商用</span>']
      return `
      <div class="news-item">
      <img
        class="thumb"
        src="http://ajax-base-api-t.itheima.net${item.img}"
        alt=""
      />
      <div class="right-box">
        <h1 class="title">${item.title}</h1>
        <div class="tags">
        ${tags_new_arr.join('')}
        </div>
        <div class="footer">
          <div>
            <span>${item.source}</span>
            &nbsp;&nbsp;
            <span>${item.time}</span>
          </div>
          <span>评论数：${item.cmtcount}</span>
        </div>
      </div>
    </div>
      `
    })
    // document.querySelector('#news-list').innerHTML = arr.join('')
    $('#news-list').html(arr)
  })
  .catch(function (err) {})
