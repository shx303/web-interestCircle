import React from'react';
import './Card.css';
import Detail from '../Detail/Detail';  

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      content :" ",
      showDetail: false,
      picname: '',
    };
  }
  handleTitleClick = () => { 
    this.setState({ showDetail: true });
  }

  render() {
    const { title, content , id , picname} = this.props;
    const { showDetail } = this.state;

    return (
      <>
        <div className="card">
            <button className="title-button" onClick={this.handleTitleClick}>{title}</button>
            <p className="description">{content}</p>
        </div>

        {showDetail && <Detail onClose={() => this.setState({ showDetail: false })} {...this.props} />}

      </> 
    );
  }
}

export default Card;