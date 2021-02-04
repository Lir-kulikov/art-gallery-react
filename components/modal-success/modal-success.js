import './modal-success.scss';

const ModalSuccess = ({ data }) => {
  return (
    <div className='modal-success'>
      <div className='modal-succes__header'>
        <h2 className='modal-res__title title-lg'>{data.title}</h2>
      </div>
      <div className='modal-success__body'>
        <p className='modal-success__text'>
          {data.text}
        </p>
        <img className='modal-success__img' src={data.picture} />
      </div>
    </div>
  );
};

export default ModalSuccess;
