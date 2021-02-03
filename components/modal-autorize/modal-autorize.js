import React, { useContext } from 'react';
import {AppContext} from '../../context/context';
import { useForm } from 'react-hook-form';
import useWindowSize from '../../customHooks/use-window-size';
import SocialLarge from '../social-large'
import cn from 'classnames';
import './modal-autorize.scss';

const ModalAutorize = ({ data }) => {

  const { openModalReg, openModalRes } = useContext(AppContext);

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const size = useWindowSize();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  return (
    <div className='modal-autorize'>
      <div className='modal-autorize__header'>
        <h2 className='modal-autorize__title title-lg'>{data.title}</h2>
        <div className='modal__question'>
          <span className='modal__question-text modal__question-text--mobile-hidden'>
            {data.registration.question}
          </span>
          {size.width > 767 && (
            <button
              className='modal__question-btn dashed'
              type='button'
              name='registr'
              onClick={openModalReg}
            >
              {data.registration.button}
            </button>
          )}
        </div>
      </div>
      <div className='modal-autorize__body'>
        <div className='modal-autorize__social'>
          <div className='modal__title-sm'>
            {data.social.title}
          </div>
          <SocialLarge data={data.social} />
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
                {data.fields.email}
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
                {data.fields.password}
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
            {data.submit}
          </button>
          <div className='modal__question'>
            <span className='modal__question-text modal__question-text--mobile-hidden'>
              {data.reset.question}
            </span>
            {size.width < 767 && (
              <button
                className='modal__question-btn dashed'
                type='button'
                name='registr'
                onClick={openModalReg}
              >
                {data.registration.button}
              </button>
            )}
            <button
              className='modal__question-btn dashed'
              type='button'
              name='restore'
              onClick={openModalRes}
            >
              {data.reset.button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAutorize;
