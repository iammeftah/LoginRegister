import React from 'react';
import { CSSTransition } from 'react-transition-group';

const TransitionContainer = ({ children, isVisible, transitionClassNames }) => {
  return (
    <CSSTransition
      in={isVisible}
      timeout={{ enter: 800, exit: 0 }} // Enter with a delay, exit immediately
      classNames={transitionClassNames}
      unmountOnExit
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <CSSTransition
          in={isVisible}
          timeout={800} // This is for the fade transition of the forms
          classNames="fade"
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default TransitionContainer;
