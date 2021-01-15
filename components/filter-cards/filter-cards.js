import './filter-cards.scss'

const FilterCards = () => {
  return (
    <section className="filter-cards catalog__filter-cards">
      <div className="container">
        <div className="filter-cards__header">
          <h2 className="filter-cards__title">Популярные фильтры</h2>
          <div className="section-line filter-cards__section-line" />
          <div className="filter-cards__slider-btns" data-da="swiper-container-filter,1,767">
            <button className="slider-btn slider-btn--left js-swiper-filter-prev">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-left" />
              </svg>
            </button>
            <button className="slider-btn slider-btn--right js-swiper-filter-next">
              <svg className="slider-btn__icon">
                <use xlinkHref="img/svg/sprite.svg#arrow-right" />
              </svg>
            </button>
          </div>
        </div>
        <div className="filter-cards__slider swiper-container-filter">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-1.png)'}} />
                <div className="genre-card__title">Барроко</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-2.png)'}} />
                <div className="genre-card__title">Живопись</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-3.png)'}} />
                <div className="genre-card__title">Пейзаж</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-4.png)'}} />
                <div className="genre-card__title">Поп-арт</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-5.png)'}} />
                <div className="genre-card__title">Модерн</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-2.png)'}} />
                <div className="genre-card__title">Живопись</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-3.png)'}} />
                <div className="genre-card__title">Пейзаж</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-4.png)'}} />
                <div className="genre-card__title">Поп-арт</div></a>
            </div>
            <div className="swiper-slide">
              <a className="genre-card" href="#">
                <div className="genre-card__img" style={{backgroundImage: 'url(img/filter-5.png)'}} />
                <div className="genre-card__title">Модерн</div></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCards