import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../components/Dashboard";
import Products from "../Pages/Products";
import Login from "../components/Login";
import Categories from "../Pages/Categories";
import FormForProduct from "../components/FormForProduct";
import FormForCategory from "../components/FormForCategory";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import Orders from "../Pages/Orders";
import ProductDetails from "../components/ProductDetails";
import OrderDetails from "../components/OrderDetails";

export default function Root() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/FormForProduct" element={<FormForProduct />} />
          <Route path="/FormForCategory" element={<FormForCategory />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />

          <Route path="/orderDetails" element={<OrderDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
