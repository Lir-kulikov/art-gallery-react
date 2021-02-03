import React, { Component } from 'react';
import Select from 'react-select';

import './sort.scss';

class Sort extends Component {

  render() {
    const { parentClass, data } = this.props;
    
    return (
      <div className={`sort ${parentClass}__sort`}>
        <label className='sort__label'>{data.label}</label>
        <Select
          options={data.options}
          defaultValue={data.options[0]}
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
