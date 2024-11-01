// AppContext.js
import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../Firebase/Firebase";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AppContext = ({ children }) => {
  const collectionUsersRef = collection(db, "users");
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;
      const q = query(collectionUsersRef, where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collectionUsersRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          authProvider: popup.providerId,
        });
      }
    } catch (err) {
      setError("Google sign-in failed");
      console.error(err.message);
    }
  };

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Login failed. Check your email and password.");
      console.error(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      setError(null);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collectionUsersRef, {
        uid: user.uid,
        name,
        providerId: "email/password",
        email: user.email,
      });
    } catch (err) {
      setError("Registration failed");
      console.error(err.message);
    }
  };

  const sendPasswordToUser = async (email) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      setError("Failed to send reset email");
      console.error(err.message);
    }
  };

  const signOutUser = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
      setUserData(null);
      navigate("/login");
    } catch (err) {
      setError("Failed to sign out");
      console.error(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const q = query(collectionUsersRef, where("uid", "==", currentUser.uid));
        const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
          setUserData(snapshot.docs[0]?.data());
        });
        setUser(currentUser);
        setLoading(false);
        return () => unsubscribeSnapshot();
      } else {
        setUser(null);
        setUserData(null);
        setLoading(false);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const initialState = {
    signInWithGoogle,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordToUser,
    signOutUser,
    user,
    userData,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={initialState}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppContext;
