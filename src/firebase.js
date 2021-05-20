import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJKSkTHxJ8bg4NLOBotl-KXkGnnT6ZOoE",
  authDomain: "fir-9f9a6.firebaseapp.com",
  projectId: "fir-9f9a6",
  storageBucket: "fir-9f9a6.appspot.com",
  messagingSenderId: "833166832610",
  appId: "1:833166832610:web:118b9595626e5c5b017fbb",
  measurementId: "G-5M4TYR9HTZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;


