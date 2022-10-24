import './App.css';
import React, {useState} from 'react';
import Paginate from './components/Paginate';
import Header from './components/Header';
// import Tags from './components/Tags';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Tags from "./components/Tags";

function App() {
  const [activePage, setPage] = useState(1);
  return (
    <BrowserRouter>
      <Header/>
      {/* <Tags/> */}
      <main>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Trending activePage={activePage} />} />
            <Route path="/movies" element={<Movies activePage={activePage}/>} />
            <Route path="series" element={<Series activePage={activePage}/>} />
          </Routes>
        </div>
      </main>
      <Paginate activePage={activePage} setPage={setPage}/>
    </BrowserRouter>
  );
}

export default App;
