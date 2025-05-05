import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold">{place.name}</h4>
        <p className="text-gray-500">{place.country}</p>
        {/* Future: Add button to show weather here */}
      </div>
    </div>
  );
};

export default PlaceCard;
