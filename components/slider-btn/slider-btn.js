import React from 'react'
import './slider-btn.scss'

const SliderBtn = ( {parentClass} ) => {

  return (
    <>
      <button className={`slider-btn slider-btn--left ${parentClass}__slider-btn--left`}>
        <svg className="slider-btn__icon">
          <use xlinkHref="img/svg/sprite.svg#arrow-left" />
        </svg>
      </button>
      <button className={`slider-btn slider-btn--right ${parentClass}__slider-btn--right`}>
        <svg className="slider-btn__icon">
          <use xlinkHref="img/svg/sprite.svg#arrow-right" />
        </svg>
      </button>
    </>
  );
};

export default SliderBtn