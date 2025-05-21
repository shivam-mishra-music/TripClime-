'use client';
import React from "react";

const PlaceCard = ({ place, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={() => onClick(place.name)}
    >
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold">{place.name}</h4>
        <p className="text-gray-500">{place.country}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
