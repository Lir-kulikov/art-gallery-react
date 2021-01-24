import React from 'react'
import cn from 'classnames'

import './burger.scss'

const Burger = ( {onClick, show} ) => {
  return (
    <button className={cn("burger nav__burger", {'is-open' : show === true})} onClick={onClick}>
      <span className="burger__line" />
    </button>
  );
};

export default Burger