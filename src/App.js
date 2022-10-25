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
  const [totalPage, setTotalPage] = useState(0);
  return (
    <BrowserRouter>
      <Header/>
      {/* <Tags/> */}
      <main>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Trending setTotalPage={setTotalPage} activePage={activePage} />} />
            <Route path="/movies" element={<Movies setTotalPage={setTotalPage} activePage={activePage}/>} />
            <Route path="series" element={<Series setTotalPage={setTotalPage} activePage={activePage}/>} />
          </Routes>
        </div>
      </main>
      <Paginate totalPage={totalPage} activePage={activePage} setPage={setPage}/>
    </BrowserRouter>
  );
}

export default App;
