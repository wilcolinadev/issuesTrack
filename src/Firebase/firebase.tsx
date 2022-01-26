// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,

} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk89LoipIteGprWE5Ne9vTsuI-UrmZD-c",
    authDomain: "issuestrack-d21ce.firebaseapp.com",
    projectId: "issuestrack-d21ce",
    storageBucket: "issuestrack-d21ce.appspot.com",
    messagingSenderId: "554007848504",
    appId: "1:554007848504:web:dc0058d034d14b0bda28cd",
    measurementId: "G-FH08V3WFYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)



export default app;
