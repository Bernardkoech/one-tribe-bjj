// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence for Firebase auth
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error.message);
  });

export { auth, db };
