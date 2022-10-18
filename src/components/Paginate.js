import { Pagination } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [activePage, setPage] = useState(1);
  
  return (
    <footer>
      <div className='container'>
         <Pagination page={activePage} total={10} onChange={setPage} color="red" size="lg" radius="md" />
      </div>
    </footer>
  );
}

export default Demo;