import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig:object = {
    apiKey: "AIzaSyCk89LoipIteGprWE5Ne9vTsuI-UrmZD-c",
    authDomain: "issuestrack-d21ce.firebaseapp.com",
    projectId: "issuestrack-d21ce",
    storageBucket: "issuestrack-d21ce.appspot.com",
    messagingSenderId: "554007848504",
    appId: "1:554007848504:web:dc0058d034d14b0bda28cd",
    measurementId: "G-FH08V3WFYF"
};

const app: any = initializeApp(firebaseConfig);
const analytics: any = getAnalytics(app);

export default firebase;