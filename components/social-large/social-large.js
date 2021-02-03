import './social-large.scss';

const SocialLarge = ({ data }) => {
  return (
    <div className='social-large'>
      <ul className='social-large__list'>
        {data.items.map((item, key) => {
          return (
            <li className='social-large__item' key={item.name + key}>
              <a className='social-large__link' href={item.url} target='_blank'>
                <svg className='social-large__icon'>
                  <use xlinkHref={item.icon} />
                </svg>
                <span className='social-large__text'>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLarge;
