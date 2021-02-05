import React, { useState } from 'react';
import Select from 'react-select';
import AnimateHeight from 'react-animate-height';
import cn from 'classnames';

import './filter-author.scss';

const FilterAuthor = ({
  data,
  selectedOptions,
  removeOption,
  handleSelect,
  toggleFilterAuthor,
  heightFilterAuthor,
}) => {

  return (
    <>
      <div
        className='filter__accordion-header'
        aria-expanded={heightFilterAuthor !== 0}
        aria-controls='toggle-author-filters'
        onClick={toggleFilterAuthor}
      >
        {data.title}
      </div>
      <AnimateHeight
        id='toggle-author-filters'
        duration={300}
        height={heightFilterAuthor}
      >
        <div
          className={cn('filter__author filter__tab-body', {
            'is-open': heightFilterAuthor,
          })}
        >
          <div className='filter__tab-body-inner'>
            <div className='filter__author-select-wrapper'>
              <span className='filter__author-text'>
                {data.selectLabel.desktop}
              </span>
              <Select
                options={data.options}
                value={selectedOptions}
                className='filter-author'
                classNamePrefix='filter-author'
                isMulti
                instanceId='postType'
                isSearchable
                isClearable={false}
                onChange={handleSelect}
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
              />
            </div>
            <div className='filter__author-autocomplete'>
              {selectedOptions.map((item, key) => {
                return (
                  <button
                    key={item.label + key}
                    type='button'
                    className='js-autocomplete-item'
                    onClick={removeOption}
                    name={item.label}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </AnimateHeight>
    </>
  );
};

export default FilterAuthor;
