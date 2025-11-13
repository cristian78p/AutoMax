import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1G2OLtbvFoAKYgstUWl025NMF9Jzhy8M",
  authDomain: "auto-max-5c033.firebaseapp.com",
  projectId: "auto-max-5c033",
  storageBucket: "auto-max-5c033.firebasestorage.app",
  messagingSenderId: "536496874418",
  appId: "1:536496874418:web:38084b474499568ff1baab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
