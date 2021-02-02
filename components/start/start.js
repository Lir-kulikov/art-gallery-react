import React, { useContext } from 'react';
import {AppContext} from '../../context/context';
import ArticleCard from '../article-card';
import './start.scss';

const Start = ({ data }) => {

  const { openModalVideo } = useContext(AppContext);

  return (
    <section className='start'>
      <div className='container'>
        <h2 className='start__title title-lg'>{data.title}</h2>
      </div>
      <div className='section-line' />
      <div className='container'>
        <div className='start__row'>
          <div
            className='video-start start__video'
            data-modal-open='modal-video'
            onClick={openModalVideo}
          >
            <img className='video-start__img' src={data.video.picture} />
            <button className='video-start__btn'>
              <svg className='icon icon-play '>
                <use xlinkHref='img/svg/sprite.svg#play' />
              </svg>
            </button>
            <div className='video-start__overlay'>
              <h3 className='video-start__title'>
                {data.video.title}
              </h3>
            </div>
          </div>
          <ArticleCard data={data.article} />
        </div>
      </div>
    </section>
  );
};

export default Start;
