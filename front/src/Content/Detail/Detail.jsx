import React, { useState, useEffect } from'react';
import './Detail.css';
import axios from 'axios';
import Comment from '../Comment/Comment';

const Detail = (props) => {
    const [comments ,setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [imageUrl, setImageUrl] = useState(null); 

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
          // 获取图片
        axios.get('http://127.0.0.1:7001/download',{
            params: {
                imageName: props.picname,
            },
            responseType: 'arraybuffer'
        }).then (response => {
            const blob = new Blob([response.data], { type: 'image/jpg' });
            const this_imageurl = URL.createObjectURL(blob);
            setImageUrl(this_imageurl).then(() => console.log(imageUrl));
            //console.log(this_imageurl);
        })
        .catch(error => {
            console.log(error);
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
            {imageUrl ? (  
                <img src={imageUrl} alt="来自后端的图片" style={{ maxWidth: '100%' }} />  
            ) : (  
                <p>暂无图片</p>  
      )} 
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