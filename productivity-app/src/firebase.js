

import firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({

  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_APP_PROJECTID,
  storageBucket: process.env.FIREBASE_APP_STORAGE,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,


})



export const auth = app.auth();

export default app;