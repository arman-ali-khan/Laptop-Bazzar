import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile} from 'firebase/auth'
import { useQuery } from '@tanstack/react-query';

const auth = getAuth(app)
export const AuthContext = createContext() 
const ContextProvider = ({children}) => {
    const [loading,setLoading] = useState(true)


    const [user,setUser] = useState({})


    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (profile)=>{
        
        return updateProfile(auth.currentUser,profile)
    }

    const loginUser = (email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logoutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])



    const [dbUser,setDbUser] = useState({})
    useEffect(()=>{
        fetch(`https://laptop-bazzar-sparmankhan.vercel.app/dbusers?email=${user?.email}`,{
           headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
           }
        })
        .then(res=>res.json())
        .then(data=> setDbUser(data))
    },[user?.email,dbUser])


    
    const info = {user,loading,dbUser,updateUser,createUser,googleSignin,loginUser,logoutUser,setLoading}


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;