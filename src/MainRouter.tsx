import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./app/features/pages/ForgotPassword";
import Products from "./app/features/pages/Products";
// import EditQuantity from "./app/features/pages/EditQuantity";
// import Login from "./app/features/pages/Login";
// import Register from "./app/features/pages/Register";
// import AddProduct from "./app/features/pages/AddProduct";

// import Sidebar from "./app/features/components/Sidebar";
// import Landing from "./app/features/pages/Landing";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
}

export default MainRouter;
