import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbpp75EFVtGJRXcgpF8z1ZkDK2ZYS6VTc",
    authDomain: "coderhouse-curso-react.firebaseapp.com",
    projectId: "coderhouse-curso-react",
    storageBucket: "coderhouse-curso-react.appspot.com",
    messagingSenderId: "474571259731",
    appId: "1:474571259731:web:97c5f1ec0b51e8c55caba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
