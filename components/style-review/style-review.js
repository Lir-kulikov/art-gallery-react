import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './style-review.scss';
import '../slider-btn';
import SliderBtn from '../slider-btn';
import StyleCard from '../style-card';

SwiperCore.use([Navigation]);
const StyleReview = ({ data }) => {
  console.log(data.slides)
  return (
    <section className='style-review'>
      <div className='container style-review__wrapper'>
        <h2 className='style-review__title title-lg'>{data.title}</h2>
        <div className='style-review__slider-buttons'>
          <SliderBtn parentClass={data.parentClass} />
        </div>
      </div>
      <div className='section-line style-review__section-line' />
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
          scrollbar={{ draggable: true }}
          className='style-review__slider swiper-container-style-review'
          breakpoints={{
            0: {
              spaceBetween: 12,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 12,
              slidesPerView: 1.5,
            },
            1024: {
              spaceBetween: 42,
              slidesPerView: 2,
            },
          }}
        >
          {data.slides.map((slide, slideKey) => {
            return (
              <SwiperSlide
                className='swiper-slide style-review__slide'
                key={slideKey}
              >
                <div className='style-review__slide-row'>
                  <StyleCard data={slide.items[0]} />
                </div>
                <div className='style-review__slide-row'>
                  <div className='style-review__slide-col'>
                    <StyleCard data={slide.items[1]} />
                  </div>
                  <div className='style-review__slide-col'>
                    <StyleCard data={slide.items[2]} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default StyleReview;
