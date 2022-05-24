import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "yt-clone-e298b.firebaseapp.com",
  projectId: "yt-clone-e298b",
  storageBucket: "yt-clone-e298b.appspot.com",
  messagingSenderId: "644383917263",
  appId: "1:644383917263:web:cc9269b41845f1c953a3ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
