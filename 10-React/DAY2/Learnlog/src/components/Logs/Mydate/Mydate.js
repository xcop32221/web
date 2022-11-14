import React from 'react';
import './Mydate.css'
const Mydate = (props) => {
    console.log(props)
    return (
        <div>
            <div className='date'>
         <div className='month'>
             4
         </div>
         <div className='day'>
             19
         </div>
     </div>
        </div>
    );
};

export default Mydate;