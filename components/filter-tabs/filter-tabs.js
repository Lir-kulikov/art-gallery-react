import React, { useState } from 'react';
import FilterTabNav from '../filter-tab-nav';
import cn from 'classnames';
import FilterAuthor from '../filter-author';
import FilterGenre from '../filter-genre';
import FilterColor from '../filter-color';
import FilterTheme from '../filter-theme';
import FilterMaterial from '../filter-material';
import FilterStyle from '../filter-style';

import './filter-tabs.scss';

const FilterTabs = ({
  selectedOptions,
  removeOption,
  handleSelect,
  toggleFilterAuthor,
  heightFilterAuthor,
  toggleFilterColor,
  heightFilterColor,
  toggleFilterGenre,
  heightFilterGenre,
  toggleFilterMaterial,
  heightFilterMaterial,
  toggleFilterStyle,
  heightFilterStyle,
  toggleFilterTheme,
  heightFilterTheme,
}) => {
  const DATA_TABS = {
    content: [
      {
        title: 'Автор',
        component: (
          <FilterAuthor
            selectedOptions={selectedOptions}
            removeOption={removeOption}
            handleSelect={handleSelect}
            toggleFilterAuthor={toggleFilterAuthor}
            heightFilterAuthor={heightFilterAuthor}
          />
        ),
      },
      {
        title: 'Жанр',
        component: (
          <FilterGenre
            toggleFilterGenre={toggleFilterGenre}
            heightFilterGenre={heightFilterGenre}
          />
        ),
      },
      {
        title: 'Цвет',
        component: (
          <FilterColor
            toggleFilterColor={toggleFilterColor}
            heightFilterColor={heightFilterColor}
          />
        ),
      },
      {
        title: 'Тема',
        component: (
          <FilterTheme
            toggleFilterTheme={toggleFilterTheme}
            heightFilterTheme={heightFilterTheme}
          />
        ),
      },
      {
        title: 'Материал',
        component: (
          <FilterMaterial
            toggleFilterMaterial={toggleFilterMaterial}
            heightFilterMaterial={heightFilterMaterial}
          />
        ),
      },
      {
        title: 'Стиль',
        component: (
          <FilterStyle
            toggleFilterStyle={toggleFilterStyle}
            heightFilterStyle={heightFilterStyle}
          />
        ),
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(0);
  const openTab = (e) => setActiveTab(+e.target.dataset.index);

  return (
    <div className='filter__tabs'>
      <div className='container'>
        <div className='filter__tabs-nav'>
          <ul className='filter__tabs-nav-list'>
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
      <div className='filter__tabs-content'>
        <div className='container container--mobile-hidden'>
          {DATA_TABS.content.map((item, i) => {
            return (
              <div
                className={`filter__tab ${i === activeTab ? 'is-active' : ''}`}
                data-index={i}
                key={item.title + i}
                active={activeTab}
              >
                {item.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
