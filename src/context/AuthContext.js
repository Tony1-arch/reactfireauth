import React, { useContext, useEffect, useState} from 'react';
import { createContext } from 'react';
import { auth } from '../firebase';
import { 
     createUserWithEmailAndPassword , 
     signInWithEmailAndPassword,  
     signOut, 
     onAuthStateChanged,
     GoogleAuthProvider,
     signInWithPopup

} from "firebase/auth";


 const UserContext = createContext();

export const  Usercontex  = ({children}) => {
  const [user , setUser] = useState('')

const createUser =  (email,password) => {
    
   return createUserWithEmailAndPassword(auth, email, password);

};

const logedUser =  (email,password) => {
    
  return signInWithEmailAndPassword(auth, email, password);

};

const logOut = () => {
  return signOut(auth)
}

const signinWithGoogle = () => {
  const googleAuth  = new GoogleAuthProvider();
  return signInWithPopup(auth , googleAuth)
}

useEffect(()=> {
  const unsubscribe =  onAuthStateChanged(auth,(createUser) => {
    setUser(createUser);
   
  })

 return ()=> {
  unsubscribe()
 }
},[])

  return (
    <UserContext.Provider value={{createUser,logedUser, user,logOut ,signinWithGoogle }}>
        {children}
    </UserContext.Provider>
  )
}


export const AuthUser = () => {
   return useContext(UserContext);
}
