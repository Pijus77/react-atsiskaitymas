// AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { useStore } from '../store/myStore';

const AuthPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const { myUser } = useStore();
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  const handleLoginSuccess = () => {
    navigate('/IndexPage');
  };

  return (
    <div>
      {showRegistration ? (
        <RegistrationForm />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}

      <button onClick={handleToggleForm}>
        {showRegistration ? 'Switch to Login' : 'Switch to Register'}
      </button>

      {myUser && <p>Welcome, {myUser.username}!</p>}
    </div>
  );
};

export default AuthPage;
