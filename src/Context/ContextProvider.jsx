import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext() 
const ContextProvider = ({children}) => {
    const [user,setUser] = useState({})
    const googleLogin = new GoogleAuthProvider();

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
        return signInWithPopup(auth,googleLogin)
    }

    const logoutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe();
    },[])


    const info = {user,updateUser,createUser,googleSignin,loginUser,logoutUser}


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;