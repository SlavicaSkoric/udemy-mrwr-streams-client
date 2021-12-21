import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>
        ksajdskj klahsdlashasj
      </div>
    </div>,
    //first argument - some jsx
    //as a second argument we provide a reference to the element that we want to render this portal (this jsx from the first argument) into
    document.querySelector('#modal')
  );
};

export default Modal;
