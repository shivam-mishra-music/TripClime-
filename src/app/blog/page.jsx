'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Top 5 Hidden Gems to Travel in 2025',
      summary: 'Explore the lesser-known but breathtaking places you should add to your bucket list this year.',
      date: 'May 1, 2025',
    },
    {
      title: 'How to Pack Smart for Any Weather',
      summary: 'A comprehensive guide to help you pack efficiently based on the weather forecast.',
      date: 'April 18, 2025',
    },
    {
      title: 'Why Weather-First Planning Saves Trips',
      summary: 'Discover how using weather data before planning avoids disappointment.',
      date: 'March 30, 2025',
    },
  ];

  return (
    <div>
        <Navbar />
    <div className="px-6 py-16 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">Our Travel Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-650">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
