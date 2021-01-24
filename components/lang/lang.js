import React, { useState, useRef } from 'react'
import useOutsideClick from "../use-click-outside/use-click-outside";

import './lang.scss'

const Lang = (props) => {

  const { data, theme } = props;

  const [show, setSate] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  const toggleState = () => {
    setSate(!show);
  };

  return (
    <div className={`lang header__lang header__action-item lang--theme-${theme}`}>
        <button className="lang__btn js-lang-opener" onClick={toggleState}>{data.current.desktop}</button>
      {show && (
        <div className="lang__drop js-lang-drop" ref={ref}>
          <a className="lang__link" href={data.items[0].url}>{data.items[0].name}</a>
        </div>
      )}
    </div>
  );  
};

export default Lang