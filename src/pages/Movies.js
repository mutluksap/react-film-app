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
      let hasTag = selectedTags.find(tags => tags.id === tag.id) 
      if(hasTag){
       // https://api.themoviedb.org/3/discover/movie?api_key=3ae68406806beaa82862f2c74b530477&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12,878
        setSelectedTags(selectedTags.filter(item => item.id !== tag.id))
      }else {
        setSelectedTags([...selectedTags, tag])
      }
    };

    useEffect(() => {
      const fetchLink = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`
      
      axios.get(selectedTags.length ? fetchLink + `&with_genres=${selectedTags.map(tag => tag.id).join(',')}`: fetchLink).then(response => {
            setFilms(response.data.results);
            setTotalPage(response.data.total_pages);
        })
    }, [activePage, selectedTags])
  return (
    films.length !== 0 ? 
    
    <><Tags filterTag={filterTag} selectedTagList={selectedTags} genres={genres} setGenres={setGenres}/>
        <FilmList genres={genres} mediaType={mediaType} films={films}/></> : <></>
  )
}

export default Movies