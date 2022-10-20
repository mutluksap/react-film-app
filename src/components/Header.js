import React from 'react'
import Logo from "../favicon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire, faVideo, faTv, faMagnifyingGlass, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Header() {
  return (
        <header>
        <div className='container'>
          <div className='logo'>
            <img alt='s' src={Logo}/>
          </div>
                    
          <nav>
            <ul>
              <li>
                 <Link as="a" to='/'>
                    <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
                    Trending
                  </Link>
              </li>
              <li>
                <Link as="a" to='/movies'>
                <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                  Movies
                  </Link>
              </li>
              <li>
              <Link as="a" to='/series'>
                <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                  Tv Series
                  </Link>
              </li>
              <li>
                <a href='/search'>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                  Search
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header;