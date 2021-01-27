import React, { useState } from 'react'
import FilterTabNav from '../filter-tab-nav'
import cn from 'classnames'

import FilterAuthor from '../filter-author'
import FilterGenre from '../filter-genre'
import FilterColor from '../filter-color'
import FilterTheme from '../filter-theme'
import FilterMaterial from '../filter-material'
import FilterStyle from '../filter-style'

import './filter-tabs.scss'


const DATA_TABS = {
  content: [
    {
      title: 'Автор',
      component: <FilterAuthor />
    },
    {
      title: 'Жанр',
      component: <FilterGenre />
    },
    {
      title: 'Цвет',
      component: <FilterColor />
    },
    {
      title: 'Тема',
      component: <FilterTheme />
    },
    {
      title: 'Материал',
      component: <FilterMaterial />
    },
    {
      title: 'Стиль',
      component: <FilterStyle />
    }
  ]
}

const FilterTabs = () => {

  const [ activeTab, setActiveTab ] = useState(0);
  const openTab = e => setActiveTab(+e.target.dataset.index);

  return (
    <div className="filter__tabs">
      <div className="container">
        <div className="filter__tabs-nav">
          <ul className="filter__tabs-nav-list">
            {DATA_TABS.content.map((item, i) => {
              return (
                <FilterTabNav
                  data={item}
                  key={item.title + i}
                  active={activeTab}
                  i={i}
                  onClick={openTab}
                  data-index={i}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="filter__tabs-content">
        <div className="container container--mobile-hidden">
          {DATA_TABS.content.map((item, i) => {
            return (
              <div className={`filter__tab ${i === activeTab ? 'is-active' : ''}`} data-index={i} key={item.title + i} active={activeTab}>
                <div className="filter__accordion-header js-accordion-header">{item.title}</div>
                {item.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs