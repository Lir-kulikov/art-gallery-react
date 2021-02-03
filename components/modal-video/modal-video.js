import React, { useContext } from 'react';
import {AppContext} from '../../context/context';

import './modal-video.scss';

const ModalVideo = ({ data }) => {

  const { closeModalVideo } = useContext(AppContext);

  return (
    <div className='modal-video' aria-hidden='true'>
      <button className='modal-video__close' onClick={closeModalVideo}>
        ×
      </button>
      <iframe
        className='youtube-video'
        width='100%'
        height='100%'
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        data-src-video='https://www.youtube.com/embed/h3RNElMbdUY?autoplay=1'
        src={data}
      />
    </div>
  );
};

export default ModalVideo;
