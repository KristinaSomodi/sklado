import AddForm from "../components/AddForm";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  return (
    <>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="add layout--right">
          <div className="title--secondary mt-32 ml-40 mb-42">Add Product</div>
          <div className="back ml-40" onClick={() => navigate(-1)}>
            <i className="icon icon--base icon--chevron icon--blue mr-8"></i>
            Back
          </div>
          <AddForm></AddForm>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
