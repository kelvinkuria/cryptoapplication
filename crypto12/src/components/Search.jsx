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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the handleSearch function with the current search text
        handleSearch(searchText);
      };
  
   
    return (
        <>
          {/* Search form */}
          <form onSubmit={handleSubmit} className="w-96 relative flex items-center ml-7 font-nunito">
            <input
              type="text"
              name="search"
              onChange={handleInput}
              value={searchText}
              className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
              placeholder="search here..."
            />
            
            <button type="submit" className="absolute right-1 cursor-pointer">
              <img src={searchIcon} className="w-full h-auto" alt="search" />
            </button>
          </form>
          {/* Display search results */}
          {searchText.length > 0 && searchData && (
            <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200">
              {/* Map through search data*/}
              {searchData.map((coin) => (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    };
    



const Search = () => {
  return (
    <div className="relative">
       <SearchInput handleSearch={debounceFunc} />
    </div>

  )
}

export default Search
