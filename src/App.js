import React, { useState,useEffect} from "react";

import Moviecard from "./Moviecard";
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=cfb42f45';

const movie1 = {
    
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    
}


const App =() =>{
     const [searchTerm , setSearchTerm] = useState("");
     const [movies , setMovies] = useState([]);

     useEffect(()=>{
        searchmovies('spiderman');
      },[]);

    const searchmovies =async(title)=>{
        const resonse= await fetch(`${API_URL}&s=${title}`);
        const data = await resonse.json();

        setMovies(data.Search);
    }



    return(
        <div className="app">
            <h1> MovieLand</h1>
            <div className="search">
                <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="search for movies"
                />
                <img
                 src={SearchIcon}
                 alt="search"
                 onClick={()=>searchmovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <Moviecard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
