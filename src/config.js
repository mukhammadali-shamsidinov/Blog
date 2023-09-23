import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBHNira0xNM-PlN5iUslkfqcfgmzcK90WY",
  authDomain: "blog-project-5cb73.firebaseapp.com",
  projectId: "blog-project-5cb73",
  storageBucket: "blog-project-5cb73.appspot.com",
  messagingSenderId: "116552345528",
  appId: "1:116552345528:web:2b4c61d78e25ad8fd3114d",
  measurementId: "G-0WBKDGRY2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
export {db,auth}