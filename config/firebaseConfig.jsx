// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "srmapp-29538.firebaseapp.com",
  projectId: "srmapp-29538",
  storageBucket: "srmapp-29538.appspot.com",
  messagingSenderId: "467303252710",
  appId: "1:467303252710:web:a89d590040f1ae976ef127",
  measurementId: "G-MDXFH2QS7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);