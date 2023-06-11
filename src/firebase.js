// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfuNIkbMas3UDaHJikcQ0axariCCbdI4U",
  authDomain: "bookclub-1769d.firebaseapp.com",
  projectId: "bookclub-1769d",
  storageBucket: "bookclub-1769d.appspot.com",
  messagingSenderId: "475521851797",
  appId: "1:475521851797:web:a3c81ff5bbf6ab90fd969c",
  measurementId: "G-V673Z5Y9HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;