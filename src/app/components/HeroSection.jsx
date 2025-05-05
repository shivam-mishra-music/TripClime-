import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <img
        src="./public/Travel2.gif"
        alt="Travel background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Discover the Beauty of the World
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
          “Travel far enough, you meet yourself.”
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Check Weather
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
