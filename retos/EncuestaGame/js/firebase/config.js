// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx3w5kr631maqzI1s4jHh15DiK8Gk3_9s",
  authDomain: "encuestagame-7c759.firebaseapp.com",
  projectId: "encuestagame-7c759",
  storageBucket: "encuestagame-7c759.appspot.com",
  messagingSenderId: "843365311501",
  appId: "1:843365311501:web:01e7e875fc1b255bcd6144",
  measurementId: "G-2EDJPYRL0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
console.log("Firestore Load");
