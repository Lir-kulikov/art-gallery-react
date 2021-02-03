import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './news.scss';

import SliderBtn from '../slider-btn';
import NewsCard from '../news-card';

SwiperCore.use([Navigation]);

const News = ({ data }) => {
  return (
    <section className='news'>
      <div className='container news__wrapper'>
        <h2 className='news__title title-lg'>{data.title}</h2>
        <div className='news__slider-buttons'>
          <SliderBtn parentClass={data.parentClass} />
        </div>
      </div>
      <div className='section-line news__section-line' />
      <div className='container'>
        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: `.${data.parentClass}__slider-btn--right`,
            prevEl: `.${data.parentClass}__slider-btn--left`,
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
          {data.items.map((item, key) => {
            return (
              <SwiperSlide className='swiper-slide' key={item.title + key}>
                <NewsCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
