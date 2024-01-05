import React from 'react';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import NavBar from './components/NavBar';
import { useStore } from './store/myStore';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import UserPostsPage from './pages/UserPostsPage';
import SinglePostPage from './pages/SinglePostPage';
import './App.css';

const App = () => {
  const { myUser } = useStore();

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path='/'
            element={myUser ? <Navigate to='/IndexPage' /> : <AuthPage />}
          />
          <Route path='/IndexPage' element={<IndexPage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/CreatePostPage' element={<CreatePostPage />} />
          <Route path='/userposts/:username' element={<UserPostsPage />} />{' '}
          <Route path='/post/:id' element={<SinglePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
