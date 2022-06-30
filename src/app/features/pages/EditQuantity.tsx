import Form from "../components/Form";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function EditQuantity() {
  const navigate = useNavigate();

  return (
    <>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="add layout--right">
          <div className="title--secondary mt-32 ml-40 mb-42">
            Edit quantity
          </div>
          <div className="back ml-40" onClick={() => navigate(-1)}>
            <i className="icon icon--base icon--chevron icon--blue mr-8"></i>
            Back
          </div>
          <Form></Form>
        </div>
      </div>
    </>
  );
}

export default EditQuantity;
