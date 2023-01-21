import { useEffect} from "react";

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
        <h1> App </h1>
    );
}

export default App;
