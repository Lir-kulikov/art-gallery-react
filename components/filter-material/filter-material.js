import AnimateHeight from 'react-animate-height';

import './filter-material.scss'

const FilterMaterial = ({toggleFilterMaterial, heightFilterMaterial}) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterMaterial !== 0}
      aria-controls='toggle-material-filters'
      onClick={toggleFilterMaterial}
    >
      Материал
    </div>
    <AnimateHeight
      id='toggle-material-filters'
      duration={ 300 }
      height={ heightFilterMaterial }
    >
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
    </AnimateHeight>
    </>
  );
};

export default FilterMaterial