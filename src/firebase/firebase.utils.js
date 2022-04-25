import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication

const config = {
  apiKey: "AIzaSyDzLNfXn9H7xHD4YpTT3ojcIEAoSMKvbhQ",
  authDomain: "kellton-ecommerce-93271.firebaseapp.com",
  projectId: "kellton-ecommerce-93271",
  storageBucket: "kellton-ecommerce-93271.appspot.com",
  messagingSenderId: "1090408448483",
  appId: "1:1090408448483:web:21f47657b8ebc147f820d6"
  };

  firebase.initializeApp(config)


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;