import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8lwWvSJb6GJM1lpmYJ0mksp5M4QHORiQ",
  authDomain: "clone-42589.firebaseapp.com",
  databaseURL: "https://clone-42589.firebaseio.com",
  projectId: "clone-42589",
  storageBucket: "clone-42589.appspot.com",
  messagingSenderId: "515190050252",
  appId: "1:515190050252:web:4d004fced17c840da3a169",
  measurementId: "G-CFFLRQ93S3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db,auth};