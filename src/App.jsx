import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Home from "./Pages/Home";
import Root from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
