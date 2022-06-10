function AddForm() {
  return (
    <>
      <form className="addProduct ml-40 mt-32">
        <div className="title--form">Add new product</div>
        <div className="field mt-16">
          <label htmlFor="barcode" className="field__label ">
            Barcode
            <input
              type="text"
              placeholder="Barcode"
              className="input input--form mt-8"
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="name" className="field__label ">
            Name
            <input
              type="text"
              placeholder="Name"
              className="input input--form mt-8"
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="details" className="field__label ">
            Details
            <input
              type="text"
              placeholder="Details"
              className="input input--form mt-8"
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="quantity" className="field__label">
            Quantity
            <input
              type="number"
              placeholder="Quantity"
              className="input input--form mt-8"
            />
          </label>
        </div>
        <button className="btn btn--secondary btn--xl mt-80">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddForm;
