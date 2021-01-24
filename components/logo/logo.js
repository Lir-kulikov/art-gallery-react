import React, { Component } from 'react'

import './logo.scss'

class Logo extends Component {

  render() {
    const { data } = this.props;
    const { theme } = this.props;



    return (
      <a className="logo header__logo logo--theme-dark" href={data.url}>
        <picture className="logo header__logo">
          <source srcSet={!!data.mobile ? data.mobile : data.desktop} media="(max-width: 767px)" />
          <img src={theme === 'dark' ? data.desktop : data.desktopDark} alt="logo" />
        </picture>
      </a>
    );
  };
};

export default Logo