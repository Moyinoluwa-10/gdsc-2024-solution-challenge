import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwkqgJydB_8K0JLb6gsjyIFAIp64Nl2ZM",
  authDomain: "medisync-5a4a3.firebaseapp.com",
  projectId: "medisync-5a4a3",
  storageBucket: "medisync-5a4a3.appspot.com",
  messagingSenderId: "756750577158",
  appId: "1:756750577158:web:430ec277e754848affdd87",
  measurementId: "G-E00KNMT4QT",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
