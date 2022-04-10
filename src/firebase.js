import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANCOi5-cjy0bv8bUYiyDaRV10wavRKtwg",
  authDomain: "hackathon-aa8da.firebaseapp.com",
  projectId: "hackathon-aa8da",
  storageBucket: "hackathon-aa8da.appspot.com",
  messagingSenderId: "1045848996884",
  appId: "1:1045848996884:web:a39cf2c166ebf46e61bb01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const Ref = database.ref("input");
export {Ref};