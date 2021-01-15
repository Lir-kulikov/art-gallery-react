import './logo.scss'

const Logo = () => {
  return (
    <a className="logo header__logo logo--theme-dark" href="index.html">
      <picture className="logo header__logo">
        <source srcSet="img/AG.png" media="(max-width: 767px)" />
        <img src="img/logo.png" alt="logo" />
      </picture>
    </a>
  );
};

export default Logo