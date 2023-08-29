import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{card.name}</h3>
        <h4>{card.nickName}</h4>
      </div>
      <img src={card.imageUrl} alt={''} />
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
