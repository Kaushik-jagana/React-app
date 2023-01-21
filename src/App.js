import { useEffect} from "react";

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
   
    const searchmovies =async(title)=>{
        const resonse= await fetch(`${API_URL}&s=${title}`);
        const data = await resonse.json();

        console.log(data.Search);
    }

    useEffect(()=>{
      searchmovies('spiderman');
    },[]);

    return(
        <div className="app">
            <h1> MovieLand</h1>
            <div className="search">
                <input
                placeholder="search for movies"
                />
                <img
                 src={SearchIcon}
                 alt="search"
                 onClick={()=>{}}
                />
            </div>
            <div className="container">
              <Moviecard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App;
