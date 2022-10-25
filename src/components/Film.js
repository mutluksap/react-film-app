import { useState } from 'react';
import axios from 'axios';
import Modal from "./Modal";

function Film(film, mediaType) {
  const [modal, setModal] = useState(false);
  if(film.film && film.film.backdrop_path !== null)
  return (
    <>
      <div className='film-cover'>
          <div className='film' onClick={() => setModal(true)}>
            <img src={'https://image.tmdb.org/t/p/w300' + film.film.poster_path}/>
            <div className='film-detail'>
            <div className='play-icon'>
            <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"/></svg>
            </div>
            <div className='film-raiting'>
              <div className='rate'>{film.film !== undefined ? film.film.vote_average: 0 }</div>
              <div className='progress'>
                <span>{film.film !== undefined ? film.film.vote_count: 0} kişi değerlendirdi</span>
                <span className='progress-bar'>
                  <span style={{width : `${(film.film.vote_average * 10)}%`}} className='progress-width'></span>   
                </span>
              </div>
            </div>
            </div>
          </div>
          </div>
          <Modal closeFunction={() => setModal(false)} film={film} modal={modal} mediaType={mediaType}/>
          
    </>
  );
}

export default Film;