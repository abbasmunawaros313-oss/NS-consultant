// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Y5lRg-UCac--UTtY2QW7fOjTGiErkyQ",
  authDomain: "nsconcultent.firebaseapp.com",
  projectId: "nsconcultent",
  storageBucket: "nsconcultent.firebasestorage.app",
  messagingSenderId: "369783325152",
  appId: "1:369783325152:web:08cda5ab97502cc4cfeb85",
  measurementId: "G-DXZNEWX6ZJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
