import { Product } from "../../types/Product";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/productsService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

enum SortOrder {
  None = "",
  Asc = "asc",
  Desc = "desc",
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productSearch, setProductSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.None);

  const productsService = new ProductsService();

  function toggleSort(sort: string) {
    let val = sortOrder;
    // || SortOrder.Desc
    //   ? SortOrder.Asc
    //   : SortOrder.Desc;

    if (val === SortOrder.None) {
      val = SortOrder.Desc;
    } else if (val === SortOrder.Desc) {
      val = SortOrder.Asc;
    } else if (val === SortOrder.Asc) {
      val = SortOrder.None;
    }

    setSortBy(sort);
    setSortOrder(val);
  }

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    setProductSearch(event.target.value);
  }

  const fetchProducts = async () => {
    try {
      const res = await productsService.getProducts(sortBy, sortOrder);
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
  }, [sortBy, sortOrder]);

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

          <table>
            <thead>
              <tr>
                <th
                  className="table__header"
                  onClick={() => toggleSort("barcode")}
                >
                  Barcode{" "}
                  <i className="icon icon--base icon--sort icon--grayd"></i>
                </th>
                <th
                  className="table__header "
                  onClick={() => toggleSort("name")}
                >
                  Name{" "}
                  <i className="icon icon--base icon--sort icon--grayd"></i>
                </th>
                <th
                  className="table__header"
                  onClick={() => toggleSort("quantity")}
                >
                  Quantity
                  <i className="icon icon--base icon--sort icon--grayd"></i>
                </th>
              </tr>
            </thead>
            <ProductsTable
              products={products}
              productSearch={productSearch}
            ></ProductsTable>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
