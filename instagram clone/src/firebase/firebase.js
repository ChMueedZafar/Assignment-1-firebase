import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDwbsZtNsWx73nOVOMgSSg6LvJLpris4aw",
  authDomain: "instagram-clone-30a52.firebaseapp.com",
  projectId: "instagram-clone-30a52",
  storageBucket: "instagram-clone-30a52.appspot.com",
  messagingSenderId: "420097309114",
  appId: "1:420097309114:web:97b7434901ddf218e9c583",
  measurementId: "G-20L5E459TX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};