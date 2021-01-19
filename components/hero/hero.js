import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './hero.scss';

SwiperCore.use([Pagination]);

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
      speed={700}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='swiper-container-hero'
    >
      <SwiperSlide>
        <div className="swiper-slide hero__slide" style={{backgroundImage: 'url("img/hero-slide-1.jpg")'}}>
          <div className="container">
            <div className="hero__body">
              <p className="hero__subtitle">Новое на этой неделе</p>
              <div className="hero__title">Лучшие фигуративные произведения</div>
              <p className="hero__text">Новые оригинальные работы, выбранные нашим эспертом</p><a className="hero__btn" href="#">Открыть</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide hero__slide" style={{backgroundImage: 'url("img/hero-slide-2.jpg")'}}>
          <div className="container">
            <div className="hero__body">
              <p className="hero__subtitle">Новое на этой неделе</p>
              <div className="hero__title">Лучшие фигуративные произведения</div>
              <p className="hero__text">Новые оригинальные работы, выбранные нашим эспертом</p><a className="hero__btn" href="#">Открыть</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide hero__slide" style={{backgroundImage: 'url("img/hero-slide-1.jpg")'}}>
          <div className="container">
            <div className="hero__body">
              <p className="hero__subtitle">Новое на этой неделе</p>
              <div className="hero__title">Лучшие фигуративные произведения</div>
              <p className="hero__text">Новые оригинальные работы, выбранные нашим эспертом</p><a className="hero__btn" href="#">Открыть</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      {/* <div className="swiper-container-hero hero__slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide hero__slide" style={{backgroundImage: 'url("img/hero-slide-1.jpg")'}}>
            <div className="container">
              <div className="hero__body">
                <p className="hero__subtitle">Новое на этой неделе</p>
                <div className="hero__title">Лучшие фигуративные произведения</div>
                <p className="hero__text">Новые оригинальные работы, выбранные нашим эспертом</p><a className="hero__btn" href="#">Открыть</a>
              </div>
            </div>
          </div>
          <div className="swiper-slide hero__slide" style={{backgroundImage: 'url("img/hero-slide-2.jpg")'}}>
            <div className="container">
              <div className="hero__body">
                <p className="hero__subtitle">Новое на этой неделе</p>
                <div className="hero__title">Лучшие фигуративные произведения</div>
                <p className="hero__text">Новые оригинальные работы, выбранные нашим эспертом</p><a className="hero__btn" href="#">Открыть</a>
              </div>
            </div>
          </div>
          </div>
        <div className="swiper-pagination"></div>
      </div> */}
    </section>
  );
};

export default Hero