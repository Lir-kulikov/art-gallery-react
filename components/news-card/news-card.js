import './news-card.scss';

const NewsCard = ({ data }) => {
  return (
    <div className='news-card news__news-card'>
      <a className='news-card__img-link' href={data.url}>
        <img className='news-card__img' src={data.picture} />
      </a>
      <div className='news-card__info'>
        <div className='news-card__header'>
          <a className='news-card__category' href={data.category.url}>
            {data.category.name}
          </a>
          <span className='news-card__date'>{data.date}</span>
        </div>
        <span className='news-card__date news-card__date--mobile'>
          {data.date}
        </span>
        <a className='news-card__title' href={data.url}>
          {data.title}
        </a>
        <p className='news-card__intro'>{data.intro}</p>
        <a className='news-card__btn' href={data.url}>
          {data.button}
          <svg className='long-arrow-icon news-card__long-arrow-icon'>
            <use xlinkHref='img/svg/sprite.svg#long-arrow' />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
