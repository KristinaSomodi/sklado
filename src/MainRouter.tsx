import { Route, Routes } from "react-router-dom";
import AddProduct from "./app/features/pages/AddProduct";
// import Products from "./app/features/pages/Products";
// import Sidebar from "./app/features/components/Sidebar";
// import Landing from "./app/features/pages/Landing";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
    </Routes>
  );
}

export default MainRouter;
