import { initializeApp }from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDG2Vy30zpR7xUBSzEfRy3mnMvfD0mMR0k",
  authDomain: "connectify-2.firebaseapp.com",
  projectId: "connectify-2",
  storageBucket: "connectify-2.appspot.com",
  messagingSenderId: "493242804955",
  appId: "1:493242804955:web:ad3d83ef430fd98139fafe"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);