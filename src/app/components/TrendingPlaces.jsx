import React from "react";
import PlaceCard from "./PlaceCard";

const TrendingPlaces = () => {
  // Sample static data
  const indiaPlaces = [
    { name: "Manali", image: "/manali.jpg", country: "India" },
    { name: "Jaipur", image: "/jaipur.jpg", country: "India" },
    { name: "Goa", image: "/goa.jpg", country: "India" },
  ];

  const foreignPlaces = [
    { name: "Paris", image: "/paris.jpg", country: "France" },
    { name: "Tokyo", image: "/tokyo.jpg", country: "Japan" },
    { name: "Bali", image: "/bali.jpg", country: "Indonesia" },
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Places</h2>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Popular in India</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {indiaPlaces.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">Foreign Trips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foreignPlaces.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlaces;
