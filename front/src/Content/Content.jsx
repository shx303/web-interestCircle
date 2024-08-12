import React from'react';   
import './Content.css';
import Card from './Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Content() {
  const [cards , setCards] = React.useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({ title: '', description: '', image: '' });

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
    //setCards([...cards, newCard]);
    //setNewCard({ title: '', description: '', image: '' });

    axios.post('http://127.0.0.1:7001/card/AddCard', {
      belongingInterestCircle : "ALL",
      title: newCard.title,
      content: newCard.description,
    }).then(response => {
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
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCard({ ...newCard, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="content">
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key = {index} id={card.id} title={card.title} content={card.content} /> // 渲染卡片
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