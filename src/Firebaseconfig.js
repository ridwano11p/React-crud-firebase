// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCxcr_gzmf27EY4F5gu5VrhHX7FHdHmfBc",
  authDomain: "training-auth-644b6.firebaseapp.com",
  projectId: "training-auth-644b6",
  storageBucket: "training-auth-644b6.appspot.com",
  messagingSenderId: "559375014718",
  appId: "1:559375014718:web:8fe45fc2696997f6dd6a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const  auth = getAuth(app);
  export const db = getFirestore(app);
  export const database = getDatabase(app);
export default app