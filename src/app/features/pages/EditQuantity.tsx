import EditForm from "../components/EditForm";
import Sidebar from "../components/Sidebar";

function EditQuantity() {
  return (
    <>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="add layout--right">
          <div className="title--secondary mt-32 ml-40 mb-42">
            Edit quantity
          </div>
          <div className="back ml-40">
            <i className="icon icon--base icon--chevron icon--blue mr-8"></i>
            Back
          </div>
          <EditForm></EditForm>
        </div>
      </div>
    </>
  );
}

export default EditQuantity;
