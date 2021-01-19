import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './filter-cards.scss'
import GenreCard from '../genre-card';

SwiperCore.use([Navigation]);

const FILTER_CARDS_DATA = {
  title: 'Популярные фильтры',
  items: [
    {
      id: '0',
      url: '',
      picture: '/img/filter-1.png',
      title: 'Барроко'
    },
    {
      id: '1',
      url: '',
      picture: '/img/filter-2.png',
      title: 'Живопись'
    },
    {
      id: '2',
      url: '',
      picture: '/img/filter-3.png',
      title: 'Пейзаж'
    },
    {
      id: '3',
      url: '',
      picture: '/img/filter-4.png',
      title: 'Поп-арт'
    },
    {
      id: '4',
      url: '',
      picture: '/img/filter-5.png',
      title: 'Модерн'
    },
    {
      id: '5',
      url: '',
      picture: '/img/filter-2.png',
      title: 'Живопись'
    },
    {
      id: '6',
      url: '',
      picture: '/img/filter-3.png',
      title: 'Пейзаж'
    },
    {
      id: '7',
      url: '',
      picture: '/img/filter-4.png',
      title: 'Поп-арт'
    },
    {
      id: '8',
      url: '',
      picture: '/img/filter-5.png',
      title: 'Барроко'
    },

  ]
}

const FilterCards = () => {
  return (
    <section className="filter-cards catalog__filter-cards">
      <div className="container">
        <div className="filter-cards__header">
          <h2 className="filter-cards__title">{FILTER_CARDS_DATA.title}</h2>
          <div className="section-line filter-cards__section-line" />
          <div className="filter-cards__slider-btns" data-da="swiper-container-filter,1,767">
            <button className="slider-btn slider-btn--left js-swiper-filter-prev">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-left" />
              </svg>
            </button>
            <button className="slider-btn slider-btn--right js-swiper-filter-next">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-right" />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          navigation
          speed={500}
          watchSlidesVisibility={true}
          autoHeight={true}
          loop={false}
          className='filter-cards__slider swiper-container-filter'
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
        {FILTER_CARDS_DATA.items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <GenreCard data={item}></GenreCard>
            </SwiperSlide>
          )
        })}
        </Swiper>
        {/* <div className="filter-cards__slider swiper-container-filter">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-1.png)'}} />
                <div className="genre-card__title">Барроко</div>
              </a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-2.png)'}} />
                <div className="genre-card__title">Живопись</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-3.png)'}} />
                <div className="genre-card__title">Пейзаж</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-4.png)'}} />
                <div className="genre-card__title">Поп-арт</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-5.png)'}} />
                <div className="genre-card__title">Модерн</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-2.png)'}} />
                <div className="genre-card__title">Живопись</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-3.png)'}} />
                <div className="genre-card__title">Пейзаж</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-4.png)'}} />
                <div className="genre-card__title">Поп-арт</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-5.png)'}} />
                <div className="genre-card__title">Модерн</div></a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FilterCards