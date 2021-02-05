import AnimateHeight from 'react-animate-height';

import './filter-genre.scss'

const FilterGenre = ({ data, toggleFilterGenre, heightFilterGenre }) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterGenre !== 0}
      aria-controls='toggle-genre-filters'
      onClick={toggleFilterGenre}
    >
      {data.title}
    </div>
    <AnimateHeight
      id='toggle-genre-filters'
      duration={ 300 }
      height={ heightFilterGenre }
    >
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        {data.items.map((item, key) => (
          <div className="filter__style-tag" key={item + key}>
            <input className="filter__style-input" type="checkbox" id={item} name="filter-genre" />
            <label className="filter__style-label" htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
    </AnimateHeight>
    </>
  );
};

export default FilterGenre