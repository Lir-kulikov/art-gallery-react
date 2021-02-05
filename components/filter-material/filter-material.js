import AnimateHeight from 'react-animate-height';

import './filter-material.scss'

const FilterMaterial = ({ data, toggleFilterMaterial, heightFilterMaterial }) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterMaterial !== 0}
      aria-controls='toggle-material-filters'
      onClick={toggleFilterMaterial}
    >
      {data.title}
    </div>
    <AnimateHeight
      id='toggle-material-filters'
      duration={ 300 }
      height={ heightFilterMaterial }
    >
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        {data.items.map((item, key) => (
          <div className="filter__style-tag" key={item + key}>
            <input className="filter__style-input" type="radio" id={item} name="filter-material" />
            <label className="filter__style-label" htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
    </AnimateHeight>
    </>
  );
};

export default FilterMaterial