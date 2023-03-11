// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjrUUci_vpLr_gyCH7H77aT7GlWyRVyrQ",
  authDomain: "music-api-22918.firebaseapp.com",
  projectId: "music-api-22918",
  storageBucket: "music-api-22918.appspot.com",
  messagingSenderId: "1040759477270",
  appId: "1:1040759477270:web:af8bd681cc17f4ab119137",
  measurementId: "G-3NZ4BXYR4R",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
