import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useWindowSize from '../../customHooks/use-window-size';
import cn from 'classnames';
import './modal-autorize.scss';

const ModalAutorize = ({ openModalReg, openModalRes, modalAutorize }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const size = useWindowSize();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  useEffect(() => {
    if(errors.autorizeEmail) {
      console.log('hello');
    }
  }, [errors]);

  return (
    <div className='modal-autorize'>
      <div className='modal-autorize__header'>
        <h2 className='modal-autorize__title title-lg'>Авторизация</h2>
        <div className='modal__question'>
          <span className='modal__question-text modal__question-text--mobile-hidden'>
            Еще нет аккаунта?
          </span>
          {size.width > 767 && (
            <button
              className='modal__question-btn dashed'
              type='button'
              name='registr'
              onClick={openModalReg}
            >
              Регистрация
            </button>
          )}
        </div>
      </div>
      <div className='modal-autorize__body'>
        <div className='modal-autorize__social'>
          <div className='modal-autorize__social-title'>
            С помощью социальных сетей
          </div>
          <div className='social-large'>
            <ul className='social-large__list'>
              <li className='social-large__item'>
                <a className='social-large__link' href='#' target='_blank'>
                  <svg className='social-large__icon'>
                    <use xlinkHref='img/svg/sprite.svg#vk' />
                  </svg>
                  <span className='social-large__text'>VKontakte</span>
                </a>
              </li>
              <li className='social-large__item'>
                <a className='social-large__link' href='#' target='_blank'>
                  <svg className='social-large__icon'>
                    <use xlinkHref='img/svg/sprite.svg#facebook' />
                  </svg>
                  <span className='social-large__text'>Facebook</span>
                </a>
              </li>
              <li className='social-large__item'>
                <a className='social-large__link' href='#' target='_blank'>
                  <svg className='social-large__icon'>
                    <use xlinkHref='img/svg/sprite.svg#odnoklassniki' />
                  </svg>
                  <span className='social-large__text'>Odnoklassniki</span>
                </a>
              </li>
              <li className='social-large__item'>
                <a className='social-large__link' href='#' target='_blank'>
                  <svg className='social-large__icon'>
                    <use xlinkHref='img/svg/sprite.svg#instagram' />
                  </svg>
                  <span className='social-large__text'>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form
          className='modal-autorize__form form-autorize'
          method='POST'
          onSubmit={handleSubmit(onSubmit)}
        >
          <ul className='modal-autorize__list'>
            <li className='form-autorize__item'>
              <label
                className='form-autorize__label modal-label'
                htmlFor='autorizeEmail'
              >
                E-mail
              </label>
              <input
                className={cn('form-autorize__field modal-field', {'error' : errors.autorizeEmail})}
                type='text'
                name='autorizeEmail'
                id='autorizeEmail'
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.autorizeEmail && (
                <span className='error-message'>
                  Поле обязательно для заполнения
                </span>
              )}
            </li>
            <li className='form-autorize__item'>
              <label
                className='form-autorize__label modal-label'
                htmlFor='autorize-password'
              >
                Пароль
              </label>
              <input
                className={cn('form-autorize__field modal-field', {'error' : errors.autorizePassword})}
                type='password'
                name='autorizePassword'
                id='autorize-password'
                ref={register({
                  required: 'Поле обязательно для заполения',
                  minLength: {
                    value: 8,
                    message: 'Пароль должен содержать не менее 8 символов',
                  },
                })}
              />
              {errors.autorizePassword && (
                <span className='error-message'>
                  {errors.autorizePassword.message}
                </span>
              )}
            </li>
          </ul>
          <button
            className='modal-autorize__btn btn-blue'
            type='submit'
            name='autorize-submit'
          >
            авторизоваться
          </button>
          <div className='modal__question'>
            <span className='modal__question-text modal__question-text--mobile-hidden'>
              Забыли пароль?
            </span>
            {size.width < 767 && (
              <button
                className='modal__question-btn dashed'
                type='button'
                name='registr'
                onClick={openModalReg}
              >
                Регистрация
              </button>
            )}
            <button
              className='modal__question-btn dashed'
              type='button'
              name='restore'
              onClick={openModalRes}
            >
              Восстановить пароль
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAutorize;
