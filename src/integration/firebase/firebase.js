// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  connectAuthEmulator
} from "firebase/auth"; //Authentication

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

//authentication
export const auth = getAuth();
export const signin = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
export const signout = signOut;

//firestore
const db = getFirestore(app);


//connection  to emulator Suite if the app is in Localhost.
if (window.location.hostname === "localhost") {
  console.log("--FIREBASE: Using Firestore Emulator--");
  connectFirestoreEmulator(db,"localhost",8080);

  console.log("--FIREBASE: Using Authentication Emulator--");
  connectAuthEmulator(auth, `http://localhost:9099`);
}

export const database = db;