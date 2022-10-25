import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilmList from '../components/FilmList';

function Movies({activePage, setTotalPage}) {
    const [films, setFilms]  = useState([]);
    const [mediaType, setMediaType] = useState("movie");
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`).then(response => {
            setFilms(response.data.results);
            setTotalPage(response.data.total_pages);
        })
    }, [activePage])
  return (
    films.length !== 0 ? 
        <FilmList mediaType={mediaType} films={films}/> : <></>
  )
}

export default Movies