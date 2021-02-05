import AnimateHeight from 'react-animate-height';

import './filter-style.scss'

const FilterStyle = ({ data, toggleFilterStyle, heightFilterStyle }) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterStyle !== 0}
      aria-controls='toggle-style-filters'
      onClick={toggleFilterStyle}
    >
      {data.title}
    </div>
    <AnimateHeight
      id='toggle-style-filters'
      duration={ 300 }
      height={ heightFilterStyle }
    >
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        {data.items.map((item, key) => (
          <div className="filter__style-tag" key={item + key}>
            <input className="filter__style-input" type="checkbox" id={item} name="filter-style" />
            <label className="filter__style-label" htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
    </AnimateHeight>
    </>
  );
};

export default FilterStyle