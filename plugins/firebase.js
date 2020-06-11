import firebase from "firebase/app";
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
  apiKey: "AIzaSyCunUaiaTk9ynnFhPNwh8x2m43XG7eLNUE",
  authDomain: "firenuxt-fcba9.firebaseapp.com",
  databaseURL: "https://firenuxt-fcba9.firebaseio.com",
  projectId: "firenuxt-fcba9",
  storageBucket: "firenuxt-fcba9.appspot.com",
  messagingSenderId: "330972915297",
  appId: "1:330972915297:web:cd8534d20d9460b967ec20"
};

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}
