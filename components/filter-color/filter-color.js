import './filter-color.scss'

const FilterColor = () => {
  return (
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
  );
};

export default FilterColor