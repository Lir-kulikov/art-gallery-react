import React, { useContext } from 'react';
import {AppContext} from '../../context/context';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import './modal-reg.scss';

const ModalReg = () => {

  const { openModalAutorize } = useContext(AppContext);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  return (
    <div className='modal-reg'>
      <div className='modal-reg__header'>
        <h2 className='modal-reg__title title-lg'>Регистрация</h2>
        <div className='modal-reg__header-row'>
          <span className='modal-reg__header-anons'>
            Это бесплатно и займет не более 3 минут
          </span>
          <div className='modal__question'>
            <span className='modal__question-text'>Уже зарегистрированы?</span>
            <button
              className='modal__question-btn dashed'
              type='button'
              name='registr'
              onClick={openModalAutorize}
            >
              Авторизоваться
            </button>
          </div>
        </div>
      </div>
      <form
        className='modal-reg__body form-reg'
        method='POST'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-reg__body-top'>
          <div className='form-reg__radio-wrapper'>
            <label className='radio' htmlFor='registr-radio-1'>
              <input
                className='radio__input'
                type='radio'
                name='registr-radio'
                id='registr-radio-1'
                defaultChecked='checked'
                ref={register({ required: true })}
                value='художник'
              />
              <span className='radio__box' />Я художник
            </label>
            <label className='radio' htmlFor='registr-radio-2'>
              <input
                className='radio__input'
                type='radio'
                name='registr-radio'
                id='registr-radio-2'
                ref={register({ required: true })}
                value='покупатель'
              />
              <span className='radio__box' />Я покупатель
            </label>
          </div>
        </div>
        <div className='form-reg__body-main'>
          <div className='form-reg__social'>
            <div className='modal__title-sm'>С помощью социальных сетей</div>
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
          <div className='form-reg__fields'>
            <div className='modal__title-sm modal__title-sm--mobile-hidden'>
              С помощью E-mail
            </div>
            <div className='form-reg__row'>
              <div className='form-reg__item form-reg__item--on-row'>
                <label
                  className='form-reg__label modal-label'
                  htmlFor='regFirstname'
                >
                  Имя
                </label>
                <input
                  className={cn('form-reg__field modal-field', {
                    error: errors.regFirstname,
                  })}
                  type='text'
                  name='regFirstname'
                  id='regFirstname'
                  ref={register({
                    required: true,
                  })}
                />
                {errors.regFirstname && (
                  <span className='error-message'>
                    Поле обязательно для заполнения
                  </span>
                )}
              </div>
              <div className='form-reg__item form-reg__item--on-row'>
                <label
                  className='form-reg__label modal-label'
                  htmlFor='regLastname'
                >
                  Фамилия
                </label>
                <input
                  className={cn('form-reg__field modal-field', {
                    error: errors.regLastname,
                  })}
                  type='text'
                  name='regLastname'
                  id='regLastname'
                  ref={register({
                    required: true,
                  })}
                />
                {errors.regLastname && (
                  <span className='error-message'>
                    Поле обязательно для заполнения
                  </span>
                )}
              </div>
            </div>
            <div className='form-reg__item'>
              <label className='form-reg__label modal-label' htmlFor='regEmail'>
                E-mail
              </label>
              <input
                className={cn('form-reg__field modal-field', {
                  error: errors.regEmail,
                })}
                type='email'
                name='regEmail'
                id='regEmail'
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.regEmail && (
                <span className='error-message'>
                  Поле обязательно для заполнения
                </span>
              )}
            </div>
            <div className='form-reg__item'>
              <label
                className='form-reg__label modal-label'
                htmlFor='regPassword'
              >
                Пароль
              </label>
              <input
                className={cn('form-reg__field modal-field', {
                  error: errors.regPassword,
                })}
                type='password'
                name='regPassword'
                id='regPassword'
                ref={register({
                  required: 'Поле обязательно для заполения',
                  minLength: {
                    value: 8,
                    message: 'Пароль должен содержать не менее 8 символов',
                  },
                })}
              />
              {errors.regPassword && (
                <span className='error-message'>
                  {errors.regPassword.message}
                </span>
              )}
            </div>
            <label className='form-reg__check' htmlFor='regCheckbox'>
              <input
                className='form-reg__check-input'
                id='regCheckbox'
                name='regCheckbox'
                type='checkbox'
                ref={register({
                  required: true,
                })}
              />
              Я согласен с{' '}
              <span
                className={cn('form-reg__check-box', {
                  error: errors.regCheckbox,
                })}
              />
              <a
                className='dashed form-reg__check-link'
                href='#'
                target='_blank'
              >
                пользовательским соглашением
              </a>
            </label>
            <button
              className='modal-reg__btn btn-blue js-modal-submit'
              type='submit'
              name='reg-submit'
            >
              зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalReg;
