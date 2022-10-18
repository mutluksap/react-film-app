import React from 'react'
import Logo from "../favicon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire, faVideo, faTv, faMagnifyingGlass, faPlayCircle} from '@fortawesome/free-solid-svg-icons'

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
                <a href='#'>
                  <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
                  Trending
                </a>
              </li>
              <li>
                <a href='#'>
                <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                  Movies
                </a>
              </li>
              <li>
                <a href='#'>
                <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                  Tv Series
                </a>
              </li>
              <li>
                <a href='#'>
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