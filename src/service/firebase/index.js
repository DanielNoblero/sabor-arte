
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATtsat1nCtQmf5aRElhLWoKxxRuIXdqcY",
    authDomain: "sabor-arte2.firebaseapp.com",
    projectId: "sabor-arte2",
    storageBucket: "sabor-arte2.firebasestorage.app",
    messagingSenderId: "1039308974906",
    appId: "1:1039308974906:web:1ec5d704a013fce5457e03",
    measurementId: "G-GEJ4SK0NW3"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, auth };