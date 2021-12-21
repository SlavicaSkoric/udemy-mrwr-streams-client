import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    //first argument - some jsx
    //as a second argument we provide a reference to the element that we want to render this portal (this jsx from the first argument) into
    document.querySelector('#modal')
  );
};
//portals used w modals or with some code that was not created by our app

export default Modal;
