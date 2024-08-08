import React, { useState, useEffect } from'react';
import './Detail.css';

const Detail = (props) => {
    const [comments ,setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');


    const handleCommentSubmit = () => {

    }

    return(
        <div className='container'>
            <div className='left'>
                {props.pic == " "? <h1>暂无图片</h1> : <img src={props.pic} alt=''/>}
            </div>
            <div className='right'>
                <div className='post'>
                    <div className='post-header'>
                        <img src={props.user.avatar} alt='' className='avatar'/>
                        {props.user.username}
                    </div>
                    <div className='post-title'>{props.title}</div>
                    <div className='post-content'>{props.content}</div>
                </div>
                <div className='comments'>

                </div>
                <div className='foot'>
                <div className="comment-input">
                        <input
                            type="text"
                            placeholder="输入评论"
                            className="input-box"
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                        />
                        <button className="comment-button" onClick={handleCommentSubmit}>
                            评论
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;