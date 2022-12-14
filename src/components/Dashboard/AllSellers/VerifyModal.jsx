import React from 'react';

const VerifyModal = ({info}) => {
    const handleVerify =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <input type="checkbox" id="verify-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="verify-modal" className="btn btn-sm btn-outline">Cancel</label>
      <label onClick={()=>handleVerify(info?._id)} htmlFor="verify-modal" className="btn btn-sm btn-success">Verify </label>
    </div>
  </div>
</div>
        </div>
    );
};

export default VerifyModal;