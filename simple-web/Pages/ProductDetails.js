import React from 'react';

const ProductDetails = ({ selectedItem, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(selectedItem);
  };

  return (
    <div className='selected-item'>
      <img src={selectedItem.image} alt={selectedItem.title} />
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.price}</p>
      <p>{selectedItem.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
