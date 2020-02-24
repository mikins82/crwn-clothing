import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA4pu-iqyvtV9FM_YRE28r6Y6oIHGxtlTE",
  authDomain: "crwn-db-8253b.firebaseapp.com",
  databaseURL: "https://crwn-db-8253b.firebaseio.com",
  projectId: "crwn-db-8253b",
  storageBucket: "crwn-db-8253b.appspot.com",
  messagingSenderId: "162534261114",
  appId: "1:162534261114:web:070624db29678f7f7616c3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;