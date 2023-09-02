import { createContext, useState } from 'react';

import{
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props){

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

  return (
    <UserContext.Provider value={{signUp}}>
      {props.children}
    </UserContext.Provider>
  )

}