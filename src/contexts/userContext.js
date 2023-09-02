import { createContext, useState, useEffect } from 'react';

import{
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props){

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])

  return (
    <UserContext.Provider value={{signUp, currentUser}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )

}