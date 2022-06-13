import { Route, Routes } from "react-router-dom";
// import EditQuantity from "./app/features/pages/EditQuantity";
import Login from "./app/features/pages/Login";
// import AddProduct from "./app/features/pages/AddProduct";
// import Products from "./app/features/pages/Products";
// import Sidebar from "./app/features/components/Sidebar";
// import Landing from "./app/features/pages/Landing";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default MainRouter;
