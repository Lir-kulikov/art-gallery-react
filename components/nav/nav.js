import React, { useState, useRef } from 'react'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import cn from 'classnames'

import Burger from '../burger'
import useOutsideClick from "../use-click-outside/use-click-outside";

import './nav.scss'

const Nav = (props) => {

  const { data } = props;
  const { theme } = props;

  const [show, setSate] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  const toggleState = () => {
    setSate(!show);
  };

  return (
    <nav className={`nav nav--theme-${theme}`}>
        <Burger onClick={toggleState} show={show} />
      <ul className="nav__list">
        <MediaQuery minWidth={1024}>
          {data.main.map((item, key) => (
            <li className="nav__item" key={item.name + key}>
              <Link href={item.url}>
                <a className={`nav__link nav__link--theme-${theme}`} href="catalog.html">{item.name}</a>
              </Link>
            </li>
          ))}
        </MediaQuery>
        <li className="nav__item nav__item--more">
          <a className={`nav__link nav__link--drop nav__link--theme-${theme}`}>
            {data.additionalName}
            <svg className={`dropdown-icon nav__dropdown-icon dropdown-icon--theme-${theme}`}>
              <use xlinkHref="img/svg/sprite.svg#dropdown" />
            </svg>
          </a>
          <div className={cn("nav__drop js-drop", {'is-open' : show === true})} ref={ref}>
            <div className="container nav__container">
              <ul className="nav__drop-list">
                <MediaQuery maxWidth={1023.9}>
                  {data.main.map((item, key) => (
                    <li className="nav__item" key={item.name + key}>
                      <Link href={item.url}>
                        <a className="nav__link nav__link--theme-dark" href={item.url}>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </MediaQuery>
                {data.additionalItems.map((item, key) => (
                  <li className="nav__item" key={item.name + key}>
                    <Link href={item.url}>
                      <a className="nav__link nav__link--dark" href={item.url}>{item.name}</a>
                    </Link>
                  </li>
                  
                ))}
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