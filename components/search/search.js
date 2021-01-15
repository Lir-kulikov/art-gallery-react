import './search.scss'

const Search = () => {
  return (
    <div className="search header__search header__action-item">
      <button className="search__icon js-search-opener">
        <svg className="search-icon search__search-icon search-icon--theme-dark">
          <use xlinkHref="img/svg/sprite.svg#search" />
        </svg>
      </button>
      <div className="search__drop js-search-drop">
        <div className="search__field-wrapper">
          <input className="search__field js-search-focus" type="text" placeholder="Поиск..." />
          <button className="search__close-btn js-search-close">
            <svg className="icon icon-close ">
              <use xlinkHref="img/svg/sprite.svg#close" />
            </svg>
          </button>
          <button className="search__btn">
            <svg className="search-icon search__search-icon search-icon--theme-dark">
              <use xlinkHref="img/svg/sprite.svg#search" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search