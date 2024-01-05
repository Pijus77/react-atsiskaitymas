// Navbar.js
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  // State to hold the total item count
  const [totalItems, setTotalItems] = useState(0);

  // Effect to run when total item count changes
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    const cartArr = JSON.parse(cartData);
    const numberOfProducts = cartArr.length;
    setTotalItems(numberOfProducts);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href='/shop'>Shop</a>
        </li>
        <li>
          {/* Display the total item count in the navigation bar */}
          <a href='/cart'>Cart ({totalItems})</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
