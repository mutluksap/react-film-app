import { useState } from 'react';
import { Modal, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
      <div className='film-cover'>
          <div className='film' onClick={() => setOpened(true)}>
            <img src='https://web.archive.org/web/20220131050828im_/https://1.bp.blogspot.com/-GUTthXOn6FU/YRvVVWNk3AI/AAAAAAAAARs/_pjoa_POsGUhpDJOkfEyTHejt2jQoEtcACLcBGAsYHQ/s300/peTl1V04E9ppvhgvNmSX0r2ALqO.jpg'/>
            <div className='film-detail'>
            <div className='play-icon'>
            <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"/></svg>
            </div>
            <div className='film-raiting'>
              <div className='rate'>2.8</div>
              <div className='progress'>
                <span>50 kişi değerlendirdi</span>
                <span className='progress-bar'>
                  <span width='40px' className='progress-width'></span>   
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

export default Demo;