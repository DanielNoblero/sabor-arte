
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAT1S-q3fQjdikIuo8DjKlUN1NBLBifWsI",
    authDomain: "sabor-arte-6aed6.firebaseapp.com",
    projectId: "sabor-arte-6aed6",
    storageBucket: "sabor-arte-6aed6.appspot.com",
    messagingSenderId: "33737595251",
    appId: "1:33737595251:web:0cfe805e5c827761164d06"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, addDoc, auth };