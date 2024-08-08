import React from'react';
import './Card.css';
import Detail from '../Detail/Detail';  

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  handleTitleClick = () => { 
    this.setState({ showDetail: true });
  }

  render() {
    const { title, description, commentsCount, likeCount } = this.props;
    const { showDetail } = this.state;

    return (
      <>
        <div className="card">
            <button className="title-button" onClick={this.handleTitleClick}>{title}</button>
            <p className="description">{description}</p>
            <div className="footer">
                <button className="like-button">点赞:{likeCount}</button>
                <span className="comments-count">评论数:{commentsCount}</span>
            </div>
        </div>

        {showDetail && <Detail title={title} description={description} commentsCount={commentsCount} likeCount={likeCount} />}
      </> 
    );
  }
}

export default Card;