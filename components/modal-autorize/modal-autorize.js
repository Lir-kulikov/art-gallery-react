import React from 'react'
import './modal-autorize.scss'

const ModalAutorize = () => {
  return (
    <div className="modal-autorize">
      <div className="modal-autorize__header">
        <h2 className="modal-autorize__title title-lg">Авторизация</h2>
        <div className="modal__question"><span className="modal__question-text modal__question-text--mobile-hidden">Еще нет аккаунта?</span>
          <button className="modal__question-btn dashed js-next-modal" data-da="modal__question--da, 1, 767" type="button" name="registr" data-modal-open="modal-reg">Регистрация</button>
        </div>
      </div>
      <div className="modal-autorize__body">
        <div className="modal-autorize__social">
          <div className="modal-autorize__social-title">С помощью социальных сетей</div>
          <div className="social-large">
            <ul className="social-large__list">
              <li className="social-large__item"><a className="social-large__link" href="#" target="_blank">
                  <svg className="social-large__icon">
                    <use xlinkHref="img/svg/sprite.svg#vk" />
                  </svg><span className="social-large__text">VKontakte</span></a></li>
              <li className="social-large__item"><a className="social-large__link" href="#" target="_blank">
                  <svg className="social-large__icon">
                    <use xlinkHref="img/svg/sprite.svg#facebook" />
                  </svg><span className="social-large__text">Facebook</span></a></li>
              <li className="social-large__item"><a className="social-large__link" href="#" target="_blank">
                  <svg className="social-large__icon">
                    <use xlinkHref="img/svg/sprite.svg#odnoklassniki" />
                  </svg><span className="social-large__text">Odnoklassniki</span></a></li>
              <li className="social-large__item"><a className="social-large__link" href="#" target="_blank">
                  <svg className="social-large__icon">
                    <use xlinkHref="img/svg/sprite.svg#instagram" />
                  </svg><span className="social-large__text">Instagram</span></a></li>
            </ul>
          </div>
        </div>
        <form className="modal-autorize__form form-autorize" method="POST">
          <ul className="modal-autorize__list">
            <li className="form-autorize__item">
              <label className="form-autorize__label modal-label" htmlFor="autorize-email">E-mail</label>
              <input className="form-autorize__field modal-field" type="email" name="autorize-email" id="autorize-email" required="required" />
            </li>
            <li className="form-autorize__item">
              <label className="form-autorize__label modal-label" htmlFor="autorize-password">Пароль</label>
              <input className="form-autorize__field modal-field" type="password" name="autorize-password" id="autorize-password" minLength={6} required="required" />
            </li>
          </ul>
          <button className="modal-autorize__btn btn-blue js-modal-submit" type="submit" name="autorize-submit">авторизоваться</button>
          <div className="modal__question modal__question--da"><span className="modal__question-text modal__question-text--mobile-hidden">Забыли пароль?</span>
            <button className="modal__question-btn dashed js-next-modal" type="button" name="restore" data-modal-open="modal-res">Восстановить пароль</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAutorize