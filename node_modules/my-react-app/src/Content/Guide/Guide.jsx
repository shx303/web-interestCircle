import React, { useState, useEffect } from'react';
import './Guide.css';
import axios from 'axios';

const Guide = () => {

    let [interests, setInterests] = useState([]);
    const [newInterest, setNewInterest] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:7001/card/GetInterrestCircleList')
        .then(res => {
             setInterests(res.data);
         })
        .catch(err => {
            console.log(err); 
        }); 
    })

    const handleInputChange = (e) => {
        setNewInterest(e.target.value);
    }

    const addInterest = () => {
        axios.post('http://127.0.0.1:7001/card/AddInterrestCircle', {
            name: newInterest
        }).then(() => {
            axios.get('http://127.0.0.1:7001/card/GetInterrestCircleList')
            .then(res => {
                setInterests(res.data);
            })
        })      
    };

    return (
        <div className="interest-navbar">
            {interests.map((interest, index) => (
            <div key={index} className="interest-item" >
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
                <button onClick={addInterest}>+</button>
            </div>
        </div>
    )
}

export default Guide;