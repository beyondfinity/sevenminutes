import firebase from "firebase/compat/app";
import "firebase/compat/messaging";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr78UDy3GuR_u6_Vrjdp3K7Q8mu6cyi04",
  authDomain: "sevenminutes-8831a.firebaseapp.com",
  projectId: "sevenminutes-8831a",
  storageBucket: "sevenminutes-8831a.appspot.com",
  messagingSenderId: "808390163426",
  appId: "1:808390163426:web:de066ebd621fa3318057bb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();
