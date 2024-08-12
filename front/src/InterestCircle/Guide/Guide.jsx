import React, { useState } from'react';
import './Guide.css';

const Guide = () => {

    let [interests, setInterests] = useState([
        '全部'
    ]);
    const [newInterest, setNewInterest] = useState('');

    const handleInputChange = (e) => {
        setNewInterest(e.target.value);
    };

    return (
        <div className="interest-navbar">
            {interests.map((interest, index) => (
            <div key={index} className="interest-item">
                {interest}
            </div>
            ))}
            <div className='add-interest'>
                <input 
                    type="text" 
                    value={newInterest} 
                    onChange={handleInputChange} 
                    placeholder="添加兴趣圈" 
                />
                <button onClick={handleInputChange}>+</button>
            </div>
        </div>
    )
}

export default Guide;