import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc583G4feSj99fMKMfqRCi010o5Fi4Zh0",
  authDomain: "ecommerce-1-cfc2b.firebaseapp.com",
  projectId: "ecommerce-1-cfc2b",
  storageBucket: "ecommerce-1-cfc2b.appspot.com",
  messagingSenderId: "174110963306",
  appId: "1:174110963306:web:7438a435ca45ea1cacfc13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth};