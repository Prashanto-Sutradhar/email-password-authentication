// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmud_vVAv3OpF5mOQ0xU1_5S5Hl4pNCc",
  authDomain: "email-password-authentic-818e8.firebaseapp.com",
  projectId: "email-password-authentic-818e8",
  storageBucket: "email-password-authentic-818e8.appspot.com",
  messagingSenderId: "849365411983",
  appId: "1:849365411983:web:d94644edc2ba9f445368fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;