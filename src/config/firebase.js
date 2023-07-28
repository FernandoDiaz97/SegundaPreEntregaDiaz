// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}   from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__e_Yu8qRR3FeokoxE16msxOtk4ESeog",
  authDomain: "proyectofinal-802ed.firebaseapp.com",
  projectId: "proyectofinal-802ed",
  storageBucket: "proyectofinal-802ed.appspot.com",
  messagingSenderId: "780071968174",
  appId: "1:780071968174:web:a56b1b9213c3dc052b7c3f",
  measurementId: "G-4Z743GH5T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
