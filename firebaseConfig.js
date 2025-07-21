// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcvzd8BGSB1Qv7CO78mKtm4YU1vd7oSY",
  authDomain: "omniplex-9b9ff.firebaseapp.com",
  projectId: "omniplex-9b9ff",
  storageBucket: "omniplex-9b9ff.firebasestorage.app",
  messagingSenderId: "832857841372",
  appId: "1:832857841372:web:3d0b8ad42b11ddd11e1e19",
  measurementId: "G-LJ9FLD69V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, analytics };

export const initializeFirebase = () => {
  return app;
};