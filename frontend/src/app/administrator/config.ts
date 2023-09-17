import { initializeApp } from "firebase/app";
import {getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKITUsfJNnb6cHwCslAgjf17OO9-Lpjp4",
  authDomain: "book-manangment-system.firebaseapp.com",
  projectId: "book-manangment-system",
  storageBucket: "book-manangment-system.appspot.com",
  messagingSenderId: "748155487136",
  appId: "1:748155487136:web:19a461fb4be76211e35ac5",
  measurementId: "G-QQW1R5SWCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)