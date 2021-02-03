import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MasonryCard from '../masonry-card';
import '../slider-btn';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './similar-products.scss';
import SliderBtn from '../slider-btn';

SwiperCore.use([Navigation]);

// const data = {
//   parentClass: 'similar-products',
//   items: [
//     {
//       id: 0,
//       picture: '/img/masonry-card-1.jpg',
//       tag: {
//         text: 'Новинка',
//         color: 'red',
//       },
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/product',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x50 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: true,
//       basket: false,
//     },
//     {
//       id: 1,
//       picture: '/img/masonry-card-2.jpg',
//       tag: {
//         text: 'Скидка',
//         color: 'Green',
//       },
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/productCard',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x60 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: false,
//       basket: true,
//     },
//     {
//       id: 2,
//       picture: '/img/masonry-card-3.jpg',
//       tag: {},
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/productCard',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x60 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: false,
//       basket: false,
//     },
//     {
//       id: 3,
//       picture: '/img/masonry-card-4.jpg',
//       tag: {
//         text: 'Скидка',
//         color: 'Green',
//       },
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/productCard',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x60 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: false,
//       basket: false,
//     },
//     {
//       id: 4,
//       picture: '/img/masonry-card-5.jpg',
//       tag: {},
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/productCard',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x60 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: false,
//       basket: false,
//     },
//     {
//       id: 5,
//       picture: '/img/masonry-card-6.jpg',
//       tag: {},
//       title: 'Распоряжения о структуре тут длинное название картины',
//       url: '/productCard',
//       author: {
//         name: 'Екатерина Александровна Преображенская',
//         url: '#',
//       },
//       size: 'Картина, 80x60 см.',
//       price: 927750,
//       oldPrice: 727750,
//       favourite: false,
//       basket: false,
//     },
//   ],
// };

const SimilarProducts = ({ data }) => {
  return (
    <section className='similar-products'>
      <div className='container similar-products__wrapper'>
        <h2 className='similar-products__title title-lg'>{data.title}</h2>
        <div className='similar-products__slider-buttons'>
          <SliderBtn parentClass={data.parentClass} />
        </div>
      </div>
      <div className='section-line similar-products__section-line' />
      <div className='container'>
        <Swiper
          speed={500}
          slidesPerView={1}
          navigation={{
            nextEl: '.similar-products__slider-btn--right',
            prevEl: '.similar-products__slider-btn--left',
          }}
          loop={false}
          className='similar-products__grid swiper-container-similar-products'
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 7,
              centeredSlides: false,
            },
            768: {
              slidesPerGroup: 2,
              slidesPerView: 'auto',
              spaceBetween: 45,
              centeredSlides: true,
            },
            1280: {
              spaceBetween: 45,
              centeredSlides: false,
              slidesPerGroup: 2,
              slidesPerView: 4,
            },
          }}
        >
          {data.items.map((item, key) => {
            return (
              <SwiperSlide key={key + item.title}>
                <MasonryCard data={item} />
              </SwiperSlide>
            );
          })}
          ;
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarProducts;
