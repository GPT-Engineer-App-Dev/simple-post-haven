import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, excerpt, date }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">
        <Link to={`/post/${id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
      <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
      <Link to={`/post/${id}`} className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
        Read more →
      </Link>
    </div>
  );
};

export default BlogPost;