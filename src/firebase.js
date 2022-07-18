import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxgxS1fqvFueNCU9iUX7aq-9nHo0XmMwk",
  authDomain: "disneyplus-clone-3afbf.firebaseapp.com",
  projectId: "disneyplus-clone-3afbf",
  storageBucket: "disneyplus-clone-3afbf.appspot.com",
  messagingSenderId: "299832830574",
  appId: "1:299832830574:web:784b85b5ccfc1ee6b0d47f",
  measurementId: "G-L9TPD5TTXZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
