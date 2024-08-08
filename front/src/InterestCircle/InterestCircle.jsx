
import React, { useState } from'react';
import Search from './Search/Search';
import './InterestCircle.css';
import Guide from './Guide/Guide';


function InterestCircle(){ 

    const handleSearch = (quary) => {
        console.log(quary);
    }

    
    return (
        <div className='InterestCircle-container'>
            <div  className='InterestCircle'>
                <h1>不抽象的兴趣圈</h1>
                <Search  onSearch = {handleSearch} />
                <Guide />
            </div>
        </div>
    )

}
export default InterestCircle;