import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useStore } from '../store/myStore';
import NavBar from '../components/NavBar';

const SinglePostPage = () => {
  const { id } = useParams();
  const { posts } = useStore();
  const [post, setPost] = useState(null);

  console.log('id:', id);
  console.log('posts:', posts);

  useEffect(() => {
    const selectedPost = posts.find((p) => p.id === parseInt(id, 10));

    if (selectedPost) {
      setPost(selectedPost);
    }
  }, [id, posts]);

  return (
    <div>
      <NavBar />
      {post ? (
        <div key={post.id} className='d-flex'>
          <img
            src={post.image}
            alt={`Image for ${post.title}`}
            className='post-image'
          />
          <div className='post-details-container'>
            <div className='post-details-content'>
              <h3 className='post-title'>{post.title}</h3>
              <Link to={`/userposts/${post.username}`} className='post-author'>
                {post.username}
              </Link>
              <p className='post-timestamp'>
                {new Date(post.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default SinglePostPage;
