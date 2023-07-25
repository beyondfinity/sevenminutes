importScripts("https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging.js"
);

// Initialize Firebase
firebase.initializeApp({
  messagingSenderId: "808390163426",
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

export default firebase - messaging - sw;
