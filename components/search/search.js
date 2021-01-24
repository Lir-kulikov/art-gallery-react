import React, { useState, useRef } from 'react'
import useOutsideClick from "../use-click-outside/use-click-outside";

import './search.scss'

const Search = ( {theme} ) => {

  const [show, setSate] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  const toggleState = () => {
    setSate(!show);
  };

  return (
    <div className="search header__search header__action-item">
      <button className="search__icon" onClick={toggleState}>
        <svg className={`search-icon search__search-icon search-icon--theme-${theme}`}>
          <use xlinkHref="img/svg/sprite.svg#search" />
        </svg>
      </button>
      {show && (
        <div className="search__drop" ref={ref}>
          <div className="search__field-wrapper">
            <input className="search__field" type="text" placeholder="Поиск..." autoFocus />
            <button className="search__close-btn" onClick={() => setSate(false)}>
              <svg className="icon icon-close ">
                <use xlinkHref="img/svg/sprite.svg#close" />
              </svg>
            </button>
            <button className="search__btn">
              <svg className={`search-icon search__search-icon search-icon--theme-${theme}`}>
                <use xlinkHref="img/svg/sprite.svg#search" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search