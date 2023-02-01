// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEosRlax6ljiej2tXXRAMOgYe0mkZJ4Ys",
  authDomain: "mathlah.firebaseapp.com",
  projectId: "mathlah",
  storageBucket: "mathlah.appspot.com",
  messagingSenderId: "145066155253",
  appId: "1:145066155253:web:d5d5a56778309701f979bc",
  measurementId: "G-Q90H8XSL46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);