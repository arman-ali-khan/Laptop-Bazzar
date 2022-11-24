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
        refetch()
        return updateProfile(auth.currentUser,profile)
    }

    const loginUser = (email,password)=>{
        refetch()
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
            refetch()
        })
        return ()=> unsubscribe();
    },[])


    const {data:dbUser={},refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            setLoading(false)
            refetch()
            return data;
        }
    })

    refetch()
    const info = {user,loading,dbUser,refetch,updateUser,createUser,googleSignin,loginUser,logoutUser}


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;