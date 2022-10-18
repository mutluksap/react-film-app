import './App.css';
import React, {useState} from 'react';
import Paginate from './components/Paginate';
import FilmList from './components/FilmList';
import Header from './components/Header';


function App() {


  return (
    <>
      <Header/>
      <main>
        <div className='container'>
          <ul className='tags'>
            <li>
              <span className='tag' href='#'>
                Comedy  
              </span>
            </li>
            <li>
              <span className='tag' href='#'>
                Drama  
              </span>
            </li>
            <li>
              <span className='tag' href='#'>
                Sopa  
              </span>
            </li>
            <li>
              <span className='tag' href='#'>
                Talk  
              </span>
            </li>
          </ul>
          <FilmList/>
        </div>
      </main>
      <Paginate/>
    </>
  );
}

export default App;
