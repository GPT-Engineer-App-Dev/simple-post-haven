import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to get started with your first project.",
    date: "April 1, 2024"
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "Tailwind CSS is a utility-first CSS framework that can significantly speed up your development process. Learn how to leverage Tailwind in your projects.",
    date: "April 5, 2024"
  },
  {
    id: 3,
    title: "Building a Personal Blog with React",
    excerpt: "Follow along as we create a personal blog using React, React Router, and Tailwind CSS. We'll cover component structure, routing, and styling.",
    date: "April 10, 2024"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        {blogPosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;