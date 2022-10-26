import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilmList from '../components/FilmList';
import Tags from "../components/Tags";

function Movies({activePage, setTotalPage}) {
    const [films, setFilms]  = useState([]);
    const [mediaType, setMediaType] = useState("movie");
    const [genres, setGenres] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    const filterTag = (tag) => {
      let hasTag = selectedTags.find(tags => tags === tag.id) 
      if(hasTag){
        console.log(hasTag);
        console.log(selectedTags.indexOf(hasTag));
      }else {
        setSelectedTags([...selectedTags, tag])
      }
      console.log(selectedTags)
    };

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`).then(response => {
            setFilms(response.data.results);
            setTotalPage(response.data.total_pages);
        })
    }, [activePage])
  return (
    films.length !== 0 ? 
    
    <><Tags filterTag={filterTag}  genres={genres} setGenres={setGenres}/>
        <FilmList genres={genres} mediaType={mediaType} films={films}/></> : <></>
  )
}

export default Movies