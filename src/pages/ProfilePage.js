import React, { useState } from 'react';
import { useStore } from '../store/myStore';
import NavBar from '../components/NavBar';

const ProfilePage = () => {
  const [newUsername, setNewUsername] = useState('');
  const [error, setError] = useState(null);

  const currentUsername = useStore((state) => state.myUser.username);
  const existingUsernames = useStore((state) =>
    state.users.map((user) => user.username)
  );

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
    setError(null);
  };

  const handleSubmit = () => {
    if (existingUsernames.includes(newUsername)) {
      setError('Username already exists. Please choose a different one.');
    } else {
      useStore.setState((state) => ({
        ...state,
        myUser: {
          ...state.myUser,
          username: newUsername,
        },
      }));

      setNewUsername('');
      setError(null);
      alert('Username changed successfully!');
    }
  };

  return (
    <div>
      <NavBar />

      <h1>Profile Page</h1>
      <p>{currentUsername}'s profile page.</p>

      <div>
        <label htmlFor='newUsername'>Change Username:</label>
        <input
          type='text'
          id='newUsername'
          value={newUsername}
          onChange={handleUsernameChange}
        />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
