import React from 'react'
import cn from 'classnames'

import './masonry-card.scss'

class MasonryCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      favourite: this.props.data.favourite,
      basket: this.props.data.basket
    };
  };

  favouriteChange = () => {
    this.setState({
      favourite: !this.state.favourite
    });
  };

  basketChange = () => {
    this.setState({
      basket: !this.state.basket
    });
  };

  render() {

    const { data } = this.props

    return (
      <div className="masonry-card grid-masonry__item js-grid-item">
        <a className="masonry-card__img-wrapper" href="#">
          <img className="masonry-card__img" src={data.picture} />
        </a>
        <div className="masonry-card__info">
          {!!data.tag && !!data.tag.text && <span className={`card-sticker masonry-card__card-sticker card-sticker--${data.tag.color === 'red' ? 'new' : 'sale'}`}>{data.tag.text}</span>}
          <a className="masonry-card__title" href={data.url}>{data.title}</a>
          <a className="masonry-card__author" href={data.author.url}>{data.author.name}</a>
          <span className="masonry-card__type">{data.size}</span>
        </div>
        <div className="masonry-card__footer">
          <div className="masonry-card__price">{Number(data.price).toLocaleString('ru-RU')}</div>
          <div className="masonry-card__old-price">{Number(data.oldPrice).toLocaleString('ru-RU')}</div>
          <div className="masonry-card__actions">
            <svg className={cn('heart-icon masonry-card__heart-icon js-icon', {'is-active': this.state.favourite})} onClick={this.favouriteChange}>
              <use xlinkHref="img/svg/sprite.svg#heart" />
            </svg>
            <svg className={cn("basket-icon masonry-card__basket-icon js-icon basket-icon--fixed", {'is-active': this.state.basket})} onClick={this.basketChange}>
              <use xlinkHref="img/svg/sprite.svg#basket" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

}

export default MasonryCard