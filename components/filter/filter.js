import './filter.scss'

const Filter = () => {
  return (
    <form className="filter js-filter-form catalog__filter" name="filter">
      <div className="container">
        <div className="filter__header js-filter-header">
          <svg className="settings-icon filter__settings-icon">
            <use xlinkHref="/img/svg/sprite.svg#controls" /></svg>Фильтр
          <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
            <use xlinkHref="/img/svg/sprite.svg#dropdown" />
          </svg>
        </div>
      </div>
      <div className="filter__main js-filter-main">
        <div className="container">
          <div className="filter__main-inner">
            <div className="filter__item ui-slider ui-slider--type-price">
              <div className="ui-slider__range-wrapper">
                <span className="filter__item-title filter__item-title--tablet-top" data-tablet-text="Цена">Цена</span>
                <div className="ui-slider__range js-ui-slider-price" data-min={0} data-max={99999}>
                  <div className="ui-slider__fields">
                    <input className="ui-slider__field js-slider-price-value" type="number" name="first-price-value" /><span className="ui-slider__field-separator" />
                    <input className="ui-slider__field js-slider-price-value" type="number" name="second-price-value" />
                  </div>
                  <span className="ui-slider__min js-ui-slider-min" /><span className="ui-slider__max js-ui-slider-max">max</span>
                </div>
              </div>
            </div>
            <div className="filter__item ui-slider ui-slider--type-size">
              <span className="filter__item-title">Размер</span>
              <div className="ui-slider__range js-ui-slider-size" data-steps="S, M, L, XL, XXL" />
              <input className="ui-slider__size-value js-slider-size-value" type="number" name="first-size-value" />
              <input className="ui-slider__size-value js-slider-size-value" type="number" name="second-size-value" />
            </div>
            <div className="filter__item filter__type">
              <div className="filter__item-title">Ориентация</div>
              <div className="filter__checkbox-wrapper">
                <div className="filter__checkbox">
                  <input className="filter__checkbox-input" type="checkbox" id="filter-checkbox-square" name="filter-checkbox-type" />
                  <label className="filter__checkbox-label" htmlFor="filter-checkbox-square" />
                </div>
                <div className="filter__checkbox">
                  <input className="filter__checkbox-input" type="checkbox" id="filter-checkbox-vertical" name="filter-checkbox-type" />
                  <label className="filter__checkbox-label" htmlFor="filter-checkbox-vertical" />
                </div>
                <div className="filter__checkbox">
                  <input className="filter__checkbox-input" type="checkbox" id="filter-checkbox-horizontal" name="filter-checkbox-type" />
                  <label className="filter__checkbox-label" htmlFor="filter-checkbox-horizontal" />
                </div>
              </div>
            </div>
            <button className="filter__btn filter__item js-filter-reset" type="button" name="btn-reset">
              Сбросить фильтр
              <svg className="reset-icon filter__reset-icon">
                <use xlinkHref="/img/svg/sprite.svg#reset" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="filter__more js-filter-more">
        <div className="filter__btn-wrapper">
          <button className="filter__btn filter__btn--show js-filter-show-btn" data-value="Свернуть фильтр" type="button">
            <span>Показать фильтр</span>
            <svg className="dropdown-icon undefined dropdown-icon--undefined">
              <use xlinkHref="/img/svg/sprite.svg#dropdown" />
            </svg>
          </button>
        </div>
        <div className="filter__tabs js-show-filters">
          <div className="container">
            <div className="filter__tabs-nav">
              <ul className="filter__tabs-nav-list">
                <li className="filter__tabs-nav-item js-tab-nav is-active" data-tab-name="js-tab-1">
                  Автор
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
                <li className="filter__tabs-nav-item js-tab-nav" data-tab-name="js-tab-2">
                  Жанр
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
                <li className="filter__tabs-nav-item js-tab-nav" data-tab-name="js-tab-3">
                  Цвет
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
                <li className="filter__tabs-nav-item js-tab-nav" data-tab-name="js-tab-4">
                  Тема
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
                <li className="filter__tabs-nav-item js-tab-nav" data-tab-name="js-tab-5">
                  Материал
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
                <li className="filter__tabs-nav-item js-tab-nav" data-tab-name="js-tab-6">
                  Стиль
                  <svg className="dropdown-icon filter__dropdown-icon dropdown-icon--undefined">
                    <use xlinkHref="/img/svg/sprite.svg#dropdown" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter__tabs-content">
            <div className="container container--mobile-hidden">
              <div className="filter__tab js-tab js-tab-1 is-active">
                <div className="filter__accordion-header js-accordion-header">
                  Автор
                </div>
                <div className="filter__author filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__author-select-wrapper">
                      <span className="filter__author-text" data-mobile-text="Начните вводить имя или фамилию">Начните вводить имя или фамилию автора</span>
                      <select className="filter__author-select" id="js-filter-select" multiple="multiple">
                        <optgroup className="filter__author-select-group" label="А">
                          <option className="filter__author-select-opt">Абулафия Крайнова</option>
                          <option className="filter__author-select-opt">Арменинов Тримедул</option>
                          <option className="filter__author-select-opt">Асадуллин Нефедов</option>
                          <option className="filter__author-select-opt">Абулафия Крайнова</option>
                        </optgroup>
                        <optgroup className="filter__author-select-group" label="Б">
                          <option className="filter__author-select-opt">Бабурин Константин</option>
                          <option className="filter__author-select-opt">Бабуркин Вениамин</option>
                          <option className="filter__author-select-opt">Бердюгин Бетюг</option>
                          <option className="filter__author-select-opt">Бенвенист Трамп</option>
                        </optgroup>
                        <optgroup className="filter__author-select-group" label="В">
                          <option className="filter__author-select-opt">Вабурин Константин</option>
                          <option className="filter__author-select-opt">Вабуркин Вениамин</option>
                          <option className="filter__author-select-opt">Вердюгин Бетюг</option>
                          <option className="filter__author-select-opt">Венвенист Трамп</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="filter__author-autocomplete js-autocomplete" />
                  </div>
                </div>
              </div>
              <div className="filter__tab js-tab js-tab-2">
                <div className="filter__accordion-header js-accordion-header">Жанр</div>
                <div className="filter__style filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Первый" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Первый">Первый</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Второй" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Второй">Второй</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Третий" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Третий">Третий</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Четвертый" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Четвертый">Четвертый</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Пятый" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Пятый">Пятый</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Шестой" name="filter-genre" />
                      <label className="filter__style-label" htmlFor="Шестой">Шестой</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__tab js-tab js-tab-3">
                <div className="filter__accordion-header js-accordion-header">Цвет</div>
                <div className="filter__style filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="синий" name="filter-color" />
                      <label className="filter__style-label" htmlFor="синий">синий</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="желтый" name="filter-color" />
                      <label className="filter__style-label" htmlFor="желтый">желтый</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="серый" name="filter-color" />
                      <label className="filter__style-label" htmlFor="серый">серый</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__tab js-tab js-tab-4">
                <div className="filter__accordion-header js-accordion-header">Тема</div>
                <div className="filter__style filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="Погода" name="filter-theme" />
                      <label className="filter__style-label" htmlFor="Погода">Погода</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="Вода" name="filter-theme" />
                      <label className="filter__style-label" htmlFor="Вода">Вода</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="Люди" name="filter-theme" />
                      <label className="filter__style-label" htmlFor="Люди">Люди</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__tab js-tab js-tab-5">
                <div className="filter__accordion-header js-accordion-header">
                  Материал
                </div>
                <div className="filter__style filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="красный" name="filter-material" />
                      <label className="filter__style-label" htmlFor="красный">красный</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="черный" name="filter-material" />
                      <label className="filter__style-label" htmlFor="черный">черный</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="radio" id="белый" name="filter-material" />
                      <label className="filter__style-label" htmlFor="белый">белый</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__tab js-tab js-tab-6">
                <div className="filter__accordion-header js-accordion-header">
                  Стиль
                </div>
                <div className="filter__style filter__tab-body">
                  <div className="filter__tab-body-inner">
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Вортицизм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Вортицизм">Вортицизм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Модернизм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Модернизм">Модернизм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Авангардизм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Авангардизм">Авангардизм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Реализм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Реализм">Реализм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Конструктивизм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Конструктивизм">Конструктивизм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Готика" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Готика">Готика</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Классицизм" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Классицизм">Классицизм</label>
                    </div>
                    <div className="filter__style-tag">
                      <input className="filter__style-input js-filter-style-input" type="checkbox" id="Поп-арт" name="filter-style" />
                      <label className="filter__style-label" htmlFor="Поп-арт">Поп-арт</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="filter__btn filter__submit" type="submit">
          Показать картины
        </button>
      </div>
    </form>
  );
};

export default Filter