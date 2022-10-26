
import React, {useEffect} from "react";
import axios from "axios";
import Tag from "./Tag";

function Tags({genres,setGenres, filterTag, selectedTagList}) {


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => setGenres(response.data.genres));
    }, []);
  if(genres.length !== 0)
  return (
    <>
        <ul className="tags">
            
            {genres.map((genre, index) => {
              const tagIsSelected = selectedTagList?.find(selectedTag => {
                return selectedTag.id === genre.id
              })
              return <Tag filterTag={filterTag} genre={genre} key={index} isSelected={tagIsSelected}/>
            })}
            
        </ul>
    </>
  )
}

export default Tags