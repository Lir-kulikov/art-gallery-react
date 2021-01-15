import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Filter from '../components/filter';

import '../components/product/product.scss'

const Product = () => {
  return (
    <div className='overflow-limiter'>
      <Header />
      <main>
        <div className="breadcrumbs product__breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__inner"><a className="breadcrumbs__back" href="index.html">
              <svg className="long-arrow-icon breadcrumbs__long-arrow-icon">
                <use xlinkHref="img/svg/sprite.svg#long-arrow" />
              </svg>Назад</a>
            <div className="breadcrumbs__nav"><a className="breadcrumbs__link" href="#">Главная</a><a className="breadcrumbs__link" href="#">Каталог</a><a className="breadcrumbs__link breadcrumbs__link--current">Название картины длинное зарезается прозрачностью цвета фона</a></div>
          </div>
        </div>
      </div>
      <div className="product-card product__product-card">
        <div className="container">
          <div className="product-card__inner">
            <div className="product-card__details">
              <div className="product-card__gallery" data-da="product-card__main,3,767">
                <div className="product-card__thumbs swiper-container-thumbs">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="product-card__thumb" style={{backgroundImage: 'url(img/product-1.jpg)'}} />
                    </div>
                    <div className="swiper-slide">
                      <div className="product-card__thumb" style={{backgroundImage: 'url(img/product-2.jpg)'}} />
                    </div>
                    <div className="swiper-slide">
                      <div className="product-card__thumb" style={{backgroundImage: 'url(img/product-3.jpg)'}} />
                    </div>
                  </div>
                </div>
                <div className="product-card__slider swiper-container-product">
                  <div className="swiper-wrapper"><a className="swiper-slide js-lightbox" href="img/product-1.jpg"><img className="product-card__img" src="img/product-1.jpg" /></a><a className="swiper-slide js-lightbox" href="img/product-2.jpg"><img className="product-card__img" src="img/product-2.jpg" /></a><a className="swiper-slide js-lightbox" href="img/product-3.jpg"><img className="product-card__img" src="img/product-3.jpg" /></a></div>
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
                </div>
              </div>
              <div className="product-card__actions">
                <div className="product-card__actions-row">
                  <button className="product-card__action-item">
                    <svg className="like-icon product-card__action-icon">
                      <use xlinkHref="img/svg/sprite.svg#like" />
                    </svg><span className="product-card__action-text">Понравилось (875)</span>
                  </button><a className="product-card__action-item product-card__action-item--tablet-min-content" href="#" download="download">
                    <svg className="download-icon product-card__action-icon">
                      <use xlinkHref="img/svg/sprite.svg#download" />
                    </svg><span className="product-card__action-text">Цифровая копия</span></a>
                </div>
                <button className="product-card__action-item">
                  <svg className="eye-close-icon product-card__action-icon">
                    <use xlinkHref="img/svg/sprite.svg#eye-close" />
                  </svg><span className="product-card__action-text">Больше не показывать картину</span>
                </button>
              </div>
            </div>
            <div className="product-card__info">
              <div className="product-card__main">
                <h1 className="product-card__title">Распоряжения о структуре очень длинное название картины</h1>
                <div className="product-card__top-row"><span className="product-card__art">Арт. HWV-165123</span>
                  <button className="product-card__favorites js-icon" data-active="В избранном" data-default="В избранное">
                    <svg className="heart-icon product-card__heart-icon heart-icon--undefined">
                      <use xlinkHref="img/svg/sprite.svg#heart" />
                    </svg><span className="product-card__favorites-text">В избранное</span>
                  </button>
                </div><a className="product-card__author" href="#">Диана Миллерелло</a>
                <div className="product-card__brief">
                  <div className="product-card__brief-item"><span className="product-card__brief-name">Размер картины:</span><span className="product-card__brief-value">100 х 120 х 4 см</span></div>
                  <div className="product-card__brief-item"><span className="product-card__brief-name">Стиль:</span><a className="product-card__brief-value product-card__brief-value--link" href="#">Пейзаж</a></div>
                </div>
                <div className="product-card__row">
                  <div className="product-card__price">927 750<span className="product-card__old-price">727 750</span></div>
                  <div className="product-card__buy-btn btn-blue"><span className="tablet-hidden">Добавить</span> в корзину</div>
                </div>
                <div className="product-card__action-mobile">
                  <button className="product-card__mobile-btn">
                    <svg className="like-icon product-card__action-mobile-icon">
                      <use xlinkHref="img/svg/sprite.svg#like" />
                    </svg><span className="product-card__action-mobile-text">Понравилось</span>
                  </button>
                  <button className="product-card__mobile-btn js-icon">
                    <svg className="heart-icon product-card__action-mobile-icon heart-icon--undefined">
                      <use xlinkHref="img/svg/sprite.svg#heart" />
                    </svg><span className="product-card__action-mobile-text">В избранное</span>
                  </button>
                  <button className="product-card__mobile-btn">
                    <svg className="eye-close-icon product-card__action-mobile-icon">
                      <use xlinkHref="img/svg/sprite.svg#eye-close" />
                    </svg><span className="product-card__action-mobile-text">Не показывать</span>
                  </button><a className="product-card__mobile-btn" href="#" download="download">
                    <svg className="download-icon product-card__action-mobile-icon">
                      <use xlinkHref="img/svg/sprite.svg#download" />
                    </svg><span className="product-card__action-mobile-text">Скачать копию</span></a>
                </div>
                <div className="share product-card__share">
                  <ul className="share__list">
                    <li className="share__item"><a className="share__link" href="#" target="_blank">
                        <svg className="share__icon">
                          <use xlinkHref="img/svg/sprite.svg#vk" />
                        </svg></a></li>
                    <li className="share__item"><a className="share__link" href="#" target="_blank">
                        <svg className="share__icon">
                          <use xlinkHref="img/svg/sprite.svg#facebook" />
                        </svg></a></li>
                    <li className="share__item"><a className="share__link" href="#" target="_blank">
                        <svg className="share__icon">
                          <use xlinkHref="img/svg/sprite.svg#odnoklassniki" />
                        </svg></a></li>
                    <li className="share__item"><a className="share__link" href="#" target="_blank">
                        <svg className="share__icon">
                          <use xlinkHref="img/svg/sprite.svg#instagram" />
                        </svg></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-card__specs">
                <div className="product-card__header js-anim-toggle-btn">Параметры картины
                  <svg className="dropdown-icon product-card__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="img/svg/sprite.svg#dropdown" />
                  </svg>
                </div>
                <div className="product-card__body js-anim-toggle-block">
                  <table className="product-card__table">
                    <tbody><tr className="product-card__table-row">
                        <td className="product-card__table-col">Год написания</td>
                        <td className="product-card__table-col">2008</td>
                      </tr>
                      <tr className="product-card__table-row">
                        <td className="product-card__table-col">Тема</td>
                        <td className="product-card__table-col">Океан, Берег, Пляж</td>
                      </tr>
                      <tr className="product-card__table-row">
                        <td className="product-card__table-col">Стиль</td>
                        <td className="product-card__table-col">Современный пейзаж</td>
                      </tr>
                      <tr className="product-card__table-row">
                        <td className="product-card__table-col">Материалы</td>
                        <td className="product-card__table-col">Уголь, Чернила, Пастель</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="product-card__description">
                <div className="product-card__header js-anim-toggle-btn">Описание картины
                  <svg className="dropdown-icon product-card__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="img/svg/sprite.svg#dropdown" />
                  </svg>
                </div>
                <div className="product-card__body js-anim-toggle-block">
                  <div className="product-card__text">Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия. По своей сути рыбатекст является альтернативой традиционному lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="similar-products">
        <div className="container similar-products__wrapper">
          <h2 className="similar-products__title title-lg">Похожие работы</h2>
          <div className="similar-products__slider-buttons">
            <button className="slider-btn slider-btn--left similar-products__slider-btn js-swiper-similar-prev">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-left" />
              </svg>
            </button>
            <button className="slider-btn slider-btn--right similar-products__slider-btn js-swiper-similar-next">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-right" />
              </svg>
            </button>
          </div>
        </div>
        <div className="section-line similar-products__section-line" />
        <div className="container">
          <div className="similar-products__grid swiper-container-similar-products">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-6.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-5.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-4.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-1.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-2.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="masonry-card similar-products__card"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-3.jpg" /></a>
                  <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
                  </div>
                  <div className="masonry-card__footer">
                    <div className="masonry-card__price">927 750</div>
                    <div className="masonry-card__old-price">727 750</div>
                    <div className="masonry-card__actions">
                      <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#heart" />
                      </svg>
                      <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--undefined">
                        <use xlinkHref="img/svg/sprite.svg#basket" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product