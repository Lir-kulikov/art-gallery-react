import './nav.scss'

const Nav = () => {
  return (
    <nav className="nav undefined__header nav--theme-dark">
      <button className="burger nav__burger js-burger"><span className="burger__line" /></button>
      <ul className="nav__list">
        <li className="nav__item" data-da="nav__drop-list, 0, 1023.7" data-da-index={0}><a className="nav__link nav__link--theme-dark" href="catalog.html">Каталог</a></li>
        <li className="nav__item" data-da="nav__drop-list, 0, 1023.8" data-da-index={1}><a className="nav__link nav__link--theme-dark" href="#">Художникам</a></li>
        <li className="nav__item" data-da="nav__drop-list, 0, 1023.9" data-da-index={2}><a className="nav__link nav__link--theme-dark" href="#">Блог</a></li>
        <li className="nav__item nav__item--more"><a className="nav__link nav__link--drop nav__link--theme-dark" href="#">Ещё
            <svg className="dropdown-icon nav__dropdown-icon dropdown-icon--theme-dark">
              <use xlinkHref="img/svg/sprite.svg#dropdown" />
            </svg></a>
          <div className="nav__drop js-drop">
            <div className="container nav__container">
              <ul className="nav__drop-list">
                <li className="nav__item"><a className="nav__link nav__link--dark" href="#">О проекте</a></li>
                <li className="nav__item"><a className="nav__link nav__link--dark" href="#">Доставка</a></li>
                <li className="nav__item"><a className="nav__link nav__link--dark nav__link--mobile-border" href="#">Политика конфиденциальности</a></li>
                <li className="nav__item"><a className="nav__link nav__link--hidden" href="#">Английская версия</a></li>
              </ul>
            </div>
            <div className="nav__company">©  Artgallery, 2018</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav