import './style-review.scss'

const StyleReview = () => {
  return (
    <section className="style-review">
      <div className="container style-review__wrapper">
        <h2 className="style-review__title title-lg">Обзор стилей</h2>
        <div className="style-review__slider-buttons">
          <button className="slider-btn slider-btn--left style-review__slider-btn js-swiper-style-review-prev">
            <svg className="slider-btn__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow-left" />
            </svg>
          </button>
          <button className="slider-btn slider-btn--right style-review__slider-btn js-swiper-style-review-next">
            <svg className="slider-btn__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow-right" />
            </svg>
          </button>
        </div>
      </div>
      <div className="section-line style-review__section-line" />
      <div className="container">
        <div className="style-review__slider swiper-container-style-review">
          <div className="swiper-wrapper">
            <div className="swiper-slide style-review__slide">
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
            </div>
            <div className="swiper-slide style-review__slide">
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
            </div>
            <div className="swiper-slide style-review__slide">
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
            </div>
            <div className="swiper-slide style-review__slide">
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
            </div>
            <div className="swiper-slide style-review__slide">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleReview