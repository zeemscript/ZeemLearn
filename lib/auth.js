import { auth } from "./firebaseConfig";
import axios from "axios";
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
    const user = userCredential.user;
    const userData = {
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    };
    const response = await axios.post("/api/auth", userData);
    if (response.status !== 201) {
      throw new Error("Failed to create user document");
    }

    return user;
  } catch (error) {
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
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    throw error;
  }
};
