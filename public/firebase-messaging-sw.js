// import { initializeApp } from "firebase/app";
// import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyCTEm_90pcL44mbYPwYxhAFeml2sfgFgLc",
//   authDomain: "pushnotifications-19d98.firebaseapp.com",
//   projectId: "pushnotifications-19d98",
//   storageBucket: "pushnotifications-19d98.firebasestorage.app",
//   messagingSenderId: "163015687126",
//   appId: "1:163015687126:web:f6f9b3383f49db741d8277",
//   measurementId: "G-DFHB1E5B51",
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);

// onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyCTEm_90pcL44mbYPwYxhAFeml2sfgFgLc",
  authDomain: "pushnotifications-19d98.firebaseapp.com",
  projectId: "pushnotifications-19d98",
  storageBucket: "pushnotifications-19d98.appspot.com",
  messagingSenderId: "163015687126",
  appId: "1:163015687126:web:f6f9b3383f49db741d8277",
  measurementId: "G-DFHB1E5B51",
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
