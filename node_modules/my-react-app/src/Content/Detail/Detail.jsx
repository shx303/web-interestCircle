import React, { useState, useEffect } from'react';
import './Detail.css';
import axios from 'axios';
import Comment from '../Comment/Comment';

const Detail = (props) => {
    const [comments ,setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:7001/card/GetCommentList',{
            params: {
                cardId: props.id,
            }
        })
          .then(response => {
            setComments(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the cards!', error);
          });
      }, []);

    const handleCommentSubmit = () => {
        axios.post('http://127.0.0.1:7001/card/AddComment', {
            belongTo_id: props.id,
            content: commentInput,
        }).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            axios.get('http://127.0.0.1:7001/card/GetCommentList',{
                params: {
                    cardId: props.id,
                }
            })
              .then(response => {
                console.log(response.data);
                console.log(props.id);
                setComments(response.data);
            })
              .catch(error => {
                console.error('There was an error fetching the cards!', error);
            });
        });
    }

    const handleclose =() =>{
        props.onClose();
    }

    return(
        <div className = 'container'>
            <div className='left'>
                {props.pic == " "? <h1>暂无图片</h1> : <img src={props.pic} alt=''/>}
            </div>
            <div className='right'>
                <div className='post'>
                    <div className='post-header'>
                        {/* <img src={props.user.avatar} alt='none' className='avatar'/> */}
                        {props.username}
                    </div>
                    <div className='post-title'>{props.title}</div>
                    <div className='post-content'>{props.content}</div>
                </div>
                <div className='comments'>
                {comments.map((comment, index) => (
                    <Comment key={index} id={props.id} author_username={comment.author_username} content={comment.content} /> // 渲染评论
                ))}
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
                        <button className='close' onClick = {handleclose}>
                        X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;