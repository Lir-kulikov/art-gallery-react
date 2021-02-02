import { useForm } from 'react-hook-form';
import cn from 'classnames';

import './modal-res.scss';

const ModalRes = ({ openModalAutorize, openModalSuccess }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data, e) => {
    openModalSuccess();
  };

  return (
    <div className='modal-res'>
      <div className='modal-res__header'>
        <h2 className='modal-res__title title-lg'>Восстановить пароль</h2>
      </div>
      <form
        className='modal-res__body form-res'
        method='POST'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-res__item'>
          <label className='form-res__label modal-label' htmlFor='resEmail'>
            Введите свой e-mail
          </label>
          <input
            className={cn('form-res__field modal-field', {
              error: errors.resEmail,
            })}
            type='email'
            name='resEmail'
            id='resEmail'
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.resEmail && (
            <span className='error-message'>
              Поле обязательно для заполнения
            </span>
          )}
        </div>
        <button
          className='modal-res__btn btn-blue js-modal-submit'
          type='submit'
          name='res-submit'
        >
          Восстановить пароль
        </button>
        <div className='modal__question'>
          <span className='modal__question-text'>Вспомнили пароль?</span>
          <button
            className='modal__question-btn dashed'
            type='button'
            name='res-autorize'
            onClick={openModalAutorize}
          >
            Авторизоваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalRes;
