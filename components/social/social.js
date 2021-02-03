import './social.scss';

const Social = ({ data }) => {

  return (
    <div className='social footer__social'>
      <ul className='social__list'>
        {data.items.map((item, key) => {
          return (
            <li className='social__item' key={key}>
              <a className='social__link' href={item.url} target='_blank'>
                <svg className='social__icon'>
                  <use xlinkHref={item.icon} />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
