import './lang.scss'

const Lang = () => {
  return (
    <div className="lang header__lang header__action-item lang--theme-dark">
      <button className="lang__btn js-lang-opener">RU</button>
      <div className="lang__drop js-lang-drop"><a className="lang__link" href="#">EN</a></div>
    </div>
  );
};

export default Lang