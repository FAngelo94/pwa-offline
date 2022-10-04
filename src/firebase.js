// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// src/firebase.js
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaTEXIFS0Ef0Qh_1hGFwMZQ0DB4t7a1YE",
  authDomain: "pwa-offline.firebaseapp.com",
  projectId: "pwa-offline",
  storageBucket: "pwa-offline.appspot.com",
  messagingSenderId: "427130952172",
  appId: "1:427130952172:web:00ff3c69e436b3578e08c9",
  measurementId: "G-D21C3ZBGD0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export default firebase;