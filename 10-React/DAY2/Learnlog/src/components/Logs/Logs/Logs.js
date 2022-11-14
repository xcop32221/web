import Logitem from '../Logitem/Logitem'
import './logs.css'



let logsArr={date:new Date(),desc:'学习前端',time:80}
const Logs=()=>{
    return <div className="logs">
        <Logitem date={logsArr.date} desc={logsArr.desc} time={[logsArr.time]}></Logitem>
    </div>
}

export default Logs