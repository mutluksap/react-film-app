import {useState} from "react";
import { Pagination } from '@mantine/core';

function Paginate({activePage, setPage}) {
  
  return (
    <footer>
      <div className='container'>
         <Pagination page={activePage} total={10} onChange={setPage} color="red" size="lg" radius="md" />
      </div>
    </footer>
  );
}

export default Paginate;