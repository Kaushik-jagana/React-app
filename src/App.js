import { useEffect} from "react";

import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=cfb42f45';

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
        </div>
    );
}

export default App;
