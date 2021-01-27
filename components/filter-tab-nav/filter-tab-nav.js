import React from 'react'
import './filter-tab-nav.scss'

const FilterTabNav = ({ data, active, i, onClick }) => {
  return (
    <li onClick={onClick} className={`filter__tabs-nav-item ${i === active ? 'is-active' : ''}`} data-index={i}>
      {data.title}
      <svg className="dropdown-icon filter__dropdown-icon">
        <use xlinkHref="/img/svg/sprite.svg#dropdown" />
      </svg>
    </li>
  );
};

export default FilterTabNav