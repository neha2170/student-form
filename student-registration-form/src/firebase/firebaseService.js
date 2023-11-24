// src/firebase/firebaseService.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveFormData = async (data) => {
  try {
    await addDoc(collection(db, "students"), data);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export { saveFormData };
