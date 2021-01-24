import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './filter-cards.scss'
import GenreCard from '../genre-card';
import SliderBtn from '../slider-btn';

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

const FilterCards = ( {parentClass} ) => {
  return (
    <section className="filter-cards catalog__filter-cards">
      <div className="container">
        <div className="filter-cards__header">
          <h2 className="filter-cards__title">{FILTER_CARDS_DATA.title}</h2>
          <div className="section-line filter-cards__section-line" />
          <div className="filter-cards__slider-btns" data-da="swiper-container-filter,1,767">
            <SliderBtn />
          </div>
        </div>
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          navigation={{
            nextEl:`.${parentClass}__slider-btn--right`,
            prevEl:`.${parentClass}__slider-btn--left`
          }}
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
      </div>
    </section>
  );
};

export default FilterCards