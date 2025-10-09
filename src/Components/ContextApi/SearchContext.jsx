// src/context/SearchContext.js
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default SearchContext;
