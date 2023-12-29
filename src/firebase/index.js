import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDYf4L_AksYCBnhT3qmgjU2zx3E_LHGi_U",
  authDomain: "recipes-app-9abae.firebaseapp.com",
  projectId: "recipes-app-9abae",
  storageBucket: "recipes-app-9abae.appspot.com",
  messagingSenderId: "81805171577",
  appId: "1:81805171577:web:e81e56f4e14022bcef6da8",
  measurementId: "G-SB23BNW1JE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export const db = firebase.firestore();

export const storage = firebase.storage();
