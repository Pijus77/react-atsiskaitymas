// RegistrationForm.js
import React, { useState } from 'react';
import { useStore } from '../store/myStore';

const RegistrationForm = ({ onRegisterSuccess }) => {
  const { addUser } = useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    try {
      if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
        throw new Error('All fields are required.');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      if (username.length < 4 || username.length > 20) {
        throw new Error('Username must be between 4 and 20 characters.');
      }

      if (password.length < 4 || password.length > 20) {
        throw new Error('Password must be between 4 and 20 characters.');
      }

      if (!/\d/.test(password)) {
        throw new Error('Password must contain at least one number.');
      }

      await addUser(username, password);

      setSuccessMessage('Registration successful!');

      if (onRegisterSuccess) {
        onRegisterSuccess();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
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
        <label>
          Confirm Password:
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='button' onClick={handleRegister}>
          Register
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
