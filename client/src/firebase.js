// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d9b10.firebaseapp.com",
  projectId: "mern-estate-d9b10",
  storageBucket: "mern-estate-d9b10.appspot.com",
  messagingSenderId: "109890370945",
  appId: "1:109890370945:web:9a906d987f70e9173c3c80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);