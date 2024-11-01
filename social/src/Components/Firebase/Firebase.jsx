import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDHQYmSdu8ZfE29UrK6BdATJLg7IGLG-gI",
  authDomain: "social-20689.firebaseapp.com",
  projectId: "social-20689",
  storageBucket: "social-20689.firebasestorage.app",
  messagingSenderId: "964514974189",
  appId: "1:964514974189:web:cd051f5953153eb3bd7fe4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };