import './masonry-fixed-card.scss'

const MasonryFixedCard = () => {
  return (
    <div className="masonry-fixed-card grid-masonry__item-fixed-card">
      <div className="masonry-fixed-card__inner"><img className="masonry-fixed-card__img" src="img/masonry-card-fixed-1.png" />
        <h3 className="masonry-fixed-card__title">Умный выбор по параметрам с примерами</h3><a className="masonry-fixed-card__btn">Подобрать</a>
      </div>
    </div>
  );
};

export default MasonryFixedCard