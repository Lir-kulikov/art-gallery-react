import './modal-success.scss'

const ModalSuccess = () => {
  return (
    <div className="modal-success">
       <div className="modal-succes__header"> 
          <h2 className="modal-res__title title-lg">Успех!</h2>
        </div>
        <div className="modal-success__body">
          <p className="modal-success__text">Мы отправили на ваш e-mail инструкцию по сбросу пароля</p><img className="modal-success__img" src="img/succes.png" />
        </div>
    </div>
  );
};

export default ModalSuccess