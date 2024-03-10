import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyChI7f8gyLo6I3VZz9Wn8HjM-LX5sw7SpM",
  authDomain: "studentmarketfinal.firebaseapp.com",
  projectId: "studentmarketfinal",
  storageBucket: "studentmarketfinal.appspot.com",
  messagingSenderId: "1025063492853",
  appId: "1:1025063492853:web:fe2ab601d12fda424cb9bc"
};
  export const Firebase= firebase.initializeApp(firebaseConfig)//named export