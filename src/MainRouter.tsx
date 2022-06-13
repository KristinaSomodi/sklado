import { Route, Routes } from "react-router-dom";
import AddProduct from "./app/features/pages/AddProduct";
import EditQuantity from "./app/features/pages/EditQuantity";
import ForgotPassword from "./app/features/pages/ForgotPassword";
import Landing from "./app/features/pages/Landing";
import Login from "./app/features/pages/Login";
import Products from "./app/features/pages/Products";
import Register from "./app/features/pages/Register";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product" element={<EditQuantity />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default MainRouter;
