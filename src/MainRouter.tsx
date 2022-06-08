import { Route, Routes } from "react-router-dom";
import Landing from "./app/features/pages/Landing";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default MainRouter;
