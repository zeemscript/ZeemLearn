"use client";
import { auth } from "./firebaseConfig";
import { toast } from "sonner";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const name = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    return { user, name, email, photoURL };
  } catch (error) {
    throw new Error(`Error logging in with Google: ${error.message}`);
  }
};
export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    toast.error("Error creating account:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
   toast.error("Error logging in:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged Out successfully.");
    return true;
  } catch (error) {
    toast.error("Error signing out:", error.message);
    throw error;
  }
};


