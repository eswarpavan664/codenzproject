/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2sO8OmA_-6gU6qPCj_OeO7YbshQme_qg",
  authDomain: "codenzlms.firebaseapp.com",
  projectId: "codenzlms",
  storageBucket: "codenzlms.appspot.com",
  messagingSenderId: "919895202944",
  appId: "1:919895202944:web:04ca84b2cfcc95f9341a65",
  measurementId: "G-LJQ4TBLXP6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

 
export const database = getDatabase(app);