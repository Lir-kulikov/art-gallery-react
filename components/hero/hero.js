import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './hero.scss';

SwiperCore.use([Pagination]);

const Hero = ( {data} ) => {

  return (
    <section className="hero">
      <Swiper
      speed={700}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='swiper-container-hero'
    > 
      {data.heroItems.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="swiper-slide hero__slide" style={{backgroundImage: `url(${item.picture})`}}>
              <div className="container">
                <div className="hero__body">
                  <p className="hero__subtitle">{item.subtitle}</p>
                  <div className="hero__title">{item.title}</div>
                  <p className="hero__text">{item.text}</p>
                  <a className="hero__btn">{item.button}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })};
    </Swiper>
    </section>
  );
};

export default Hero