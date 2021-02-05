import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './filter-cards.scss'
import GenreCard from '../genre-card';
import SliderBtn from '../slider-btn';

SwiperCore.use([Navigation]);

const FilterCards = ({ data, parentClass }) => {
  return (
    <section className="filter-cards catalog__filter-cards">
      <div className="container">
        <div className="filter-cards__header">
          <h2 className="filter-cards__title">{data.title}</h2>
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
        {data.items.map((item) => {
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