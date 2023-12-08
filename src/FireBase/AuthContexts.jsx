import React, { useContext, useEffect, useState } from "react";

import { auth, db } from "./config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { setUser } from "../features/user/UserSlice.js";

const AuthContext = React.createContext();

export const AuthContexts = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setCurrentUser] = useState();
  const [isLoading, setLoading] = useState(true);

  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user?.uid;
          const userColl = collection(db, "users");
          const docRef = query(userColl, where("uid", "==", uid));
          const res = await getDocs(docRef);
          if (res.docs.length != 0) {
            const data = res.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));

            dispatch(setUser(data[0]));
          }
        } catch (error) {
          console.error(error);
        }
      }
      setCurrentUser(user);
    });
    setLoading(false);

    return unsubscribe;
  }, []);

  const value = {
    user,
    signUp,
    signIn,
    logout,
    sendPasswordReset,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
