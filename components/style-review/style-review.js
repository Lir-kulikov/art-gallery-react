import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './style-review.scss'
import '../slider-btn'
import SliderBtn from '../slider-btn';

SwiperCore.use([Navigation]);

const parentClass = 'style-review';

const StyleReview = ( {data} ) => {
  
  return (
    <section className="style-review">
      <div className="container style-review__wrapper">
        <h2 className="style-review__title title-lg">Обзор стилей</h2>
        <div className="style-review__slider-buttons">
          <SliderBtn parentClass={parentClass} />
        </div>
      </div>
      <div className="section-line style-review__section-line" />
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
        {
          data.map((item, key) => {
          
        })}
        <SwiperSlide className='swiper-slide style-review__slide'>
          <div className="style-review__slide-row">
            <a className="style-card style-review__style-card" href="#">
              <img className="style-card__img" src="img/style-card-1.jpg" />
              <div className="style-card__overlay">
                <div className="style-card__title">Современное НЮ</div>
                <div className="style-card__category">Новое изобразительное искусство</div>
              </div>
            </a>
          </div>
          <div className="style-review__slide-row">
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-2.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Уорхолом</div>
                  <div className="style-card__category">Новый Поп Арт</div>
                </div></a>
            </div>
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-3.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Гансом Хофманном</div>
                  <div className="style-card__category">Новый абстрактный экспрессионизм</div>
                </div></a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide style-review__slide'>
        <div className="style-review__slide-row"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-4.jpg" />
          <div className="style-card__overlay">
            <div className="style-card__title">Современное НЮ</div>
            <div className="style-card__category">Новое изобразительное искусство</div>
          </div></a>
          </div>
          <div className="style-review__slide-row">
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-5.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Уорхолом</div>
                  <div className="style-card__category">Новый Поп Арт</div>
                </div></a>
            </div>
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-6.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Гансом Хофманном</div>
                  <div className="style-card__category">Новый абстрактный экспрессионизм</div>
                </div></a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide style-review__slide'>
          <div className="style-review__slide-row"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-1.jpg" />
            <div className="style-card__overlay">
              <div className="style-card__title">Современное НЮ</div>
              <div className="style-card__category">Новое изобразительное искусство</div>
            </div></a>
          </div>
          <div className="style-review__slide-row">
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-2.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Уорхолом</div>
                  <div className="style-card__category">Новый Поп Арт</div>
                </div></a>
            </div>
            <div className="style-review__slide-col"><a className="style-card style-review__style-card" href="#"><img className="style-card__img" src="img/style-card-3.jpg" />
                <div className="style-card__overlay">
                  <div className="style-card__title">Вдохновение Гансом Хофманном</div>
                  <div className="style-card__category">Новый абстрактный экспрессионизм</div>
                </div></a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default StyleReview