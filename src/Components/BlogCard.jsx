// BlogCard.js
import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default BlogCard;
