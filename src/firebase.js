// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Your Firebase Config (you already have this)
const firebaseConfig = {
  apiKey: "AIzaSyBTMV6Gcc6PCjRNBX7jZ6ginR5Fms1Yu6o",
  authDomain: "chat-app-7e69b.firebaseapp.com",
  projectId: "chat-app-7e69b",
  storageBucket: "chat-app-7e69b.appspot.com",
  messagingSenderId: "247554259489",
  appId: "1:247554259489:web:57a28562a9e36a84c70160",
  measurementId: "G-4FTYVQG8W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🧑‍💻 Export Auth & Provider for Login
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// 🔥 Firestore DB for Chat
export const db = getFirestore(app);
