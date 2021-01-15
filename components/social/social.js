import './social.scss'

const Social = () => {
  return (
    <div className="social footer__social">
      <ul className="social__list">
        <li className="social__item"><a className="social__link" href="#" target="_blank">
            <svg className="social__icon">
              <use xlinkHref="img/svg/sprite.svg#vk" />
            </svg></a></li>
        <li className="social__item"><a className="social__link" href="#" target="_blank">
            <svg className="social__icon">
              <use xlinkHref="img/svg/sprite.svg#facebook" />
            </svg></a></li>
        <li className="social__item"><a className="social__link" href="#" target="_blank">
            <svg className="social__icon">
              <use xlinkHref="img/svg/sprite.svg#odnoklassniki" />
            </svg></a></li>
        <li className="social__item"><a className="social__link" href="#" target="_blank">
            <svg className="social__icon">
              <use xlinkHref="img/svg/sprite.svg#instagram" />
            </svg></a></li>
      </ul>
    </div>
  );
};

export default Social