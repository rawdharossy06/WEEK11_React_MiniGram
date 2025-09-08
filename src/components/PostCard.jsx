import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
      <h2>{username}</h2>
      <img src={imageUrl} alt={caption} />
      <p>{caption}</p>
      <div className="post-actions">
        <button onClick={onLike}>
          <Heart /> {likes}
        </button>
      </div>
    </div>
  );
}

export default PostCard ;
