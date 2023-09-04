import { createContext, useState, useEffect } from 'react';

import{
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../api/firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props){

  // On créer ici une constante signUp qui contiend les informations nécessaires pour s'inscrire. Ici on utilisera l'Email et le mot de passe.
  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

  // On créer ici une constante signIn qui contiend les informations nécessaires pour se connecter. Ici on utilisera l'Email et le mot de passe.
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

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
    <UserContext.Provider value={{signUp, signIn, currentUser}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )

}