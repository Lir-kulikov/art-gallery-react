import MasonryFixedCard from "../masonry-fixed-card";

import './new-works.scss'

const NewWorks = () => {
  return (
    <section className="new-works">
      <div className="container new-works__wrapper">
        <h2 className="new-works__title title-lg">Новые работы</h2>
        <div className="sort new-works__sort">
          <label className="sort__label">Сортировать по</label>
          <select className="sort__select" id="choices-sort">
            <option value="Дате добавления" />
            <option value="Цене" />
            <option value="Популярности" />
          </select>
        </div>
      </div>
      <div className="section-line new-works__section-line" />
      <div className="container">
        <div className="grid-masonry new-works__grid-masonry js-gallery-fixed">
          <div className="grid-masonry__item-sizer js-sizer" />
          <div className="grid-masonry__item-gutter js-gutter" />
          <MasonryFixedCard />
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-1.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">927 750</div>
              <div className="masonry-card__old-price">727 750</div>
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-2.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--new">Новинка</span><a className="masonry-card__title" href="#">Абстракция, Опус J202</a><a className="masonry-card__author" href="#">Соколов Виталий</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">927 750</div>
              <div className="masonry-card__old-price">727 750</div>
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid-masonry__item grid-masonry__item--empty js-grid-item hidden-desktop-up hidden-mobile-down" />
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-3.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--new">Новинка</span><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">927 750</div>
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid-masonry__item grid-masonry__item--empty js-item hidden-tablet-down" />
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-4.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Распоряжения о структуре</a><a className="masonry-card__author" href="#">Говард Херш</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">27 750</div>
              <div className="masonry-card__old-price" />
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-5.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Абстракция, Опус J202</a><a className="masonry-card__author" href="#">Соколов Виталий</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">27 750</div>
              <div className="masonry-card__old-price" />
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-6.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--sale">Скидка 20%</span><a className="masonry-card__title" href="#">Распоряжения о структуре тут длинное название картины</a><a className="masonry-card__author" href="#">Екатерина Александровна Преображенская</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">927 750</div>
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-7.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--sale">Скидка 20%</span><a className="masonry-card__title" href="#">Растущее действие</a><a className="masonry-card__author" href="#">Рамина Роуз</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">927 750</div>
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item hidden-tablet-down"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-8.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Абстракция, Опус J202</a><a className="masonry-card__author" href="#">Соколов Виталий</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">27 750</div>
              <div className="masonry-card__old-price" />
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
          <div className="masonry-card grid-masonry__item js-grid-item hidden-tablet-down"><a className="masonry-card__img-wrapper" href="#"><img className="masonry-card__img" src="img/masonry-card-9.jpg" /></a>
            <div className="masonry-card__info"><span className="card-sticker masonry-card__card-sticker card-sticker--undefined" /><a className="masonry-card__title" href="#">Абстракция, Опус J202</a><a className="masonry-card__author" href="#">Соколов Виталий</a><span className="masonry-card__type">Картина,  80x60 см.</span>
            </div>
            <div className="masonry-card__footer">
              <div className="masonry-card__price">27 750</div>
              <div className="masonry-card__old-price" />
              <div className="masonry-card__actions">
                <svg className="heart-icon masonry-card__heart-icon js-icon heart-icon--undefined">
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <svg className="basket-icon masonry-card__basket-icon js-icon basket-icon--fixed">
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button className="new-works__btn btn">Смотреть все</button>
      </div>
    </section>
  );
}

export default NewWorks