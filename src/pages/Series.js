import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilmList from '../components/FilmList';

function Series({activePage, setTotalPage, genres}) {
    const [films, setFilms]  = useState([]);
    const [mediaType, setMediaType] = useState("tv");
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`).then(response => {
            setTotalPage(response.data.total_pages)
            setFilms(response.data.results);
        })
        
    }, [activePage])
  return (
    films.length !== 0 ? 
    <FilmList genres={genres} films={films} mediaType={mediaType}/>
    : <></>
  )
}

export default Series