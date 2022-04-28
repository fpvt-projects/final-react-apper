// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu5VnIo2DGNeUQkg2EsNA0ikzDMU_Ctmg",
  authDomain: "react-project-apper.firebaseapp.com",
  projectId: "react-project-apper",
  storageBucket: "react-project-apper.appspot.com",
  messagingSenderId: "155646171688",
  appId: "1:155646171688:web:77d649a2276339876a331d",
  measurementId: "G-14RQQ97E9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)