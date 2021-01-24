import React, { useState } from 'react'
import cn from 'classnames'

import './modal.scss'

import Portal from '../portal'

const Modal = ( {active, setActive, children} ) => {
  return (
    <>
      {active && (
        <Portal selector="#modal">
          <div className={cn('modal', {'is-open' : active})}>
            <div className="modal__overlay" onClick={setActive(false)}>
              <div className="modal__content" onClick={e => e.stopPropagination()}>
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal