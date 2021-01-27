import './filter-genre.scss'

const FilterGenre = () => {
  return (
    <div className="filter__style filter__tab-body">
      <div className="filter__tab-body-inner">
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Первый" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Первый">Первый</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Второй" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Второй">Второй</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Третий" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Третий">Третий</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Четвертый" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Четвертый">Четвертый</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Пятый" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Пятый">Пятый</label>
        </div>
        <div className="filter__style-tag">
          <input className="filter__style-input js-filter-style-input" type="checkbox" id="Шестой" name="filter-genre" />
          <label className="filter__style-label" htmlFor="Шестой">Шестой</label>
        </div>
      </div>
    </div>
  );
};

export default FilterGenre