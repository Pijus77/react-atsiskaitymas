// IndexPage.js

import React, { useState } from 'react';
import { useStore } from '../store/myStore';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const IndexPage = () => {
  const { posts } = useStore();
  const [sortedPosts, setSortedPosts] = useState(posts.slice());
  const navigate = useNavigate();

  const sortByDate = () => {
    const sorted = posts
      .slice()
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setSortedPosts(sorted);
  };

  const sortByName = () => {
    const sorted = posts
      .slice()
      .sort((a, b) => a.username.localeCompare(b.username));
    setSortedPosts(sorted);
  };

  return (
    <div>
      <NavBar />

      <h2>Latest Posts</h2>
      <div className='sort-buttons'>
        <button onClick={sortByDate}>Sort by date</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>

      <div className='posts-container'>
        {sortedPosts.map((post) => (
          <Link to={`/post/${post.id}`} className='post-link' key={post.id}>
            <div className='post'>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-description'>{post.description}</p>
              <p className='post-author'>
                Posted by:{' '}
                <span onClick={() => navigate(`/userposts/${post.username}`)}>
                  {post.username}
                </span>
              </p>
              <img
                className='post-image'
                src={post.image}
                alt={`Image for ${post.title}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
