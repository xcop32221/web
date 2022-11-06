
//! 监控模块
;(function(){
    // Tab栏切换
    // 获取元素
    const tabs = document.querySelector('.monitor .tabs')
    const boxs = document.querySelectorAll('.monitor .content')

    // JS方式加自定义属性
    const as = document.querySelectorAll('.tabs a')
    as.forEach(function(el, i){
        el.setAttribute('data-id', i)
    })
    //============================
    // 事件委托
    tabs.addEventListener('click', function(e){
        //  === 判断  = 赋值
        if (e.target.tagName === 'A'){
            // 排他
            this.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')

            // 下面显示对应盒子
            boxs.forEach(function(item){
                item.style.display = 'none'
            })
            console.log(e.target.dataset.id)
            // 我们自己加的
            boxs[e.target.dataset.id].style.display = 'block'
            // 伪数组: 有length you索引, 没有数组的方法, 伪数组可以用forEach
        }
    })

    // 无缝滚动 
    const boxWraps = document.querySelectorAll('.marquee-view .marquee')
    // 复制里面的rows 克隆会把父节点一起复制了, 当然可以取chidren
    // console.log(boxWrap.cloneNode(true))
    boxWraps.forEach(function(item){
        console.log(item)
        console.log(item.innerHTML)
        // 左边是赋值，    右侧的两个， 是取item里面的内容
        item.innerHTML = item.innerHTML + item.innerHTML
    })
})()


//! 点位分布模块
;(function(){
    // 实际开发， Echarts的需求 
    // 1. 在官网示例中找到类似的图表
    // 2. 改， 不知道怎么改，百度或者查文档。


    // part one 
    // 1. 引入echarts
    // 2. 准备一个具有宽高的div （类名或者ID）

    // part two 
    // 1. echarts.init(dom元素) 初始化一个echarts实例
    // 2. 准备option   ==> 改的就是它
    // 3. 实例.setOption(option)
    const myChart = echarts.init(document.querySelector('.pie'))
    const option = {
        // 颜色配置 根据需求来
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        // 提示框组件
        tooltip: {
          trigger: "item",
            // a表示series系列图标名称
            // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            // 修改饼图大小
            radius: ["10%", "70%"],
            // 位置 前面一个是左右， 后面一个是上下
            center: ["50%", "50%"],
            // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
            // 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            roseType: "radius",
            data: [
              { value: 20, name: "云南" },
              { value: 26, name: "北京" },
              { value: 24, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 25, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 42, name: "湖北" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
              fontSize: 10
            },
            // 修饰引导线样式 (会裁切)
            labelLine: {
              // 连接到图形的线长度
              length: 6,
              // 连接到文字的线长度
              length2: 8
            }
          }
        ]
      };

    myChart.setOption(option)

    // 监听浏览器窗口变化  让echarts重新渲染
    window.addEventListener('resize', function(){
        // echarts 也有一个resize
        myChart.resize()
    })

})()

//! 用户总量统计
;(function(){

    // 1. 初始化
    const myChart = echarts.init(document.querySelector('.bar'))
    // 2. 准备option
    // 放到option外面
    const item = {
      value : 1200,
      // 1. 修改当前柱子的颜色
      itemStyle:{
        color: '#254065'
      },
      // 2. 鼠标经过柱子的颜色
      // 不显示高亮 , 原来柱子什么颜色, 这个就什么颜色, 就不会高亮
      emphasis:{
        itemStyle:{
          color: '#254065'
        }
      },
      // 3. 单个柱子的提示框隐藏
      tooltip:{
        // show:false, // 也可以生效
        extraCssText:'opacity:0'
      }
    }
    const option = {
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
              ]
            ),
            // //提示框组件
            // tooltip: {
            //   // 当trigger为axis时， axisPointer才生效
            //   trigger: 'axis',
            //   axisPointer: {            // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
            //       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            //   }
            // },
            tooltip: {
              // 当trigger为axis时， axisPointer才生效
              trigger: 'item',
            },
            // 直角坐标系内绘图网格（区域）
            grid: {
              top: '3%',
              right: '3%',
              bottom: '3%',
              left: '0%',
              //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
               // 网格区域是否包含刻度标签（文本内容）
              // 刻度标签 ==> 文本
              containLabel: true,
              // 是否显示直角坐标系网格
              show: true,
              //grid 四条边框的颜色
              borderColor: 'rgba(0, 240, 255, 0.3)'
            },
              xAxis: [
                {
                    // 使用类目，必须有data属性
                    type: 'category',
                    // 使用 data 中的数据设为刻度文字
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    // 刻度设置
                    axisTick: {
                        // true意思：图形和刻度居中对齐
                        // false意思：柱状图在两个刻度之间
                        alignWithLabel: true,
                        // 不显示刻度
                        show: false
                    },        
                    // x坐标轴文字标签样式设置
                    axisLabel: {
                        color: '#4c9bfd',
                        rotate:40
                    },
                    // x坐标轴颜色设置
                    axisLine:{
                        lineStyle:{
                            color:'rgba(0, 240, 255, 0.3)',
                            // color:'orange'
                            // width:8,  x轴线的粗细
                            // opcity: 0,   如果不想显示x轴线 则改为 0
                        }
                    }
                }
            ],
            yAxis: {
              type: 'value',
              // 刻度设置
              axisTick: {
                  // 不显示刻度
                  show: false
              },        
              // y坐标轴文字标签样式设置
              axisLabel: {
                  color: '#4c9bfd'
              },
              // y坐标轴颜色设置
              axisLine:{
                  lineStyle:{
                          color:'rgba(0, 240, 255, 0.3)',
                      // width:8,  x轴线的粗细
                      // opcity: 0,   如果不想显示x轴线 则改为 0
                      }
                  },
              // y轴 分割线的样式 
              splitLine: {
                  lineStyle: {
                      color: 'rgba(0, 240, 255, 0.3)'
                  }
              }  
            },
            // 系列里面的data 就是每一个柱子的数据
            series: [
            {
                // name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                // 如果要对单独的一个柱子做定制处理, 可以写一个对象.
                data: [2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240],
            }
            ]
      };
    
    // 3. setOption
    myChart.setOption(option)

    // 4. 监听浏览器窗口变化  让echarts重新渲染
    window.addEventListener('resize', function(){
        // echarts 也有一个resize
        myChart.resize()
    })

})()

//! 销售额统计模块
;(function(){
  const myChart = echarts.init(document.querySelector('.line'))
  const option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 如果legend 不写data, 默认会显示series系列里面数据的name
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    // 设置网格样式
    grid: { 
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
  
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
         show: false // 去除刻度线
       },
       axisLabel: {
         color: '#4c9bfd' // 文本颜色
       },
       axisLine: {
         show: false // 去除轴线
       },
       boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
  // 图标数据
  series: [{
    name:'预期销售额',
    data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
    type: 'line',
    // 让线条平滑
    smooth: true
  },{
    name:'实际销售额',
    data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
    type: 'line',
    smooth: true
    }]
  };

  myChart.setOption(option)

  // 监听浏览器窗口变化  让echarts重新渲染
  window.addEventListener('resize', function(){
      // echarts 也有一个resize
      myChart.resize()
  })

  // 1. 准备数据
  const data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }

  // data['year']
  // data.year 

  // ===> 点击a标签

  // 2. 事件委托 
  let i = 0  // 把i变量,放到前面声明
  const box = document.querySelector('.caption')
  box.addEventListener('click', function(e){
    if (e.target.tagName === 'A'){
      // 排他思想
      this.querySelector('.active').classList.remove('active')
      e.target.classList.add('active')

      const key = e.target.dataset.type  // year

      // 再点击a标签的时候, 点击的哪个a, 就把哪个a的索引号 赋值给i
      i = e.target.dataset.id


      // 点击之后每次会有他的自定义名字 
      // 然后用名字去取他的数据       //---- 李小强
      // console.log(key)
      // console.log(data[key])
      const arr = data[key]
      // 点击年, 得到了年的数据 
      // arr[0] 预期销售额
      // arr[1] 实际销售额
      // 第一条线
      option.series[0].data = arr[0]
      option.series[1].data = arr[1]
      // 重新渲染数据
      myChart.setOption(option)
    }  // end if
  })

  // 3. 自动切换功能
  const btns = document.querySelectorAll('.caption a')
  // btns 有四个, 最大 能取到下标3  btn[0123]

  const fn = function(){
    i++
    if (i >= 4) i = 0
    btns[i].click()
  }
  // 开启定时器
  let timer = setInterval(fn, 1000)

  const sales = document.querySelector('.sales')
  // 当鼠标经过的时候, 关闭定时器
  sales.addEventListener('mouseenter', function(){
    clearInterval(timer)
  })
  // 鼠标离开的时候, 重新开启定时器
  sales.addEventListener('mouseleave', function(){
    // 这里重新赋值, 不要再写let关键字了!
    timer = setInterval(fn, 1000)
  })

})()

//! 渠道分布雷达图
;(function() {
  // 1. 实例化对象
  const myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置
  const option = {
    // 提示框组件
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"]
    },
    radar: {
      // 数据
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 }
      ],
      // 修改雷达图的大小 圆环半径
      radius: "65%",
        // polygon circle 雷达图绘制类型
      shape: "circle",
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色 五个角文字的颜色
        textStyle: {
          color: "#4c9bfd"
          // color:'orange'
        }
      },
      // 分割的圆圈线条的样式
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255, 0.5)"
          // color:"orange"
        }
      },
      // 是否显示分割区域(每一个环间的区域)
      splitArea: {
        show: false
      },
      // 轴线(半径线)修改为白色半透明, 
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)"
          // color:'pink'
        }
      }
    },
    series: [
      {
        name: "北京",
        type: "radar",
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
          }
        },
        data: [[90, 19, 56, 11, 34]],
        // 设置图形标记 （拐点）
        symbol: "circle",
        // 这个是设置小圆点大小
        symbolSize: 5,
        // 设置小圆点颜色
        itemStyle: {
          color: "#fff"
        },
        // 让小圆点显示数据
        label: {
          show: true,
          fontSize: 10
        },
        // 修饰我们区域填充的背景颜色
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)"
          // color:'orange'
        }
      }
    ]
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

//! 销售进度 - 饼图
;(function(){
  // 初始化Echarts
  const pieChart = echarts.init(document.querySelector('.gauge'))
  // 配置项
  const option = {
      series: [
        {
          name: '销售进度',
          type: 'pie',
          // 放大图形
          radius: ['130%', '150%'],  
          // 移动下位置  套住50%文字
          center: ['48%', '80%'],  
          // 引导线 不显示
          labelLine: {
            show: false
          },
          // 起始角度 支持范围[0, 360]
          startAngle:180,
          // 鼠标经过不变大
          hoverOffset: 0, 
          data: [
            { value: 100,
              itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }},
            { value: 100,itemStyle: { color: '#12274d' }},
            { value: 200,itemStyle:{color:'transparent'}},
          ]
        }
      ]
    };
      // 3. 传递给实例
      pieChart.setOption(option)
      // 4. 浏览器缩放, echarts图表也缩放
      window.addEventListener('resize', function(){
          pieChart.resize()
      })
  }())

  //! 排行榜模块
  ;(function(){
    // 1.准备相关数据
    const hotData = [
      {
        city: '北京',  // 城市
        sales: '25, 179',  // 销售额
        flag: true, //  上升还是下降
        brands: [   //  品牌种类数据
          { name: '可爱多', num: '9,086', flag: true },
          { name: '娃哈哈', num: '8,341', flag: true },
          { name: '喜之郎', num: '7,407', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '6,724', flag: false },
          { name: '好多鱼', num: '2,170', flag: true },
        ]
      },
      {
        city: '河北',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '3,457', flag: false },
          { name: '娃哈哈', num: '2,124', flag: true },
          { name: '喜之郎', num: '8,907', flag: false },
          { name: '八喜', num: '6,080', flag: true },
          { name: '小洋人', num: '1,724', flag: false },
          { name: '好多鱼', num: '1,170', flag: false },
        ]
      },
      {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '2,345', flag: true },
          { name: '娃哈哈', num: '7,109', flag: true },
          { name: '喜之郎', num: '3,701', flag: false },
          { name: '八喜', num: '6,080', flag: false },
          { name: '小洋人', num: '2,724', flag: false },
          { name: '好多鱼', num: '2,998', flag: true },
        ]
      },
      {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
          { name: '可爱多', num: '2,156', flag: false },
          { name: '娃哈哈', num: '2,456', flag: true },
          { name: '喜之郎', num: '9,737', flag: true },
          { name: '八喜', num: '2,080', flag: true },
          { name: '小洋人', num: '8,724', flag: true },
          { name: '好多鱼', num: '1,770', flag: false },
        ]
      },
       {
        city: '山东',
        sales: '20,760',
        flag: true,
        brands: [
          { name: '可爱多', num: '9,567', flag: true },
          { name: '娃哈哈', num: '2,345', flag: false },
          { name: '喜之郎', num: '9,037', flag: false },
          { name: '八喜', num: '1,080', flag: true },
          { name: '小洋人', num: '4,724', flag: false },
          { name: '好多鱼', num: '9,999', flag: true },
        ]
      }
    ]

    // 获取左侧的ul
    const leftBox = document.querySelector('.sup')
    // map方式遍历数组
    const arr = hotData.map(function(item, index){
      console.log(item)
      return  `
          <li data-id=${index}>
            <span>${item.city}</span>
            <span>${item.sales} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span>
          </li>
      `
    })
    console.log(arr)
    // 数组转换成字符串 arr.join('')
    leftBox.innerHTML = arr.join('')

    // 2. 事件委托，给左侧盒子绑定点击事件
    // 要点2侧文字中间 触发li
    const lis = document.querySelectorAll('.sup li')
    const rightBox = document.querySelector('.sub')
    leftBox.addEventListener('click', function(e){
      if (e.target.tagName === 'LI') {
          // 排他思想 先干掉所有人， 给自己添加
          lis.forEach(function(item){
            item.classList.remove('active')
          })
          e.target.classList.add('active')
          // e.target 触发事件的元素
          // this    ==> 绑定事件的元素（事件源）
          // e.currentTarget ==> 绑定事件的元素
          const index = e.target.dataset.id
          // 获取右侧要遍历的数组brands
          const brands = hotData[index].brands

          const contentArr = brands.map(function(item){
            console.log(item)
            return `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`
          })
          rightBox.innerHTML = contentArr.join('')
      } // end if 
    })
    
    // 默认展示第一条数据
    lis[0].click()

    // 定时器 当作今天的作业 

  })()

