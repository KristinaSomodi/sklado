import { Route, Routes } from "react-router-dom";
import Products from "./app/features/pages/Products";
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
