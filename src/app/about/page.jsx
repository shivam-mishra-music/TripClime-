import React from 'react';
import { FaGlobeAsia, FaCloudSun, FaPlaneDeparture } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <br/>
    <div className="px-6 py-16 bg-white text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">About TripClime</h1>
      <p className="text-center text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
        TripClime is your ultimate travel companion, designed to make your adventures smarter and more informed.
        Whether you're planning a weekend getaway or a global trip, we bring you real-time weather insights and trending destination recommendations.
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10 mt-10">
        <div className="flex flex-col items-center text-center">
          <FaGlobeAsia className="text-5xl text-blue-500 mb-3" />
          <h2 className="text-xl font-semibold">Explore Destinations</h2>
          <p className="text-gray-600 mt-2">Discover popular places in India and abroad with a curated experience.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCloudSun className="text-5xl text-yellow-500 mb-3" />
          <h2 className="text-xl font-semibold">Real-Time Weather</h2>
          <p className="text-gray-600 mt-2">Check current weather before you go, and plan confidently.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaPlaneDeparture className="text-5xl text-green-500 mb-3" />
          <h2 className="text-xl font-semibold">Smart Travel Tips</h2>
          <p className="text-gray-600 mt-2">Get tips, blogs, and help to enhance your travel experience.</p>
        </div>
      </div>

      <blockquote className="text-center italic text-gray-500 mt-12">
        “The world is a book and those who do not travel read only one page.”
      </blockquote>
    </div>
    <Footer />
    </>
  );
}
