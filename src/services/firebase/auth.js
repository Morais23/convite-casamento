import { getAuth, signInAnonymously, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);

export const loginAnonymous = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error("Erro no Login AnÃ´nimo:", error);
    throw error;
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erro no Login Admin:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  return await signOut(auth);
};