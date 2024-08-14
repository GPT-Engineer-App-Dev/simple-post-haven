import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, excerpt, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">
        <Link to={`/post/${id}`} className="text-blue-600 hover:text-blue-800">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
      <Link to={`/post/${id}`} className="mt-4 inline-block text-blue-600 hover:text-blue-800">
        Read more →
      </Link>
    </div>
  );
};

export default BlogPost;