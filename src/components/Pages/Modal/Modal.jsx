// import React, { useContext } from "react";
// import { AuthContext } from "../../../Context/ContextProvider";

// const Modal = ({ info }) => {
//   const { user } = useContext(AuthContext);
//   const {name, sellPrice} = info;
//   return (
//     <div>
//       <input type="checkbox" id="open_modal" className="modal-toggle" />
//       <div className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Buy Now {info?.seller}</h3>
//          <div className="flex">
//          <div>
//             <label htmlFor="">Name</label> <br />
//             <input
//               className="input input-bordered"
//               defaultValue={user?.displayName}
//               type="text" readOnly
//             />
//           </div>
//           <div>
//             <label htmlFor="">Email</label> <br />
//             <input readOnly
//               className="input input-bordered"
//               defaultValue={user?.email}
//               type="text"
//             />
//           </div>
//          </div>
        
//          <div className="flex">
//          <div>
//             <label htmlFor="">Item Name</label> <br />
//             <input
//               className="px-4 py2" readOnly
//               defaultValue={name}
//               type="text"
//             />
//           </div>
//           <div>
//             <label htmlFor="">Price</label> <br />
//             <input
//               className="px-4 py2" readOnly
//               defaultValue={sellPrice}
//               type="tex
//               t"
//             />
//           </div>
//          </div>
        
//           <div className="modal-action">
//             <label htmlFor="open_modal" className="btn">
//               Yay!
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
