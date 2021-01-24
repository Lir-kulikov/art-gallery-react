import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './news.scss'

import SliderBtn from '../slider-btn'

SwiperCore.use([Navigation]);

const parentClass = 'news';

const News = () => {
  return (
    <section className="news">
      <div className="container news__wrapper">
        <h2 className="news__title title-lg">Новости искусства</h2>
        <div className="news__slider-buttons">
          <SliderBtn parentClass={parentClass} />
        </div>
      </div>
      <div className="section-line news__section-line" />
      <div className="container">
        <Swiper
          slidesPerView={1}
          navigation={{
          nextEl:`.${parentClass}__slider-btn--right`,
          prevEl:`.${parentClass}__slider-btn--left`
          }}
          speed={700}
          autoHeight={true}
          loop={true}
          className='news__slider swiper-container-news'
          breakpoints={{
            320: {
            spaceBetween: 10,
            slidesPerView: 1,
            },
            1023: {
            spaceBetween: 42,
            slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className='swiper-slide'>
            <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
              <div className="news-card__info">
                <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                  <svg className="long-arrow-icon news-card__long-arrow-icon">
                    <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                  </svg></a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
              <div className="news-card__info">
                <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                  <svg className="long-arrow-icon news-card__long-arrow-icon">
                    <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                  </svg></a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
              <div className="news-card__info">
                <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                  <svg className="long-arrow-icon news-card__long-arrow-icon">
                    <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                  </svg></a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default News