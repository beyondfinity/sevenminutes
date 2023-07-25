import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap";
import $ from "jquery";
import Popper from "popper.js";
// import { messaging } from "./firebase";
// import { messaging } from "firebase/messaging";

// Permission requesting
// const requestNotificationPermission = async () => {
//   try {
//     await Notification.requestPermission();
//     console.log("Notification permission granted.");
//   } catch (error) {
//     console.log("Unable to get permission for notifications.", error);
//   }
// };

// requestNotificationPermission();

// // Retrieve the device token
// messaging
//   .getToken()
//   .then((token) => {
//     console.log("Device token:", token);
//   })
//   .catch((error) => {
//     console.log("Error retrieving device token:", error);
//   });

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./service-worker.js", { scope: "/app_prayer/" })
//       .then((registration) => {
//         console.log(
//           "Service Worker registered with scope:",
//           registration.scope
//         );
//         console.log(registration);
//       })
//       .catch((error) => {
//         console.log("Service Worker registration failed:", error);
//       });
//   });
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
