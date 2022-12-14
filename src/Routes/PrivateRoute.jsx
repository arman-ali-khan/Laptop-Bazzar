import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Pages/Spinner/Spinner';
import { AuthContext } from '../Context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext) 
    if(loading){
        return <Spinner/>
    }

    if(!user){
        return <Navigate to='/  '></Navigate>
    }

    return  children
    
};

export default PrivateRoute;