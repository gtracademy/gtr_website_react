// src/context/SearchProvider.jsx
import React, { useState } from "react";
import SearchContext from "./SearchContext";

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  return (
    <SearchContext.Provider
      value={{ query, setQuery, filteredCourses, setFilteredCourses }}
    >
      {children}
    </SearchContext.Provider>
  );
};
