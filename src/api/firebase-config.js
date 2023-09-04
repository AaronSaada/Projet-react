import { initializeApp }from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAocDxz6xHZCv-rjV1Gw6eOJuA1dLCHrFY",
  authDomain: "react-auth-rrv6-e1bd9.firebaseapp.com",
  projectId: "react-auth-rrv6-e1bd9",
  storageBucket: "react-auth-rrv6-e1bd9.appspot.com",
  messagingSenderId: "579830180390",
  appId: "1:579830180390:web:69a844675b0a95857b54e7"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);