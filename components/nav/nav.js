import React, { useState, useRef } from 'react';
import Link from 'next/link';
import useWindowSize from '../../customHooks/use-window-size';
import cn from 'classnames';

import Burger from '../burger';
import useOutsideClick from '../use-click-outside/use-click-outside';

import './nav.scss';

const Nav = ({ data, theme }) => {
  const [show, setSate] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  const toggleState = () => {
    setSate(!show);
  };

  const size = useWindowSize();
  return (
    <nav className={`nav nav--theme-${theme}`}>
      <Burger onClick={toggleState} show={show} />
      <ul className='nav__list'>
        {size.width > 1024 &&
          data.main.map((item, key) => (
            <li className='nav__item' key={item.name + key}>
              <Link href={item.url}>
                <a
                  className={`nav__link nav__link--theme-${theme}`}
                  href='catalog.html'
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        <li className='nav__item nav__item--more'>
          <a className={`nav__link nav__link--drop nav__link--theme-${theme}`}>
            {data.additionalName}
            <svg
              className={`dropdown-icon nav__dropdown-icon dropdown-icon--theme-${theme}`}
            >
              <use xlinkHref='img/svg/sprite.svg#dropdown' />
            </svg>
          </a>
          <div
            className={cn('nav__drop js-drop', { 'is-open': show === true })}
            ref={ref}
          >
            <div className='container nav__container'>
              <ul className='nav__drop-list'>
                {size.width < 1024 &&
                  data.main.map((item, key) => (
                    <li className='nav__item' key={item.name + key}>
                      <Link href={item.url}>
                        <a
                          className={`nav__link nav__link--${theme}`}
                          href={item.url}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                {data.additionalItems.map((item, key) => (
                  <li className='nav__item' key={item.name + key}>
                    <Link href={item.url}>
                      <a className='nav__link nav__link--dark' href={item.url}>
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav__company'>{data.copyright}</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
