// Cart.js
import React, { useEffect, useState } from 'react';

function Cart({ onItemsChange }) {
  // State to hold the cart items
  const [cartArr, setCartArr] = useState([]);
  // State to track the total number of items in the cart
  const [totalItems, setTotalItems] = useState(0);
  // State to track the total price of items in the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // Effect to run when the component mounts or when onItemsChange prop changes
  useEffect(() => {
    // Read cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      // Parse the stored cart data
      const parsedCart = JSON.parse(storedCart);
      // Update the state with the cart data
      setCartArr(parsedCart);
      // Calculate and update the total items and total price
      calculateTotals(parsedCart);
      // Check if the onItemsChange prop is defined before calling it
      if (onItemsChange) {
        // Notify the parent component about the total number of items in the cart
        onItemsChange(parsedCart.length);
      }
    }
  }, [onItemsChange]);

  // Function to calculate total items and total price
  const calculateTotals = (cartItems) => {
    const itemsCount = cartItems.length;
    const price = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalItems(itemsCount);
    setTotalPrice(price);
  };

  // Function to remove an item from the cart
  const removeItem = (item) => {
    setCartArr((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );

    // Update local storage
    localStorage.setItem(
      'cart',
      JSON.stringify(cartArr.filter((cartItem) => cartItem.id !== item.id))
    );

    // Recalculate totals
    calculateTotals(cartArr.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cartArr && cartArr.length > 0 ? (
        <ul>
          {cartArr.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>-${item.price}</p>
              <button onClick={() => removeItem(item)}>Remove Item</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className='totals'>
        <div>Total Items: {totalItems}</div>
        <div>Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Cart;
