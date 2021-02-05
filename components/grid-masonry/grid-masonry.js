import React, { Component } from 'react'

import './grid-masonry.scss'

import MasonryCard from '../masonry-card/masonry-card'
import MasonryFixedCard from "../masonry-fixed-card"

class GridMasonry extends Component {

  constructor(props) {
    super(props);

    this.grid = React.createRef();
    this.msnry = false;
  }

  componentDidMount() {
    this.msnry = new Masonry( this.grid.current, {
      itemSelector: '',
      columnWidth: '.js-sizer',
      gutter: '.js-gutter',
      horizontalOrder: true,
      percentPosition: true
    });
  }

  render() {

    const { data } = this.props;
    const parentClass = data.parentClass;

    return (
      <div className={`grid-masonry ${parentClass}__grid-masonry`} ref={this.grid}>
        <div className="grid-masonry__item-sizer js-sizer" />
        <div className="grid-masonry__item-gutter js-gutter" />
        <MasonryFixedCard />
        {data.items.map((item, key) => {
          switch(key) {
            case 2:
              return (
                <React.Fragment key={item.id}>
                  <MasonryCard data={item} />
                  <div className="grid-masonry__item grid-masonry__item--empty js-item hidden-tablet-down" />
                </React.Fragment>
              )
              break;
            case 6:
              return (
                <React.Fragment key={item.id}>
                  <MasonryCard data={item} />
                  <div className="grid-masonry__item grid-masonry__item--empty hidden-desktop-up hidden-mobile-down" />
                </React.Fragment>
              )
              break;
            case 7: 
              return (
                <React.Fragment key={item.id}>
                  <MasonryCard data={item} />
                  <div className="grid-masonry__item grid-masonry__item--empty hidden-desktop-up hidden-mobile-down" />
                </React.Fragment>
              )
              break;
            default:
              return (
                <React.Fragment key={item.id}>
                  <MasonryCard data={item} />
                </React.Fragment>
              )
          }
        })}
      </div>
    );
  };
}

export default GridMasonry
