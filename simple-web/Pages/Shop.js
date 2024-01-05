// Shop.js
import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import Card from '../components/Card';
import useSelectedItem from '../components/useSelectedItem';
import Cart from './Cart';
// Import statements

const Shop = () => {
  const [items, setItems] = useState([]);
  const { selectedItem, selectItem } = useSelectedItem();
  const [cart, setCart] = useState([]);

  const handleItemClick = (item) => {
    selectItem(item);
  };
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, increase its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className='shop'>
      <h1>Shop</h1>
      {selectedItem ? (
        <ProductDetails
          selectedItem={selectedItem}
          addToCart={() => addToCart(selectedItem)}
        />
      ) : (
        <div>
          <div className='card-container'>
            {items.map((item) => (
              <Card
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
