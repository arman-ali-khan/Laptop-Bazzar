import React from 'react';

const Modal = ({info}) => {
    return (
        <div>
            <input type="checkbox" id="open_modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Buy Now {info}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="open_modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;