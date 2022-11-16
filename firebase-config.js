import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyB-Z4aePhW89r6jGzWcp8cE5Zd2OpHkRqo",
  authDomain: "confbeer-5a512.firebaseapp.com",
  projectId: "confbeer-5a512",
  storageBucket: "confbeer-5a512.appspot.com",
  messagingSenderId: "769878642829",
  appId: "1:769878642829:web:96296be9afac51159e52c4"
};




export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

