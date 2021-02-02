import './article-card.scss';

const ArticleCard = ({ data }) => {
  return (
    <div className='article-card start__card'>
      <a className='article-card__img-link' href={data.url}>
        <img className='article-card__img' src={data.picture} />
      </a>
      <a className='article-card__category' href={data.category.url}>
        {data.category.text}
      </a>
      <a className='article-card__title' href={data.url}>
        {data.title}
      </a>
    </div>
  );
};

export default ArticleCard;
