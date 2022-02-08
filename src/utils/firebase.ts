import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyBT5ozIhvMrfQAbSJ16qzzErdKoJB9fmSY",
  authDomain: "crypto-list-14639.firebaseapp.com",
  projectId: "crypto-list-14639",
  storageBucket: "crypto-list-14639.appspot.com",
  messagingSenderId: "905159321658",
  appId: "1:905159321658:web:30accf0eef547e951e6d03",
  measurementId: "G-NQ7X9LQHJB"
};

export const fb = initializeApp(firebaseConfig);
export const db = initializeFirestore(fb, {})
