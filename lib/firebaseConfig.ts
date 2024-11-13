// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAsRbxbsJmpte7uB1i51NjB4yIV5WA4BU",
    authDomain: "fortis-gym-9660a.firebaseapp.com",
    projectId: "fortis-gym-9660a",
    storageBucket: "fortis-gym-9660a.firebasestorage.app",
    messagingSenderId: "163114344116",
    appId: "1:163114344116:web:7c5a11f354f1147b29c1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { auth, db, provider, firebaseConfig};
