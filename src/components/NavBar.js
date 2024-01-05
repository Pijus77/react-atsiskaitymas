// NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/myStore';

const NavBar = () => {
  const { logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <Link to='/Profile' className='navbar-link'>
        Profile
      </Link>
      <Link to='/' className='navbar-link'>
        Home
      </Link>
      <Link to='/CreatePostPage' className='navbar-link'>
        Create Post
      </Link>
      <button onClick={handleLogout} className='navbar-logout'>
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
