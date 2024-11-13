import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";  // Import GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWUF4Ggh-Qh3evgaFLH_YsmsnIeT4NjpM",
  authDomain: "one-tribe-db55b.firebaseapp.com",
  projectId: "one-tribe-db55b",
  storageBucket: "one-tribe-db55b.firebasestorage.app",
  messagingSenderId: "678764547533",
  appId: "1:678764547533:web:bc4aed58635661a0d88884",
  measurementId: "G-HZM56E6PJ3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Google Authentication provider
export const googleAuthProvider = new GoogleAuthProvider();  // Add GoogleAuthProvider
