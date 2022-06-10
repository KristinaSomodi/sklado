import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";

function Products() {
  return (
    <>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="products layout--right">
          <div className="title--secondary mt-32 ml-24 mb-42">
            Start adding products!
          </div>
          <div className="wrap">
            <div className="field__search mr-16">
              <i className="icon icon--base icon--search icon--black ml-16"></i>
              <input
                type="text"
                placeholder="Search"
                className="input input--search ml-8 "
              />
            </div>
            <button className="btn btn--tertiary btn--l  mr-24">
              ADD PRODUCT{" "}
              <i className="icon icon--base icon--plus icon--blue ml-40"></i>
            </button>
          </div>
          <ProductsTable></ProductsTable>
        </div>
      </div>
    </>
  );
}

export default Products;
