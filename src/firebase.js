import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt5QwlVSfxGekOMSTndhbF7RhsgI0QsG0",
  authDomain: "linkedin-clone-b21b3.firebaseapp.com",
  projectId: "linkedin-clone-b21b3",
  storageBucket: "linkedin-clone-b21b3.appspot.com",
  messagingSenderId: "15851656101",
  appId: "1:15851656101:web:b6a57993ef3f9599b90e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;
