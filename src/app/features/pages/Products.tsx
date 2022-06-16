import { Product } from "../../types/Product";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/productsService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productSearch, setProductSearch] = useState<string>("");

  const productsService = new ProductsService();

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    setProductSearch(event.target.value);
  }

  function handleSearch(value: Product) {
    if (productSearch === "") {
      return value;
    } else if (value.name.includes(productSearch)) {
      return value;
    }
  }

  const fetchProducts = async () => {
    try {
      const res = await productsService.getProducts();
      setProducts(res);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

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
                className="input input--search ml-8 
                "
                onChange={(event) => search(event)}
              />
            </div>
            <NavLink to={"/add-product"}>
              <button className="btn btn--tertiary btn--l  mr-24">
                ADD PRODUCT{" "}
                <i className="icon icon--base icon--plus icon--blue ml-40"></i>
              </button>
            </NavLink>
          </div>
          <ProductsTable
            products={products}
            handleSearch={handleSearch}
          ></ProductsTable>
        </div>
      </div>
    </>
  );
}

export default Products;
