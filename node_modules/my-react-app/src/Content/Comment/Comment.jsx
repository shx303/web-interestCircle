import React from 'react';
import './Comment.css';



const Comment = (props) => {
    return (
      <div className="comment">
        <div className="comment-header">
          <span className="comment-author">{props.author_username}</span>
        </div>
        <div className="comment-content">
          {props.content}
        </div>
      </div>
    );
  };
  
  export default Comment;
