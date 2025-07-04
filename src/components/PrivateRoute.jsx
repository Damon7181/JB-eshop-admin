// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  return token ? children : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
