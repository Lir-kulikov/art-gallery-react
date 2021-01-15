import Nav from '../nav'
import Logo from '../logo'
import Account from '../account'
import Search from '../search';
import Lang from '../lang';

import './header.scss'

const Header = () => {
  return (
    <header className="header undefined__header header--theme-dark">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Logo />
            <Nav />
          </div>
          <div className="header__action">
            <Account />
            <button className="header__wishlist header__action-item">
              <svg className="heart-icon header__heart-icon heart-icon--theme-dark">
                <use xlinkHref="img/svg/sprite.svg#heart" />
              </svg>
              <span className="header__heart-icon-counter">85</span>
            </button>
            <button className="header__basket header__action-item">
              <svg className="basket-icon header__basket-icon basket-icon--theme-dark">
                <use xlinkHref="img/svg/sprite.svg#basket" />
              </svg>
              <span className="header__basket-icon-counter">23</span>
            </button>
            <Search />
            <Lang />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header