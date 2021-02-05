import AnimateHeight from 'react-animate-height';
import cn from 'classnames';
import './filter-color.scss';

const FilterColor = ({ data, toggleFilterColor, heightFilterColor }) => {
  return (
    <>
    <div
      className="filter__accordion-header"
      aria-expanded={heightFilterColor !== 0}
      aria-controls='toggle-color-filters'
      onClick={toggleFilterColor}
    >
      {data.title}
    </div>
    <AnimateHeight
      id='toggle-color-filters'
      duration={ 300 }
      height={ heightFilterColor }
    >
      <div className={cn('filter__style filter__tab-body', {'is-open' : heightFilterColor})}>
        <div className="filter__tab-body-inner">
          {data.items.map((item, key) => (
            <div className="filter__style-tag" key={item + key}>
              <input className="filter__style-input" type="radio" id={item} name="filter-color" />
              <label className="filter__style-label" htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </AnimateHeight>
    </>
  );
};

export default FilterColor