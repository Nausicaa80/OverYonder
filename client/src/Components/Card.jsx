import React from 'react';

const Card = ({ item, onCardClick }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Price: {item.price}</p>
        <button onClick={() => onCardClick(item)}>Select</button>
      </div>
    </div>
  );
};

export default Card;