// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ28LWwHWKHV72FB-Gw9FObC4xzMYZZA0",
  authDomain: "flashcard-7c40d.firebaseapp.com",
  projectId: "flashcard-7c40d",
  storageBucket: "flashcard-7c40d.appspot.com",
  messagingSenderId: "987997945159",
  appId: "1:987997945159:web:6607f392ccc7e9ff532062",
  measurementId: "G-XXEKR0073P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);