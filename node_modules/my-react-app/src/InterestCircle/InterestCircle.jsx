
import React, { useState } from'react';
import './InterestCircle.css';
import Guide from '../Content/Guide/Guide';


function InterestCircle(){ 
    return (
        <div className='InterestCircle-container'>
            <div  className='InterestCircle'>
                <h1>尽力而为的兴趣圈</h1>
                <Guide />
            </div>
        </div>
    )
}
export default InterestCircle;