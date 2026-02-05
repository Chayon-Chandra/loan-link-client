import React, { useEffect, useState } from 'react';
import { AuthConText } from './AuthConText';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
          setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });  
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        registerUser,
        signInUser,
        signInGoogle,
        setUser,
        loading,
        logOut,
        user,
    }


    return (
        <AuthConText value={authInfo}>
            {children}
        </AuthConText>
    );
};

export default AuthProvider;