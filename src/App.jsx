import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'

const API_BASE_URL = "https://www.omdbapi.com/";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY



const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movie, setMovie] = useState({movie: "no"});
  const url = API_BASE_URL + `apikey=${API_KEY}&t=${searchTerm}`;

  
  useEffect(() => {
    console.log(movie);
    console.log("I worked - Yay!");
  }, [movie]);
  


  async function fetchMovie () {

    
    try {

      const url = API_BASE_URL + `?apikey=${API_KEY}&t=${searchTerm}`;
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessage("Movie not found");
        
        throw new Error(`Response status: ${response.status}`);
        
      }

      const result = await response.json();
      
      
      if (result.Response == 'False') {
        setErrorMessage("Movie not found");
        console.log(errorMessage);
        
      }
      else {
        setErrorMessage("");
        setMovie(result);
        
        
      }
      console.log(result);
      

    

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      
    }
    
  };

 



  
  return (
    <main>
    <div className='pattern'/>

    <div className='wrapper grid justify-items-center'>
      
      <header>
        
        <img src='./hero-img.png' alt='Hero banner'/>
        
        <h1>
        Find <span className="text-gradient">Movies</span> you will enjoy without the hassle. 
        </h1>
        <Search fetchMovie={fetchMovie} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h2 className="text-center text-red-500">{errorMessage}</h2>
      </header>
      
      
      { movie.movie == "no" ? null : <Card movie={movie}/>}
      

      
      
     
    
    </div>
    </main>

  )
}

export default App