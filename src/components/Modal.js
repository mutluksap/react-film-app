import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


function Modal({film, modal, mediaType, closeFunction}) {
    const [trailer, setTrailer] = useState('');
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${film.film.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => setTrailer(response.data.results[0].key))
    },[])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${film.film.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`)
        .then(response => setArtists(response.data.cast));
    },[])
    
  return <>
  {
        modal ? <>
            <div className='modal' onClick={() => closeFunction()} />
            <div className='content'>
            {trailer.length ? <div className='cover' onClick={() => closeFunction(true)} >
            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            </div> : <></>}
            <div className='title'>
                <h2>{film.film.title ? film.film.title : film.film.original_title}</h2>
            </div>
            <div className='detail'>
                <div className='description'>{film.film.overview}</div>
                <div className='artists'>
                    <h2>Oyuncular</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        className="mySwiper"
                        pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
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