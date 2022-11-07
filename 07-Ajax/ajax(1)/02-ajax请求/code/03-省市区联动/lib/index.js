const province = document.querySelector('select[name=province]')
const city = document.querySelector('select[name=city]')
const area = document.querySelector('select[name=area]')

// 获取省份
function getProvince() {
    axios({
        methd: 'GET',
        url: 'http://ajax-api.itheima.net/api/province'
    }).then(res => {
        if (res.data.message !== '获取省份成功') {
            alert('获取省份失败')
            return
        }
        let arr_province = res.data.data.map(item => {
            return `
                <option value="${item}">${item}</option>
            `
        })
        province.innerHTML = arr_province.join('') 

        // 默认让getCity()的参数为第一个省份
        getCity(res.data.data[0])
    })
}

// 获取城市
function getCity(pname) {
    axios({
        methd: 'GET',
        url: 'http://ajax-api.itheima.net/api/city',
        params: {
            pname: pname,
        }
    }).then(res => {
        if (res.data.message !== '获取城市成功') {
            alert('获取城市失败')
            return
        }
        let arr_city = res.data.data.map(item => {
            return `
                <option value="${item}">${item}</option>
            `
        })
        city.innerHTML = arr_city.join('')

        getArea(pname, res.data.data[0])
    })
}

// 获取区县
function getArea(pname, cname) {
    axios({
        methd: 'GET',
        url: 'http://ajax-api.itheima.net/api/area',
        params: {
            pname: pname,
            cname: cname
        }
    }).then(res => {
        if (res.data.message !== '获取地区县成功') {
            alert('获取地区县失败')
            return
        }
        let arr_area = res.data.data.map(item => {
            return `
                <option value="">${item}</option>
            `
        })
        area.innerHTML = arr_area.join('')
    })
}
getProvince()
province.addEventListener('change', function () {
    // console.log(this.value)
    getCity(this.value)
})
city.addEventListener('change', function () {
    let pname = province.value
    console.log(pname)
    getArea(pname, this.value)
})