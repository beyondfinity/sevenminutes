// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr78UDy3GuR_u6_Vrjdp3K7Q8mu6cyi04",
  authDomain: "sevenminutes-8831a.firebaseapp.com",
  projectId: "sevenminutes-8831a",
  storageBucket: "sevenminutes-8831a.appspot.com",
  messagingSenderId: "808390163426",
  appId: "1:808390163426:web:de066ebd621fa3318057bb",
  measurementId: "G-ZYZRCDZNTE",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
