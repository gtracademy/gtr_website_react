// src/components/MentorSection.jsx
import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard'

const MentorSection = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://gtr-academy-backend.onrender.com/api/mentor')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch mentors');
        }
        return response.json();
      })
      .then((data) => {
        setMentors(data.mentor || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Meet Our Mentors
        </h2>

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400">Loading mentors...</p>
        )}
        {error && (
          <p className="text-center text-red-500">Error: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <MentorCard
                key={mentor._id}
                name={mentor.name}
                designation={mentor.designation}
                photo={mentor.photo}
                bio={mentor.bio}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorSection;
