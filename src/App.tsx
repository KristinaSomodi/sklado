import MainRouter from "./MainRouter";
import "./app/styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <MainRouter />;
    </>
  );
}

export default App;
