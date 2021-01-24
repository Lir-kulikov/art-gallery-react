import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Filter from '../components/filter';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import '../components/product/product.scss'
import ProductCard from '../components/product-card';
import SimilarProducts from '../components/similar-products';

SwiperCore.use([Navigation]);

const Product = () => {

  const PRODUCT_DATA = {
    theme: 'light',
    parentClass: 'product',
    productCard: {
      pictures: [
        '/img/product-1.jpg',
        '/img/product-2.jpg',
        '/img/product-3.jpg'
      ],
      title: 'Распоряжения о структуре очень длинное название картины',
      code: 'Арт. HWV-165123',
      favourites: {
        default: 'В избранное',
        active: 'В избранном'
      },
      author: {
        name: 'Диана Миллерелло',
        url: '#'
      },
      brief: [
        {
          name: 'Размер картины:',
          value: '100 х 120 х 4 см'
        },
        {
          name: 'Стиль:',
          value: 'Пейзаж'
        }
      ],
      price: {
        mainPrice: 927750,
        oldPrice: 727750
      },
      button: {
        desktop: 'Добавить в корзину',
        mobile: 'В корзину'
      },
      specs: {
        title: 'Параметры картины',
        table: [
          {
            name: 'Год написания',
            value: '2008'
          },
          {
            name: 'Тема',
            value: 'Океан, Берег, Пляж'
          },
          {
            name: 'Стиль',
            value: 'Современный пейзаж'
          },
          {
            name: 'Материалы',
            value: 'Уголь, Чернила, Пастель'
          }
        ]
      },
      description: {
        title: 'Описание картины',
        text: 'Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия. По своей сути рыбатекст является альтернативой традиционному lorem ipsum'
      },
      actions: {
        like: {
          icon: '/img/svg/sprite.svg#like',
          text: 'Понравилось',
          value: 875
        },
        download: {
          icon: '/img/svg/sprite.svg#download',
          text: 'Цифровая копия'
        },
        hidden: {
          icon: '/img/svg/sprite.svg#eye-close',
          text: 'Больше не показывать картину'
        }
      }
    }
  }
  return (
    <div className='overflow-limiter'>
      <Header theme={PRODUCT_DATA.theme}/>
      <main>
        <div className="breadcrumbs product__breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__inner">
            <a className="breadcrumbs__back" href="index.html">
              <svg className="long-arrow-icon breadcrumbs__long-arrow-icon">
                <use xlinkHref="img/svg/sprite.svg#long-arrow" />
              </svg>Назад</a>
            <div className="breadcrumbs__nav">
              <a className="breadcrumbs__link" href="#">Главная</a>
              <a className="breadcrumbs__link" href="#">Каталог</a>
              <a className="breadcrumbs__link breadcrumbs__link--current">Название картины длинное зарезается прозрачностью цвета фона</a>
            </div>
          </div>
        </div>
      </div>
        <ProductCard data={PRODUCT_DATA.productCard}/>
        <SimilarProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Product