// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc7kWwpkk7ZpohfiSWrYx6W1S1oIHQlTQ",
  authDomain: "ai-logo-efdc2.firebaseapp.com",
  projectId: "ai-logo-efdc2",
  storageBucket: "ai-logo-efdc2.firebasestorage.app",
  messagingSenderId: "925614993213",
  appId: "1:925614993213:web:718572b9632f3e69da5f54",
  measurementId: "G-9P7LTFQYGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)