// LoginForm.js
import React, { useState } from 'react';
import { useStore } from '../store/myStore';

const LoginForm = ({ onLoginSuccess }) => {
  const { login } = useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!username.trim() || !password.trim()) {
        throw new Error('Username and password are required.');
      }

      const user = await login(username, password);

      if (user) {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
