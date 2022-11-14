import React from 'react';

const ReactEvent = () => {
    return (
            <div
            onClick={(e)=>{
                if(e.target.tagName==='A'){
                    e.preventDefault()
                    alert('点到我了')
                }
            }}
            style={{
                width:'300px',
                height:'300px',
                backgroundColor:'red'
            }}
            >
            <button 
            style={{
                width:'200px',
                height:'100px',
                margin:'100px 100px'
            }}>
            点我一下
            </button>
            <a href='http://www.baidu.com'
           
            >超链接</a>
        </div>
    );
};

export default ReactEvent;