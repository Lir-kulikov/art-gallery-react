import React, { useState, useRef } from 'react'
import useOutsideClick from "../use-click-outside/use-click-outside";

import './account.scss'

const Account = () => {

  const [show, setSate] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  const toggleState = () => {
    setSate(!show);
  };

  return (
    <div className="account header__account header__action-item account--theme-dark">
      <button className="account__btn" data-modal-open="modal-autorize" onClick={toggleState}>
        <svg className="user-icon account__user-icon user-icon--theme-dark">
          <use xlinkHref="img/svg/sprite.svg#user" />
        </svg>
      </button>
      {show && (
        <div className="account__drop js-account-drop" ref={ref}>
          <ul className="account__menu-group">
            <li className="account__menu-item">
              <a className="account__menu-link" href="#">Мой профиль</a></li>
            <li className="account__menu-item">
              <a className="account__menu-link" href="#">Мои заказы</a></li>
            <li className="account__menu-item">
              <a className="account__menu-link" href="#">Сообщения</a></li>
          </ul>
          <ul className="account__menu-group">
            <li className="account__menu-item">
              <a className="account__menu-link" href="#">Настройки профиля</a></li>
            <li className="account__menu-item">
              <a className="account__menu-link" href="#">Мои работы</a></li>
          </ul>
          <button className="account__btn-close">
            <svg className="logout-icon account__logout-icon">
              <use xlinkHref="img/svg/sprite.svg#logout" />
            </svg>Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default Account