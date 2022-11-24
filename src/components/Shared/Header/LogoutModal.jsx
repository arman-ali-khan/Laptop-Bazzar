import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextProvider';

const LogoutModal = () => {
    const {logoutUser} = useContext(AuthContext)
  const handleLogout = () =>{
    logoutUser()
    .then(()=>{
        toast.success('Logout Seccessful!!')
    })
    .catch(err=>{
        console.error(err);
    })
}

    return (
        <div>
        <input type="checkbox" id="logout-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure want to Logout</h3>
    <div className="modal-action">
      <label htmlFor="logout-modal" className="btn btn-info">Cancel</label>
      <label onClick={handleLogout} htmlFor="logout-modal" className="btn btn-error">Logout!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogoutModal;