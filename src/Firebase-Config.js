// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpkW6ERU3npWo3LjhYbmWbsUdM9kpmR_s",
  authDomain: "todo-crud-b060a.firebaseapp.com",
  projectId: "todo-crud-b060a",
  storageBucket: "todo-crud-b060a.appspot.com",
  messagingSenderId: "546932856818",
  appId: "1:546932856818:web:6d7db41dc62677efabbd6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
