// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBntHhDZtN8z6sUM85QjxfSyW9qk4tni8o",
  authDomain: "ai-trip-planner-36114.firebaseapp.com",
  projectId: "ai-trip-planner-36114",
  storageBucket: "ai-trip-planner-36114.firebasestorage.app",
  messagingSenderId: "609934150934",
  appId: "1:609934150934:web:d069a4d43d9fc0749b9437",
  measurementId: "G-M6ZLLNSXDQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
