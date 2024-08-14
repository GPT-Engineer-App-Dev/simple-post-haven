import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 mb-4">
          Hello! I'm a passionate developer and writer. This blog is where I share my thoughts,
          experiences, and insights about web development, technology, and life as a programmer.
        </p>
        <p className="text-gray-700 mb-4">
          Feel free to explore my posts and reach out if you have any questions or just want to chat!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;