import { useState } from 'react';
import { Modal, Group, useMantineTheme  } from '@mantine/core';
import axios from 'axios';

function Film(film) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
 

  if(film.film && film.film.backdrop_path !== null)
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={film.film.name ? film.film.name : film.film.original_title}
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8]}
        overlayOpacity={0.2}
        overlayBlur={3}
        size="255%"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
      <div className='film-cover'>
          <div className='film' onClick={() => setOpened(true)}>
            <img src={'https://image.tmdb.org/t/p/w300' + film.film.poster_path}/>
            <div className='film-detail'>
            <div className='play-icon'>
            <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"/></svg>
            </div>
            <div className='film-raiting'>
              <div className='rate'>{film.film !== undefined ? film.film.vote_average: 0 }</div>
              <div className='progress'>
                <span>{film.film !== undefined ? film.film.vote_count: 0} kişi değerlendirdi</span>
                <span className='progress-bar'>
                  <span style={{width : `${(film.film.vote_average * 10)}%`}} className='progress-width'></span>   
                </span>
              </div>
            </div>
            </div>
          </div>
          </div>
      </Group>
    </>
  );
}

export default Film;