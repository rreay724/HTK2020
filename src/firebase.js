import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "htk-trip-2022.firebaseapp.com",
  projectId: "htk-trip-2022",
  storageBucket: "htk-trip-2022.appspot.com",
  messagingSenderId: "303629359189",
  appId: "1:303629359189:web:1462661773854c3ec01cdc",
  measurementId: "G-Z77KSRWNXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
