// Card.js
import React from 'react';

const Card = ({ item, onItemClick, onAddToCart }) => {
  return (
    <div className='card' onClick={() => onItemClick(item)}>
      <img src={item.image} alt={item.title} className='card-img' />
      <div className='card-details'>
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
