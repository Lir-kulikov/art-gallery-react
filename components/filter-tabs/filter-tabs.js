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
  data,
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
        title: data.filterAuthor.title,
        component: (
          <FilterAuthor
            data={data.filterAuthor}
            selectedOptions={selectedOptions}
            removeOption={removeOption}
            handleSelect={handleSelect}
            toggleFilterAuthor={toggleFilterAuthor}
            heightFilterAuthor={heightFilterAuthor}
          />
        ),
      },
      {
        title: data.filterGenre.title,
        component: (
          <FilterGenre
            data={data.filterGenre}
            toggleFilterGenre={toggleFilterGenre}
            heightFilterGenre={heightFilterGenre}
          />
        ),
      },
      {
        title: data.filterColor.title,
        component: (
          <FilterColor
            data={data.filterColor}
            toggleFilterColor={toggleFilterColor}
            heightFilterColor={heightFilterColor}
          />
        ),
      },
      {
        title: data.filterTheme.title,
        component: (
          <FilterTheme
            data={data.filterTheme}
            toggleFilterTheme={toggleFilterTheme}
            heightFilterTheme={heightFilterTheme}
          />
        ),
      },
      {
        title: data.filterMaterial.title,
        component: (
          <FilterMaterial
            data={data.filterMaterial}
            toggleFilterMaterial={toggleFilterMaterial}
            heightFilterMaterial={heightFilterMaterial}
          />
        ),
      },
      {
        title: data.filterStyle.title,
        component: (
          <FilterStyle
            data={data.filterStyle}
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
