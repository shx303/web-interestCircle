import React from'react';   
import './Content.css';
import Card from './Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Content() {
  const [cards , setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({ title: '', description: '', picname: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:7001/card/GetCardList')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cards!', error);
      });
  }, []);

  const handleAddCard = () => {
    setShowModal(true);
  };

  const handleCreateCard = () => {
    axios.post('http://127.0.0.1:7001/card/AddCard', {
      belongingInterestCircle : "ALL",
      title: newCard.title,
      content: newCard.description,
      picname : newCard.picname
    }).then(response => {
      //上传图片
      const formData = new FormData();
      formData.append('${newCard.title}', selectedFile);
      axios.post('http://127.0.0.1:7001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log('上传成功', response.data);
      }).catch(error => {
        console.error('上传失败', error);
      });
    
      //更新卡片
      axios.get('http://127.0.0.1:7001/card/GetCardList')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cards!', error);
      });
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
    setShowModal(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setNewCard({ ...newCard, picname: e.target.files[0].name });
  };

  return (
    <div className="content">
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key = {index} id={card.id} title={card.title} content={card.content} picname={card.picname} /> // 渲染卡片
        ))}
      </div>
      <button 
        className="add-card-button" 
        onClick={handleAddCard}
        >
        +
      </button>


      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>发帖</h2>
            <input 
              type="text" 
              name="title" 
              placeholder="标题" 
              value={newCard.title} 
              onChange={handleInputChange} 
            />
            <textarea 
              name="description" 
              placeholder="内容" 
              value={newCard.description} 
              onChange={handleInputChange} 
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
            <button onClick={handleCreateCard}>创建</button>
            <button onClick={() => setShowModal(false)}>取消</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;