import { initializeApp }from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDRTrPajDezbaLbtqUsp5N6Yh7RD12P-Zo",
  authDomain: "connectify-39ffb.firebaseapp.com",
  projectId: "connectify-39ffb",
  storageBucket: "connectify-39ffb.appspot.com",
  messagingSenderId: "1029805952824",
  appId: "1:1029805952824:web:abad6b4d560a777cd3bbcd"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);