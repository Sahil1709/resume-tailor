import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import * as admin from 'firebase-admin';
import * as serviceAccount from '@/firebase-adminsdk-serviceAccountKey.json'

// Your Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const storage = firebase.storage();
const db = firebase.firestore();
const auth = getAuth();

export { storage, db, admin, auth };