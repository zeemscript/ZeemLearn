"use client";
import { auth } from "./firebaseConfig";
import { toast } from "sonner";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";


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


