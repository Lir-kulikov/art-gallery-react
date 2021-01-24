import './share.scss'

const Share = ( {parentClass} ) => {
  
  const DATA_SHARE = {
    items: [
      {
        id: '0',
        url: '#',
        icon: '/img/svg/sprite.svg#vk'
      },
      {
        id: '1',
        url: '#',
        icon: '/img/svg/sprite.svg#facebook'
      },
      {
        id: '2',
        url: '#',
        icon: '/img/svg/sprite.svg#odnoklassniki'
      },
      {
        id: '3',
        url: '#',
        icon: '/img/svg/sprite.svg#instagram'
      },
    ]
  }

  return (
    <div className={`share ${parentClass}__share`}>
      <ul className="share__list">
        {DATA_SHARE.items.map((item) => {
          return (
            <li className="share__item" key={item.id}>
              <a className="share__link" href={item.url} target="_blank">
                <svg className="share__icon">
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

export default Share