// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg7ehIlEJc37CR4xXpVhI4A50xhLqQCGs",
  authDomain: "techstore-be2cd.firebaseapp.com",
  projectId: "techstore-be2cd",
  storageBucket: "techstore-be2cd.firebasestorage.app",
  messagingSenderId: "928287650647",
  appId: "1:928287650647:web:92febc50cbbcbea60c4412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exportar la instancia de Firestore
export const db = getFirestore(app)
