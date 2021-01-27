import './filter-theme.scss'

const FilterTheme = () => {
  return (
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
  );
};

export default FilterTheme