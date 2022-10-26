import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";


function Modal({film, modal, mediaType, closeFunction, genres}) {
    const [trailer, setTrailer] = useState('');
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${film.media_type === undefined ? mediaType : film.media_type}/${film.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => {
            setTrailer(response.data.results.find(film => film.name === "Official Trailer"));
        })
    },[])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${film.media_type === undefined ? mediaType : film.media_type}/${film.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => setArtists(response.data.cast));
    },[])
  return <>
  {
        modal ? <>
            <div className='modal' onClick={() => closeFunction()} />
            <div className='content'>
            {trailer !== undefined ? <div className='cover' onClick={() => closeFunction(true)} >
            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            </div> : <div className='cover'><img src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`}/></div>}
            <div className='title'>
                <h2>{film.title ? film.title : film.original_name}</h2>
            </div>
            {
            mediaType === "movie" ? 
            (<div className='film-tags'>
            <span>Tags: </span>
            <ul>
                {film.genre_ids.map((filmGenre, index) => <li key={index}>{genres.find(genre => genre.id === filmGenre).name}</li>)}
            </ul>
        </div>) : <></>}
            
            <div className='detail'>
                <div className='description'>{film.overview ? film.overview : "There is not enough information about the movie yet. However, it will be added as soon as possible."}</div>
                <div className='artists'>
                    <h2>Casts</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        className="mySwiper"
                        autoplay={{
                            delay:1000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true,
                          }}
                          modules={[Autoplay, Pagination]}
                    >
                        {
                            artists?.map((artist, index) => 
                            (
                                artist.profile_path !== null ? <SwiperSlide key={index}>
                                <img src={`https://image.tmdb.org/t/p/w300${artist.profile_path}`} />
                                <div className='cast-name'>{artist.original_name} <br/> {artist.character ? `(${artist.character})` : `(Unkown)`}</div>
                            </SwiperSlide> : ''
                            )
                            )
                        }
                        
                    </Swiper>
                </div>
            </div>
            </div>
            </>
         : <></>
    }
  </>
    
  
}

export default Modal