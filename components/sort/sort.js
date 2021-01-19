import React, { Component } from "react";

import './sort.scss'

class Sort extends Component {

  constructor(props) {
    super(props);

    this.sort = React.createRef();
    this.choices = false;
  }

  componentDidMount() {
    this.choices = new Choices( this.sort.current, {
      searchEnabled: false,
      itemSelectText: '',
      position: 'bottom'
    });
  };

  render() {

    const { parentClass } = this.props;

    return(
      <div className={`sort ${parentClass}__sort`}>
        <label className="sort__label">Сортировать по</label>
        <select className="sort__select" id="choices-sort" ref={this.sort}>
          <option value="Дате добавления" />
          <option value="Цене" />
          <option value="Популярности" />
        </select>
      </div>
    );
  };
}

export default Sort