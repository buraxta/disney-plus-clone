// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDfGP_RD3w6_IgcAQAqjMhSMnDzoBVbCf0",
  authDomain: "disney-plus-clone-e5d2a.firebaseapp.com",
  projectId: "disney-plus-clone-e5d2a",
  storageBucket: "disney-plus-clone-e5d2a.appspot.com",
  messagingSenderId: "1053945302328",
  appId: "1:1053945302328:web:ea5ba26f4a007d025745cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;