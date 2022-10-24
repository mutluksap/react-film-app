import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilmList from '../components/FilmList';

function Series({activePage}) {
    const [pageCount, setPageCount] = useState('0');
    const [films, setFilms]  = useState([]);
    const [mediaType, setMediaType] = useState("tv");
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=tr-TR&sort_by=popularity.desc&include_adult=true&include_video=true`).then(response => {
             setPageCount(response.data.total_pages);
            setFilms(response.data.results);
        })
    }, [activePage])
  if(pageCount !== undefined && films.length !== 0)
  return (
    <FilmList films={films} mediaType={mediaType}/>
  )
}

export default Series