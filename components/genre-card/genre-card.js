import React, { Component } from 'react'

import './genre-card.scss'

class GenreCard extends Component {


  render() {

    const { data } = this.props;

    return (
      <a className="genre-card" href={data.url}>
        <div className="genre-card__img" style={{backgroundImage: `url(${data.picture})`}} />
        <div className="genre-card__title">{data.title}</div>
      </a>
    );
  };
}

export default GenreCard

