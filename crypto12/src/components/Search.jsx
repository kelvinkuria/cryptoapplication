import debounce from "lodash.debounce";
import React, { useState, useContext} from 'react'
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";


const SearchInput = ({ handleSearch }) => {
    
    const [searchText, setSearchText] = useState("");
    // Accessing context for search data and search functions
    const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);
  
    // Event handler for handling input changes in the search field
    const handleInput = (e) => {
      const query = e.target.value;
      setSearchText(query);
      // Call the handleSearch function passed from the parent component
      handleSearch(query);
    };
  
   
  };



const Search = () => {
  return (
    <div className="relative">
       <SearchInput handleSearch={debounceFunc} />
    </div>

  )
}

export default Search
