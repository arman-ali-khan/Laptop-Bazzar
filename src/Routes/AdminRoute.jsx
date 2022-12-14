import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';

const AdminRoute = ({children}) => {

    const {dbUser,loading} = useContext(AuthContext);


    if(loading){
        return <div>Loading...</div>
    }

    if(dbUser?.role==='admin'){
        return children
    }

   return  <Navigate to='/login'/>
};

export default AdminRoute;