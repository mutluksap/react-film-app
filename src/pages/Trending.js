import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilmList from '../components/FilmList';

function Trending({activePage, setTotalPage}) {
    const [films, setFilms]  = useState([]);
    const [mediaType, setMediaType] = useState("");
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true`).then(response => {
            setTotalPage(response.data.total_pages);
            setFilms(response.data.results);
        })
    }, [activePage])

  return (
    films.length !== 0 ? 
        <FilmList films={films} mediaType={mediaType}/>
        : <></>
  )
}

export default Trending