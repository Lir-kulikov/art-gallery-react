import React, { useState } from "react";
import Slider, { Range } from 'rc-slider';
import AnimateHeight from 'react-animate-height';
import FilterTabs from '../filter-tabs'

import 'rc-slider/assets/index.css';
import './filter.scss'

const FILTER_DATA = {
  priceSlider: {
    title: 'Цена',
    minValue: 0,
    maxValue: 99999
  },
  sizeSlider: {
    title: 'Размер',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  orientation: {
    title: 'Ориентация'
  },
  resetBtn: {
    icon: '',
    title: 'Сбросить фильтр'
  },
  additionalFilters: {
    btn: 'Показать фильтр',
    btnActive: 'Свернуть фильтр',
  }
}

const marksArr = FILTER_DATA.sizeSlider.sizes;
const marksObj = Object.assign({}, marksArr );


const Filter = () => {

  const [priceMin, setPriceMin] = useState(FILTER_DATA.priceSlider.minValue);
  const [priceMax, setPriceMax] = useState(FILTER_DATA.priceSlider.maxValue);
  const [rangeValues, setRangeValues] = useState([0, marksArr.length - 1]);
  const [heightSecondFilter, setHeightSecondFilter] = useState(0);
  
  

  const priceMinChange = (e) => {
    if (e.target.value > priceMax) {
      setPriceMin(priceMax);
    } else {
      setPriceMin(e.target.value);
    }
  };

  const priceMaxChange = (e) => {
    setPriceMax(e.target.value);
  };

  const rangeHandler = ([min, max]) => {
    setPriceMin(min);
    setPriceMax(max);
  };

  const filterReset = () => {
    document.getElementById('filter-form').reset();
    setPriceMin(FILTER_DATA.priceSlider.minValue);
    setPriceMax(FILTER_DATA.priceSlider.maxValue);
    setRangeValues([0, marksArr.length - 1]);
  };

  const toggleSecondFilter = () => {
    setHeightSecondFilter(heightSecondFilter === 0 ? 'auto' : 0);
  };


  return (
    <form className="filter js-filter-form catalog__filter" name="filter" id='filter-form'>
      <div className="container">
        <div className="filter__header js-filter-header">
          <svg className="settings-icon filter__settings-icon">
            <use xlinkHref="/img/svg/sprite.svg#controls" />
          </svg>
          Фильтр
          <svg className="dropdown-icon filter__dropdown-icon">
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
                <div className="ui-slider__range js-ui-slider-price">
                  <div className="ui-slider__fields">
                    <input
                      className="ui-slider__field js-slider-price-value"
                      value={priceMin}
                      type="number"
                      name="first-price-value"
                      onChange={priceMinChange}
                    />
                    <span className="ui-slider__field-separator" />
                    <input
                      className="ui-slider__field js-slider-price-value"
                      type="number"
                      name="second-price-value"
                      onChange={priceMaxChange}
                      value={priceMax}
                    />
                  </div>
                  <span className="ui-slider__min js-ui-slider-min">{FILTER_DATA.priceSlider.minValue}</span>
                  <span className="ui-slider__max js-ui-slider-max">max</span>
                  <Range
                    className='rc-slider-price'
                    step={1}
                    min={FILTER_DATA.priceSlider.minValue}
                    max={FILTER_DATA.priceSlider.maxValue}
                    tipProps={{
                      placement: "top",
                      visible: true
                    }}
                    allowCross={false}
                    value={[priceMin, priceMax]}
                    onChange={rangeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="filter__item ui-slider ui-slider--type-size">
              <span className="filter__item-title">Размер</span>
              <Range
                className='rc-slider-size'
                step={1}
                marks={marksObj}
                min={0}
                max={marksArr.length - 1}
                value={rangeValues}
                tipProps={{
                  placement: "top",
                  visible: true
                }}
                allowCross={false}
                onChange={(values) => setRangeValues(values)}
              />
              <input className="ui-slider__size-value js-slider-size-value" type="number" name="first-size-value" />
              <input className="ui-slider__size-value js-slider-size-value" type="number" name="second-size-value" />
            </div>
            <div className="filter__item ui-slider ui-slider--type-size">
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
            <button className="filter__btn filter__item" type="button" name="btn-reset" onClick={filterReset}>
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
          <button
            className="filter__btn filter__btn--show"
            type="button"
            aria-expanded={heightSecondFilter !== 0}
            aria-controls='toggle-second-filters'
            onClick={toggleSecondFilter}>
            <span>{heightSecondFilter ? FILTER_DATA.additionalFilters.btnActive : FILTER_DATA.additionalFilters.btn}</span>
            <svg className="dropdown-icon undefined">
              <use xlinkHref="/img/svg/sprite.svg#dropdown" />
            </svg>
          </button>
        </div>
        <AnimateHeight
          id='toggle-second-filters'
          duration={ 300 }
          height={ heightSecondFilter }
        >
        <FilterTabs data={FILTER_DATA.additionalFilters.tabs}/>
        </AnimateHeight>
        <button className="filter__btn filter__submit" type="submit">
          Показать картины
        </button>
      </div>
    </form>
  );
};

export default Filter