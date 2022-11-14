// src/index.js 是js的入口文件
// 引入ReactDOM
import ReactDOM  from 'react-dom/client';
//导入样式表
import "./index.css"
import App from './App'

const App1=<App/>


const root=ReactDOM.createRoot(document.querySelector('#root'))

root.render(App1)