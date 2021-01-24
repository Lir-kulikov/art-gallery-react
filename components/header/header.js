import React, { Component } from 'react'

import Nav from '../nav'
import Logo from '../logo'
import Account from '../account'
import Search from '../search';
import Lang from '../lang';
import cn from 'classnames'

import './header.scss'

const HEADER_DATA = {
  logo: {
    desktop: '/img/logo.png',
    desktopDark: '/img/logo-black.png',
    mobile: '/img/AG.png',
    url: '/main'
  },
  menu: {
    main: [
      {
        name: 'Каталог',
        url: '/catalog'
      },
      {
        name: 'Художникам',
        url: ''
      },
      {
        name: 'Блог',
        url: ''
      }
    ],
    additionalName: 'Еще',
    additionalItems: [
      {
        name: 'О проекте',
        url: ''
      },
      {
        name: 'Доставка',
        url: ''
      },
      {
        name: 'Политика конфиденциальности',
        url: ''
      },
    ]
  },
  counter: {
    wishlist: '10',
    basket: '20'
  },
  lang: {
    items: [
      {
        name: 'EN',
        url: '/en'
      }
    ],
    current: {
      desktop: 'RU',
      mobile: {
        name: 'Английская версия',
        url: '/en'
      }
    }
  },
}

class Header extends Component {

  render() {

    const { onClick } = this.props;
    const { theme } = this.props;

    return (
      <header className={`header header--theme-${theme}`}>
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <Logo data={HEADER_DATA.logo} theme={theme} />
              <Nav data={HEADER_DATA.menu} theme={theme} />
            </div>
            <div className="header__action">
              <Account onClick={onClick} theme={theme} />
              <button className="header__wishlist header__action-item">
                <svg className={`heart-icon header__heart-icon heart-icon--theme-${theme}`}>
                  <use xlinkHref="img/svg/sprite.svg#heart" />
                </svg>
                <span className="header__heart-icon-counter">{HEADER_DATA.counter.wishlist}</span>
              </button>
              <button className="header__basket header__action-item">
                <svg className={`basket-icon header__basket-icon basket-icon--theme-${theme}`}>
                  <use xlinkHref="img/svg/sprite.svg#basket" />
                </svg>
                <span className="header__basket-icon-counter">{HEADER_DATA.counter.basket}</span>
              </button>
              <Search theme={theme} />
              <Lang data={HEADER_DATA.lang} theme={theme}/>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header