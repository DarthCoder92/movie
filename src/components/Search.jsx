import React from 'react'

const Search = ({searchTerm, setSearchTerm, fetchMovie}) => {

  function handleKeyDown(event) {
    if (event == 'Enter') {
      console.log("Enter pressed");
      fetchMovie();
      setSearchTerm("");
    }
  }

  return (
    <div className="search">
      <div>
        <img src='./search.svg' alt='search'/>
        <input type='text' 
        placeholder='Search through thousands of movies.' 
        value={searchTerm} 
        onChange={(event) => setSearchTerm(event.target.value)} onKeyDown={(event) => handleKeyDown(event.key)}/>
      </div>
    </div>
  )
}

export default  Search