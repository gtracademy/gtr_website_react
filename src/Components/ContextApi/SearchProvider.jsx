// src/context/SearchProvider.jsx
import React, { useState, useEffect } from "react";
import SearchContext from "./SearchContext";

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch course data from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://gtr-academy-backend.onrender.com/api/course");  
        const data = await res.json();

        if (data.status && Array.isArray(data.course)) {
          setCourses(data.course); // ✅ Correctly store the course array
        } else {
          setCourses([]);
          setError("Unexpected response format");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ✅ Filter logic for search
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredCourses([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = courses.filter((course) => {
      // Adjust these keys based on your actual API response
      return (
        course.courseTitle?.toLowerCase().includes(lowerQuery) ||
        course.courseDescription?.toLowerCase().includes(lowerQuery)
      );
    });

    setFilteredCourses(filtered);
  }, [query, courses]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filteredCourses,
        setFilteredCourses,
        courses,
        loading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
