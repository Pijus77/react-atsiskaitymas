// CreatePostPage.js

import React, { useRef } from 'react';
import { useStore } from '../store/myStore';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const { addPost } = useStore();
  const navigate = useNavigate();

  const create = () => {
    const newPost = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
    };

    addPost(newPost);
    navigate('/');
  };

  return (
    <div>
      <NavBar />
      <div className='create-post-container'>
        <input
          type='text'
          ref={titleRef}
          placeholder='Title'
          className='create-post-input'
        />
        <input
          type='text'
          ref={imageRef}
          placeholder='Image URL'
          className='create-post-input'
        />
        <textarea
          ref={descriptionRef}
          placeholder='Description'
          className='create-post-input'
        ></textarea>
        <button onClick={create} className='create-post-button'>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePostPage;
