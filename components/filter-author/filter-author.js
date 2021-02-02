import React, { useState } from 'react';
import Select from 'react-select';
import AnimateHeight from 'react-animate-height';
import cn from 'classnames';

import './filter-author.scss';

const FILTER_AUTHOR_DATA = {
  title: 'Автор',
  selectLabel: {
    mobile: 'Начните вводить имя или фамилию',
    desktop: 'Начните вводить имя или фамилию автора',
  },
  options: [
    {
      label: 'А',
      options: [
        { label: 'Абулафия Крайнова', value: 'Абулафия Крайнова' },
        { label: 'Арменинов Тримедул', value: 'Арменинов Тримедул' },
        { label: 'Асадуллин Нефедов', value: 'Асадуллин Нефедов' },
        { label: 'Абулафия Крайнова', value: 'Абулафия Крайнова' },
      ],
    },
    {
      label: 'Б',
      options: [
        { label: 'Бабурин Константин', value: 'Бабурин Константин' },
        { label: 'Бабуркин Вениамин', value: 'Бабуркин Вениамин' },
        { label: 'Бердюгин Бетюг', value: 'Бердюгин Бетюг' },
        { label: 'Бенвенист Трамп', value: 'Бенвенист Трамп' },
      ],
    },
    {
      label: 'В',
      options: [
        { label: 'Вабурин Константин', value: 'Вабурин Константин' },
        { label: 'Вабуркин Вениамин', value: 'Вабуркин Вениамин' },
        { label: 'Вердюгин Бетюг', value: 'Вердюгин Бетюг' },
        { label: 'Венвенист Трамп', value: 'Венвенист Трамп' },
      ],
    },
  ],
};

const FilterAuthor = ({
  selectedOptions,
  removeOption,
  handleSelect,
  toggleFilterAuthor,
  heightFilterAuthor,
}) => {
  //const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleSelect = (selectedOptions) => {
  //   setSelectedOptions(selectedOptions);
  // };

  // const removeOption = (e) => {
  //   const newSelect = selectedOptions.filter(
  //     (item) => item.value !== e.target.name
  //   );
  //   setSelectedOptions(newSelect);
  // };

  return (
    <>
      <div
        className='filter__accordion-header'
        aria-expanded={heightFilterAuthor !== 0}
        aria-controls='toggle-author-filters'
        onClick={toggleFilterAuthor}
      >
        {FILTER_AUTHOR_DATA.title}
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
                {FILTER_AUTHOR_DATA.selectLabel.desktop}
              </span>
              <Select
                options={FILTER_AUTHOR_DATA.options}
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
