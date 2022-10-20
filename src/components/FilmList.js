import React from 'react'
import Film from './Film';

function FilmList(films) {
  return (
    <div className='film-list'>
        {
            films.films.map((film, index) => (<Film key={index} film={film} />))
        }
        <Film/>
    </div> 
  )
}

export default FilmList