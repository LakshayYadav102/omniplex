// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

let analytics = null; // ✅ Valid in JavaScript

// Firebase config
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
const db = getFirestore(app);
const storage = getStorage(app);

// Conditionally initialize analytics on client only
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  });
}

// Export everything
export { app, db, storage, analytics };

// Optional: expose app init function
export const initializeFirebase = () => app;
