import { Pagination } from '@mantine/core';

function Paginate({activePage, setPage, totalPage}) {
  
  return (
    <footer>
      <div className='container'>
         <Pagination page={activePage} total={totalPage} color="red" onChange={setPage} size="xl" radius="md" />
      </div>
    </footer>
  );
}

export default Paginate;