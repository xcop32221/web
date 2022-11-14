import React from 'react';
import Mydate from '../Mydate/Mydate';
import './logitems.css'
const Logitem = (props) => {
    return (
        <div className='item'>
            <Mydate date={props.date}></Mydate>
        <div className='content'>
            {/* 如果将组件中的数据写死
            组件无法动态设置，没有实用价值
            组件中的数据从外部设置：
            props属性
            */}
         <h2 className='desc'>{props.desc}</h2>
         <div className='time'>{props.time}</div>
         
     </div>
        </div>
    );

}; 


export default Logitem;