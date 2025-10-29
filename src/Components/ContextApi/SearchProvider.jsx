import React, { useState, useEffect, useRef } from "react";
import SearchContext from "./SearchContext";

export const SearchProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTimerRef = useRef(null);

  // ✅ Fetch course data from API with basic debounce (prevents multiple re-fetch)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://gtr-academy-backend.onrender.com/api/course");
        const data = await res.json();

        if (data.status && Array.isArray(data.course)) {
          setCourses(data.course);
          setError(null);
        } else {
          setCourses([]);
          setError("Unexpected response format");
        }
      } catch (err) {
        console.error("Course Fetch Error:", err);
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    // Debounce API fetch (just safety — avoid too many reloads)
    if (fetchTimerRef.current) clearTimeout(fetchTimerRef.current);
    fetchTimerRef.current = setTimeout(() => fetchCourses(), 200);

    return () => clearTimeout(fetchTimerRef.current);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        courses,   // ✅ shared only for reading
        loading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
