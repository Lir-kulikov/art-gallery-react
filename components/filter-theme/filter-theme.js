import AnimateHeight from 'react-animate-height';

import './filter-theme.scss'

const FilterTheme = ({toggleFilterTheme, heightFilterTheme}) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterTheme !== 0}
      aria-controls='toggle-theme-filters'
      onClick={toggleFilterTheme}
    >
      Тема
    </div>
    <AnimateHeight
      id='toggle-theme-filters'
      duration={ 300 }
      height={ heightFilterTheme }
    >
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
    </AnimateHeight>
    </>
  );
};

export default FilterTheme