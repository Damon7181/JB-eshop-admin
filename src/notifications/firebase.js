// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTEm_90pcL44mbYPwYxhAFeml2sfgFgLc",
  authDomain: "pushnotifications-19d98.firebaseapp.com",
  projectId: "pushnotifications-19d98",
  storageBucket: "pushnotifications-19d98.firebasestorage.app",
  messagingSenderId: "163015687126",
  appId: "1:163015687126:web:f6f9b3383f49db741d8277",
  measurementId: "G-DFHB1E5B51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// export const generateToken = async () => {
//   const permission = await Notification.requestPermission();
//   console.log("Permission status:", permission);
//   if (permission === "granted") {
//     try {
//       const token = await getToken(messaging, {
//         vapidKey:
//           "BLbLELb7qRTxZSQqpJgMHxulcsqbhpc1dZotpXJ7rR47uLdR_dn17eB9c_Mp-GkaPqvL4IYtru2pYXXF9huzWuM",
//       });
//       console.log("Generated token:", token);
//       return token;
//     } catch (error) {
//       console.error("Error generating token:", error);
//     }
//   } else {
//     console.error("Permission not granted for notifications.");
//   }
// };
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log("Permission status:", permission);
  if (permission === "granted") {
    try {
      const token = await getToken(messaging, {
        vapidKey:
          "BLbLELb7qRTxZSQqpJgMHxulcsqbhpc1dZotpXJ7rR47uLdR_dn17eB9c_Mp-GkaPqvL4IYtru2pYXXF9huzWuM",
      });

      console.log("Generated token:", token);

      // ⬇️ Send token to backend
      await fetch(
        "https://jb-eshop-backend-production.up.railway.app/api/save-admin-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      return token;
    } catch (error) {
      console.error("Error generating token:", error);
    }
  } else {
    console.error("Permission not granted for notifications.");
  }
};
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("🟢 Notifications allowed.");
  }
});
