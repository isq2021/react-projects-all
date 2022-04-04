import { createContext, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const GeneralAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  onAuthStateChanged(auth, (createdUser) => {
    setUserInfo(createdUser);
  });

  const signUp = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("successfully registered");
    } catch (err) {
      console.log(err.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err.message);
    }
  };
  const data = {
    signUp: signUp,
    userInfo: userInfo,
    logOut: logOut,
    loginUser: loginUser,
  };

  return (
    <GeneralAuthContext.Provider value={data}>
      {children}
    </GeneralAuthContext.Provider>
  );
};
