import './Google.css'
import React, { useState } from 'react';

const GoogleSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([

    
          'price of Ethereum',
             'Oculus Quest 2 specs',
             'Tesla share price',
             'price of ethereum today',
             'latest trends in AL',
             'latest trends in ML'
    
  ]);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterSuggestions(query);
  };

  const handleSearch = () => {
    // Perform search logic with the search query
    console.log('Searching for:', searchQuery);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch();
  };

  const handleDeleteSuggestion = (index) => {
    const updatedSuggestions = [...suggestions];
    updatedSuggestions.splice(index, 1);
    setSuggestions(updatedSuggestions);
    filterSuggestions(searchQuery);
  };

  const filterSuggestions = (query) => {
    if (query === '') {
      setFilteredSuggestions(suggestions);
    } else {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  return (
    <div className='text-center mt-5'> 

    <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" alt="" width={200}/><br />
        <i class="fa-solid fa-magnifying-glass"></i>
      <input className='input1 mx-3 'style={{fontSize:"20px"}}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search Google"
      />
      <span onClick={handleSearch}><i class="fa-solid fa-xmark mb-5 "></i></span>
      

      <ul className='google'>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)} className='py-2 mx-2' style={{fontSize:"26px"}}>
            {suggestion}
            <span onClick={() => handleDeleteSuggestion(index)}>
            <i class="fa-solid fa-arrow-up mx-4"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSearch;