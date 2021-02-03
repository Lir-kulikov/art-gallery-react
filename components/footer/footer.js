import Social from '../social';
import './footer.scss';

const Footer = ({ data }) => {

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__top'>
          <div className='footer__col footer__col--tablet-hidden'>
            <h3 className='footer__col-title'>{data.about.title}</h3>
            <ul className='footer__col-list'>
              {data.about.items.map((item, key) => {
                return (
                  <li className='footer__col-item' key={item.name + key}>
                    <a className='footer__col-link' href={item.url}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer__col footer__col--tablet-hidden'>
            <h3 className='footer__col-title'>{data.buyers.title}</h3>
            <ul className='footer__col-list'>
              {data.buyers.items.map((item, key) => {
                return (
                  <li className='footer__col-item' key={item.name + key}>
                    <a className='footer__col-link' href={item.url}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer__col footer__col--tablet-hidden'>
            <h3 className='footer__col-title'>{data.catalog.title}</h3>
            <ul className='footer__col-list'>
              {data.catalog.items.map((item, key) => {
                return (
                  <li className='footer__col-item' key={item.name + key}>
                    <a className='footer__col-link' href={item.url}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer__col'>
            <h3 className='footer__col-title'>{data.contacts.title}</h3>
            <ul className='footer__col-list footer__col-list--contacts'>
              {data.contacts.items.map((item, key) => {
                return (
                  <li className='footer__col-item' key={item.name + key}>
                    <a className='footer__col-link' href={item.url}>
                      <svg className={`${item.iconClass} footer__${item.iconClass}`}>
                        <use xlinkHref={item.icon} />
                      </svg>
                      <span className='footer__col-text'>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer__col'>
            <h3 className='footer__col-title'>{data.social.title}</h3>
            <Social data={data.social} />
            <h3 className='footer__col-title'>{data.payment.title}</h3>
            <img
              className='footer__pay-systems'
              src={data.payment.picture}
              data-da='footer__top, 0, 767'
              data-da-index={3}
            />
          </div>
        </div>
      </div>
      <div className='footer__under'>
        <div className='container'>
          <div className='footer__under-inner'>
            <div className='footer__copy'>
              <a className='footer__copy-item' href={data.under.policy.url}>
              {data.under.policy.name}
              </a>
              <a className='footer__copy-item' href={data.under.terms.url}>
              {data.under.terms.name}
              </a>
            </div>
            <span className='footer__company'>{data.under.copyright.name}</span>
            <div className='footer__creator'>
              <img
                className='footer__creator-img'
                src={data.under.developer.picture}
              />
              <span className='footer__creator-text'>{data.under.developer.name}</span>
              <a
                className='footer__creator-link'
                href={data.under.developer.url}
                data-mobile-text={data.under.developer.mobileName}
              >
                Разработка сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
