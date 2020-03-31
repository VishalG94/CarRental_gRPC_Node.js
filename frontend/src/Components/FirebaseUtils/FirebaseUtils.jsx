import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7XgtFt9WAiM5QYH2KE_mxxktXAUhqpWQ",
  authDomain: "grubprotodb.firebaseapp.com",
  databaseURL: "https://grubprotodb.firebaseio.com",
  projectId: "grubprotodb",
  storageBucket: "grubprotodb.appspot.com",
  messagingSenderId: "543814168627",
  appId: "1:543814168627:web:a3e523479a8c996f5e3346",
  measurementId: "G-VK8ZK8SS6Z"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
