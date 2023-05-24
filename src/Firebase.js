// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore,doc,setDoc} from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JLER7kZWmJSFqvTnFYHoroZS5nsgzRk",
  authDomain: "carin-66b87.firebaseapp.com",
  projectId: "carin-66b87",
  storageBucket: "carin-66b87.appspot.com",
  messagingSenderId: "791751438796",
  appId: "1:791751438796:web:6a37381fb30a0ea224ad69",
  measurementId: "G-7JJQQT2NYV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const firestore=getFirestore(app);

export const basededatos = getDatabase(app);
