import firebase from 'firebase';
import store from './store';

//  This is API-keys and some other properties to tell our application how to connect to Firebase.
const config = {
  apiKey: 'AIzaSyCTP1DP6D7o8aNFT3x3xjeFpDlY8fcj-aw',
  authDomain: 'scanandsave-admin.firebaseapp.com',
  databaseURL: 'https://scanandsave-admin.firebaseio.com',
  projectId: 'scanandsave-admin',
  storageBucket: 'scanandsave-admin.appspot.com',
  messagingSenderId: '106066164855',
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export default db;

// create a function called "signUp" and attach it to the "database" object.
// This will be an async function, meaning that it will not return anything
// before we have received an answer from Firebase.
// We'll pass in two parameters: email and password
db.signUp = async (email, password) => {
  // the reason we use a try/catch method here is that if the sign up fails in a way,
  // we'll get an error from Firebase we can show the user.
  try {
    // we put "await" at the beginning, because we don't want to continue this function
    // before we get an answer from firebase.
    await auth.createUserWithEmailAndPassword(email, password);
    store.commit('setCurrentUser', firebase.auth().currentUser);
    return true;
  } catch (error) {
    return error;
  }
};

db.signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    store.commit('setCurrentUser', firebase.auth().currentUser);
    return true;
  } catch (error) {
    return error;
  }
};

db.signOut = async () => {
  try {
    await auth.signOut();
    store.commit('setCurrentUser', null);
    return true;
  } catch (error) {
    return error;
  }
};

db.forgotPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    return true;
  } catch (error) {
    return error;
  }
};

db.sendEmailVerification = async () => {
  try {
    const user = auth.currentUser;
    user.sendEmailVerification();
    return true;
  } catch (error) {
    return error;
  }
};
