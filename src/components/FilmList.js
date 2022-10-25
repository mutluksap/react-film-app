import React from 'react'
import Film from './Film';

function FilmList({films, mediaType}) {
  return (
    <div className='film-list'>
        {
            films.map((film, index) => (<Film mediaType={mediaType} key={index} film={film} />))
        }
        <Film/>
    </div> 
  )
}

export default FilmList