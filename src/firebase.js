// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1g8Q62ietBlNEz86tofZj9eIDXd7K5aQ",
  authDomain: "todo-app-b9886.firebaseapp.com",
  projectId: "todo-app-b9886",
  storageBucket: "todo-app-b9886.appspot.com",
  messagingSenderId: "315101559758",
  appId: "1:315101559758:web:ecb85744fb546f5a21099f",
  measurementId: "G-SHKKVZ41NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);