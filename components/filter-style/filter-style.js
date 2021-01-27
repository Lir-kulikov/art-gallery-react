import './filter-style.scss'

const FilterStyle = () => {
  return (
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Вортицизм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Вортицизм">Вортицизм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Модернизм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Модернизм">Модернизм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Авангардизм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Авангардизм">Авангардизм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Реализм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Реализм">Реализм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Конструктивизм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Конструктивизм">Конструктивизм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Готика" name="filter-style" />
          <label className="filter__style-label" htmlFor="Готика">Готика</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Классицизм" name="filter-style" />
          <label className="filter__style-label" htmlFor="Классицизм">Классицизм</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Поп-арт" name="filter-style" />
          <label className="filter__style-label" htmlFor="Поп-арт">Поп-арт</label>
        </div>
      </div>
    </div>
  );
};

export default FilterStyle