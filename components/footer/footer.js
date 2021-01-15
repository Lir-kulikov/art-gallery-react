import Social from '../social'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col footer__col--tablet-hidden">
            <h3 className="footer__col-title">Об Artgallery</h3>
            <ul className="footer__col-list">
              <li className="footer__col-item"><a className="footer__col-link" href="#">О проекте</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Блог</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Авторы</a></li>
            </ul>
          </div>
          <div className="footer__col footer__col--tablet-hidden">
            <h3 className="footer__col-title">Покупателям</h3>
            <ul className="footer__col-list">
              <li className="footer__col-item"><a className="footer__col-link" href="#">Доставка</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Оплата</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Возврат</a></li>
            </ul>
          </div>
          <div className="footer__col footer__col--tablet-hidden">
            <h3 className="footer__col-title">Каталог</h3>
            <ul className="footer__col-list">
              <li className="footer__col-item"><a className="footer__col-link" href="#">Картины</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Коллажи</a></li>
              <li className="footer__col-item"><a className="footer__col-link" href="#">Иллюстрации</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Контакты</h3>
            <ul className="footer__col-list footer__col-list--contacts">
              <li className="footer__col-item footer__col-item"><a className="footer__col-link footer__col-link" href="tel:+799912312344">
                  <svg className="phone-icon footer__phone-icon">
                    <use xlinkHref="img/svg/sprite.svg#phone" />
                  </svg><span>+ 7 (999) 123-123-44</span></a></li>
              <li className="footer__col-item"><a className="footer__col-link footer__col-link" href="mailto:info@domainname.ru">
                  <svg className="mail-icon footer__mail-icon">
                    <use xlinkHref="img/svg/sprite.svg#mail" />
                  </svg><span className="footer__email">info@domainname.ru</span></a></li>
              <li className="footer__col-item"><a className="footer__col-link footer__col-link--no-hover">
                  <svg className="location-icon footer__location-icon">
                    <use xlinkHref="img/svg/sprite.svg#location" />
                  </svg><span className="footer__adress">г. Москва,<br /> Преснесенская наб., 12</span></a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Мы в социальных сетях:</h3>
            <Social />
            <h3 className="footer__col-title">Платёжные системы</h3><img className="footer__pay-systems" src="img/pay-systems.png" data-da="footer__top, 0, 767" data-da-index={3} />
          </div>
        </div>
      </div>
      <div className="footer__under">
        <div className="container">
          <div className="footer__under-inner">
            <div className="footer__copy"><a className="footer__copy-item" href="#">Политика конфендициальности</a><a className="footer__copy-item" href="about.html">Условия и положения</a></div><span className="footer__company">©  Artgallery, 2018</span>
            <div className="footer__creator"><img className="footer__creator-img" src="img/hawking-brothers.png" /><span className="footer__creator-text">Cайт создан </span><a className="footer__creator-link" href="#" data-mobile-text="Hawking Brothers">Разработка сайта</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;