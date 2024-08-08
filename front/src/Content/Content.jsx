import React from'react';   
import './Content.css';
import Card from './Card/Card';
import { useState } from 'react';


function Content() {
  const [cards , setCards] = React.useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({ title: '', description: '', image: '' });

  const handleAddCard = () => {
    setShowModal(true);
  };

  const handleCreateCard = () => {
    setCards([...cards, newCard]);
    setNewCard({ title: '', description: '', image: '' });
    setShowModal(false);
  };

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
          <Card key={index} title={card.title} description={card.description} /> // 渲染卡片
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