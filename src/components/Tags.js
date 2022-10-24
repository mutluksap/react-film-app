
import React, {useEffect, useState} from "react";
import axios from "axios";
import Tag from "./Tag";

function Genres() {

const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`)
        .then(response => setGenres(response.data.genres));
    }, []);

 if(genres.length !== 0)
  return (
    <div>
        <ul>
            <li>
            {genres.map((genre, index) => <Tag genre={genre} key={index}/>)}
            </li>
        </ul>
    </div>
  )
}

export default Genres