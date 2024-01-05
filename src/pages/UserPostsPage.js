// UserPostsPage.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useStore } from '../store/myStore';

const UserPostsPage = () => {
  const { username } = useParams();
  const { posts } = useStore();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const postsByUser = posts.filter((post) => post.username === username);
    setUserPosts(postsByUser);
  }, [username, posts]);

  return (
    <div>
      <NavBar />
      <h2>{`${username}'s Posts`}</h2>
      <div className='posts-container'>
        {userPosts.map((post) => (
          <Link to={`/post/${post.id}`} className='post-link' key={post.id}>
            <div className='post'>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-description'>{post.description}</p>
              <p className='post-author'>
                Posted by: <span>{post.username}</span>
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

export default UserPostsPage;
