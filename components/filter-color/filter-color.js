import AnimateHeight from 'react-animate-height';
import cn from 'classnames';
import './filter-color.scss';

const FilterColor = ({toggleFilterColor, heightFilterColor}) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterColor !== 0}
      aria-controls='toggle-color-filters'
      onClick={toggleFilterColor}
    >
      Цвет
    </div>
    <AnimateHeight
      id='toggle-color-filters'
      duration={ 300 }
      height={ heightFilterColor }
    >
      <div className={cn('filter__style filter__tab-body', {'is-open' : heightFilterColor})}>
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
    </AnimateHeight>
    </>
  );
};

export default FilterColor