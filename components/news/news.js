import './news.scss'

const News = () => {
  return (
    <section className="news">
      <div className="container news__wrapper">
        <h2 className="news__title title-lg">Новости искусства</h2>
        <div className="news__slider-buttons">
          <button className="slider-btn slider-btn--left news__slider-btn js-swiper-news-prev">
            <svg className="slider-btn__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow-left" />
            </svg>
          </button>
          <button className="slider-btn slider-btn--right news__slider-btn js-swiper-news-next">
            <svg className="slider-btn__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow-right" />
            </svg>
          </button>
        </div>
      </div>
      <div className="section-line news__section-line" />
      <div className="container">
        <div className="news__slider swiper-container-news">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
                <div className="news-card__info">
                  <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                  <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                    <svg className="long-arrow-icon news-card__long-arrow-icon">
                      <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-2.jpg" /></a>
                <div className="news-card__info">
                  <div className="news-card__header"><a className="news-card__category" href="#">Коллекционирование</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                  <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                    <svg className="long-arrow-icon news-card__long-arrow-icon">
                      <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
                <div className="news-card__info">
                  <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                  <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                    <svg className="long-arrow-icon news-card__long-arrow-icon">
                      <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="news-card news__news-card"><a className="news-card__img-link" href="#"><img className="news-card__img" src="img/news-card-1.jpg" /></a>
                <div className="news-card__info">
                  <div className="news-card__header"><a className="news-card__category" href="#">ГАЛЕРЕИ И ВЫСТАВКИ</a><span className="news-card__date">21.12.2018</span></div><span className="news-card__date news-card__date--mobile">21.12.2018</span><a className="news-card__title" href="#">Обзор нашего экспетра Владимира Рубинштейна-Загорского</a>
                  <p className="news-card__intro">Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир.</p><a className="news-card__btn" href="#">Смотреть и читать
                    <svg className="long-arrow-icon news-card__long-arrow-icon">
                      <use xlinkHref="img/svg/sprite.svg#long-arrow" />
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News