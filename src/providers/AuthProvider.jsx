import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }



    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOutUser = () => {   
        return signOut(auth);
    }




    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }



    // update user profile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }




   
  



    const authInfo = {
        createUser,
        updateUser,
        signInUser,
        user,
        logOutUser,
        googleLogin,
        loading,
        setLoading


    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('Observe  current user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {

            unSubscribe

        }

    }, [])






    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;