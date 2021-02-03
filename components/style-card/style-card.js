import './style-card.scss';

const styleCard = ({ data }) => {

  return (
    <a className='style-card style-review__style-card' href={data.url}>
      <img className='style-card__img' src={data.picture} />
      <div className='style-card__overlay'>
        <div className='style-card__title'>{data.title}</div>
        <div className='style-card__category'>
          {data.category}
        </div>
      </div>
    </a>
  );
};

export default styleCard;


