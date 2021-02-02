import React, { Component } from 'react';
import Select from 'react-select';

import './sort.scss';

const SORT_DATA = {
  label: 'Сортировать по',
  options: [
    { label: 'Дате добавления', value: 'Дате добавления' },
    { label: 'Цене', value: 'Цене' },
    { label: 'Популярности', value: 'Популярности' },
  ],
};

class Sort extends Component {

  render() {
    const { parentClass } = this.props;

    return (
      <div className={`sort ${parentClass}__sort`}>
        <label className='sort__label'>Сортировать по</label>
        <Select
          options={SORT_DATA.options}
          defaultValue={SORT_DATA.options[0]}
          className='sort-select'
          classNamePrefix='sort-select'
          instanceId='sort'
          isSearchable={false}
          isClearable={false}
        />
      </div>
    );
  }
}

export default Sort;
