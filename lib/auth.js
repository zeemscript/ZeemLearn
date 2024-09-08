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
    const user = result.user;
    const email = user.email;

    console.log("Logging in with Google, user email:", email); // Log email

    let existingUserResponse;
    try {
      // Check if the user already exists in the database
      existingUserResponse = await axios.get(`/api/googleuser?email=${email}`);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found, creating new user...");
        // If user not found, handle 404 and proceed to create a new user
        const userData = {
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          googleloggedin: true,
          username: "", // add default username or collect it later
        };

        const response = await axios.post("/api/googleuser", userData);
        if (response.status === 201) {
          console.log("User created successfully:", response.data);
          return response.data;
        } else {
          throw new Error("Failed to create user document");
        }
      } else {
        throw error; // For other errors, rethrow
      }
    }

    // If user exists
    if (existingUserResponse && existingUserResponse.status === 200) {
      console.log("User exists in the database:", existingUserResponse.data);
      return existingUserResponse.data;
    }
  } catch (error) {
    console.error("Error logging in with Google:", error.message);
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
      googleloggedin: false,
      username: "",
    };
    const response = await axios.post("/api/usersinfo", userData);
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
