// src/components/MentorCard.jsx
import React from 'react';

const MentorCard = ({ name, designation, photo, bio }) => {
  const placeholder = "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="h-52 w-full bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src={photo || placeholder}
          alt={name}
          onError={(e) => e.target.src = placeholder}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-sm text-blue-500 dark:text-blue-400 mb-2">{designation}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{bio}</p>
      </div>
    </div>
  );
};

export default MentorCard;
