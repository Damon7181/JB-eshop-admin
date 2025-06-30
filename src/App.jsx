import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Home from "./Pages/Home";
import Root from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  // Register Firebase Messaging Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("✅ Service Worker registered:", registration);
        })
        .catch((err) => {
          console.error("❌ Service Worker registration failed:", err);
        });
    }
  }, []);
  return (
    <>
      {/* <Login></Login> */}
      {/* <Navbar></Navbar> */}
      {/* <Sidebar></Sidebar> */}
      {/* <FeaturesSection></FeaturesSection> */}
      {/* <Home></Home> */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Root></Root>
    </>
  );
}

export default App;
