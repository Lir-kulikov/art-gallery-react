import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, Navigation } from 'swiper';
import Share from '../share';
import AnimateHeight from 'react-animate-height';
import FsLightbox from 'fslightbox-react';
import cn from 'classnames';
SwiperCore.use([Navigation, Thumbs]);

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './product-card.scss';

const parentClass = 'product-card';

const ProductCard = ({ data }) => {

  const [heightSpecs, setHeightSpecs] = useState(0);
  const [heightDescription, setHeightDescription] = useState(0);
  const [favourites, setFavourites] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightbox, setLightbox] = useState(false);

  const toggleHeightSpecs = () => {
    setHeightSpecs(heightSpecs === 0 ? 'auto' : 0);
  };

  const toggleHeightDescription = () => {
    setHeightDescription(heightDescription === 0 ? 'auto' : 0);
  };

  const toggleFavourites = () => {
    setFavourites(!favourites);
  };

  return (
    <div className="product-card product__product-card">
      <div className="container">
        <div className="product-card__inner">
          <div className="product-card__details">
            <div className="product-card__gallery">
            <Swiper
              watchSlidesVisibility
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              className='product-card__thumbs swiper-container-thumbs'
              breakpoints={{
                0: {
                    direction: 'horizontal',
                    allowTouchMove: true,
                    spaceBetween: 15,
                    slidesPerView: 4,
                    centerInsufficientSlides: true,
                  },
                767: {
                  allowTouchMove: false,
                  freeMode: true,
                  slideToClickedSlide: true,
                  direction: 'vertical',
                  slidesPerView: 'auto',
                  autoHeight: true,
                  centeredSlides: false,
                  centerInsufficientSlides: false,
                }
              }}
            > 
              {data.pictures.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <div className="product-card__thumb" style={{backgroundImage: `url(${item})`}} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={20}
              autoHeight={true}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                nextEl:`.js-swiper-product-next`,
                prevEl:`.js-swiper-product-prev`
              }}
              className='product-card__slider swiper-container-product'
            >
              {data.pictures.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <img className="product-card__img" src={item} onClick={() => setLightbox(!lightbox)} />
                  </SwiperSlide>
                );
              })}
              <button className="js-swiper-product-next">
                <svg className="long-arrow-icon">
                  <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                </svg>
              </button>
              <button className="js-swiper-product-prev">
                <svg className="long-arrow-icon">
                  <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                </svg>
              </button>
            </Swiper>
            <FsLightbox
              toggler={lightbox}
              sources={data.pictures}
            />
            </div>
            <div className="product-card__actions">
              <div className="product-card__actions-row">
                <button className="product-card__action-item">
                  <svg className="like-icon product-card__action-icon">
                    <use xlinkHref={data.actions.like.icon} />
                  </svg>
                  <span className="product-card__action-text">{data.actions.like.text} (<span>{data.actions.like.value}</span>)</span>
                </button>
                <a className="product-card__action-item product-card__action-item--tablet-min-content" href="#" download="download">
                  <svg className="download-icon product-card__action-icon">
                    <use xlinkHref={data.actions.download.icon} />
                  </svg>
                  <span className="product-card__action-text">{data.actions.download.text}</span>
                </a>
              </div>
              <button className="product-card__action-item">
                <svg className="eye-close-icon product-card__action-icon">
                  <use xlinkHref={data.actions.hidden.icon} />
                </svg><span className="product-card__action-text">{data.actions.hidden.text}</span>
              </button>
            </div>
          </div>
          <div className="product-card__info">
            <div className="product-card__main">
              <h1 className="product-card__title">{data.title}</h1>
              <div className="product-card__top-row">
                <span className="product-card__art">{data.code}</span>
                <button className={cn('product-card__favorites', {'is-active' : favourites})} onClick={toggleFavourites}>
                  <svg className='heart-icon product-card__heart-icon'>
                    <use xlinkHref="img/svg/sprite.svg#heart" />
                  </svg><span className="product-card__favorites-text">{favourites ? 'В избранном' : 'В избранное'}</span>
                </button>
              </div>
              <a className="product-card__author" href={data.author.url}>{data.author.name}</a>
              <div className="product-card__brief">
                {data.brief.map((item, key) => {
                  return (
                    <div className="product-card__brief-item" key={item.name + key}>
                      <span className="product-card__brief-name">{item.name}</span>
                      <span className="product-card__brief-value">{item.value}</span>
                    </div>
                  );
                })};
              </div>
              <div className="product-card__row">
                <div className="product-card__price">{Number(data.price.mainPrice).toLocaleString('ru-RU')}
                  <span className="product-card__old-price">{Number(data.price.oldPrice).toLocaleString('ru-RU')}</span>
                </div>
                <div className="product-card__buy-btn btn-blue">
                  <span className="tablet-hidden">Добавить</span> в корзину</div>
              </div>
              <div className="product-card__action-mobile">
                <button className="product-card__mobile-btn">
                  <svg className="like-icon product-card__action-mobile-icon">
                    <use xlinkHref={data.actions.like.icon} />
                  </svg>
                  <span className="product-card__action-mobile-text">{data.actions.like.text}</span>
                </button>
                <button className="product-card__mobile-btn js-icon">
                  <svg className="heart-icon product-card__action-mobile-icon heart-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#heart" />
                  </svg><span className="product-card__action-mobile-text">В избранное</span>
                </button>
                <button className="product-card__mobile-btn">
                  <svg className="eye-close-icon product-card__action-mobile-icon">
                    <use xlinkHref="img/svg/sprite.svg#eye-close" />
                  </svg><span className="product-card__action-mobile-text">Не показывать</span>
                </button><a className="product-card__mobile-btn" href="#" download="download">
                  <svg className="download-icon product-card__action-mobile-icon">
                    <use xlinkHref="/img/svg/sprite.svg#download" />
                  </svg><span className="product-card__action-mobile-text">Скачать копию</span></a>
              </div>
              <Share parentClass={parentClass} />
            </div>
            <div className="product-card__specs">
              <div
                className="product-card__header"
                aria-expanded={ heightSpecs !== 0 }
                aria-controls='toggle-specs'
                onClick={ toggleHeightSpecs }
                >
                  {data.specs.title}
                <svg className="dropdown-icon product-card__dropdown-icon">
                  <use xlinkHref="img/svg/sprite.svg#dropdown" />
                </svg>
              </div>
              <AnimateHeight
                id='toggle-specs'
                duration={ 300 }
                height={ heightSpecs }
              >
                <div className="product-card__body">
                <table className="product-card__table">
                  <tbody>
                    {data.specs.table.map((item, key) => {
                      return (
                        <tr className="product-card__table-row" key={item.name + key}>
                          <td className="product-card__table-col">{item.name}</td>
                          <td className="product-card__table-col">{item.value}</td>
                        </tr>
                      );
                    })};
                  </tbody>
                </table>
              </div>
              </AnimateHeight>
              
            </div>
            <div className="product-card__description">
              <div className="product-card__header"
                  aria-expanded={ heightDescription !== 0 }
                  aria-controls='toggle-description'
                  onClick={ toggleHeightDescription }
                >
                {data.description.title}
                <svg className="dropdown-icon product-card__dropdown-icon">
                  <use xlinkHref="img/svg/sprite.svg#dropdown" />
                </svg>
              </div>
              <AnimateHeight
                id='toggle-description'
                duration={ 300 }
                height={ heightDescription }
              >
                <div className="product-card__body">
                <div className="product-card__text">{data.description.text}</div>
              </div>
              </AnimateHeight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard