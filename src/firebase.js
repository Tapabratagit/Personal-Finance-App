// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwBqZQDlqlzQQuwit4Vi9ZVYDpdqJSLjY",
  authDomain: "personalfinanceapp-d663d.firebaseapp.com",
  projectId: "personalfinanceapp-d663d",
  storageBucket: "personalfinanceapp-d663d.appspot.com",
  messagingSenderId: "738729986784",
  appId: "1:738729986784:web:e1954c127fedd28bab9e85",
  measurementId: "G-1QPZL847CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };