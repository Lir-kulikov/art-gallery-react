import AnimateHeight from 'react-animate-height';

import './filter-theme.scss'

const FilterTheme = ({ data, toggleFilterTheme, heightFilterTheme }) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterTheme !== 0}
      aria-controls='toggle-theme-filters'
      onClick={toggleFilterTheme}
    >
      {data.theme}
    </div>
    <AnimateHeight
      id='toggle-theme-filters'
      duration={ 300 }
      height={ heightFilterTheme }
    >
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        {data.items.map((item, key) => (
          <div className="filter__style-tag" key={item + key}>
            <input className="filter__style-input" type="radio" id={item} name="filter-theme" />
            <label className="filter__style-label" htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
    </AnimateHeight>
    </>
  );
};

export default FilterTheme