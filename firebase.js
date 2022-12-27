// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLY8H20X_S7puM4jN5PBANO78IJ60JGM",
  authDomain: "campunity-64527.firebaseapp.com",
  projectId: "campunity-64527",
  storageBucket: "campunity-64527.appspot.com",
  messagingSenderId: "783006847070",
  appId: "1:783006847070:web:8a382686c61b5e092924cf",
  measurementId: "G-5HE07BDPRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
// const analytics = getAnalytics(app);

export { auth, db };
