/* eslint-disable react-hooks/exhaustive-deps */
import { Product } from "../../types/Product";
import ProductsTable from "../components/ProductsTable";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
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
  const [page, setPage] = useState<number>(1);

  const productsService = new ProductsService();

  function toggleSort(sort: string) {
    let val = sortOrder;

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

  const fetchProducts = async () => {
    try {
      const res = await productsService.getProducts(sortBy, sortOrder, page);
      setProducts(res);
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [sortBy, sortOrder, page]);

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
                onChange={(event) => setProductSearch(event.target.value)}
              />
            </div>
            <NavLink to={"/add-product"}>
              <button className="btn btn--tertiary btn--l  mr-24">
                ADD PRODUCT{" "}
                <i className="icon icon--base icon--plus icon--blue ml-40"></i>
              </button>
            </NavLink>
            <NavLink to={"/login"}>
              <button className="btn btn--tertiary btn--l  mr-24">
                Logout
              </button>
            </NavLink>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th
                  className="table__header"
                  onClick={() => toggleSort("barcode")}
                >
                  Barcode{" "}
                  <i
                    className={`icon icon--base icon--sort ${
                      sortBy === "barcode" && sortOrder !== SortOrder.None
                        ? "icon--blue"
                        : "icon--grayd"
                    }`}
                  ></i>
                </th>
                <th
                  className="table__header "
                  onClick={() => toggleSort("name")}
                >
                  Name{" "}
                  <i
                    className={`icon icon--base icon--sort ${
                      sortBy === "name" && sortOrder !== SortOrder.None
                        ? "icon--blue"
                        : "icon--grayd"
                    }`}
                  ></i>
                </th>
                <th
                  className="table__header"
                  onClick={() => toggleSort("quantity")}
                >
                  Quantity
                  <i
                    className={`icon icon--base icon--sort ${
                      sortBy === "quantity" && sortOrder !== SortOrder.None
                        ? "icon--blue"
                        : "icon--grayd"
                    }`}
                  ></i>
                </th>
              </tr>
            </thead>

            <ProductsTable
              products={products}
              productSearch={productSearch}
              fetchProducts={() => fetchProducts()}
            ></ProductsTable>
          </table>
          <div className="pages mt-24">
            <i
              className="icon icon--base icon--previous icon--black"
              onClick={() => {
                page > 1 ? setPage(page - 1) : setPage(page);
              }}
            ></i>
            <i
              className={`icon icon--base icon--one  ${
                page === 1 ? "icon--blue" : "icon--black"
              }`}
              onClick={() => setPage(1)}
            ></i>
            <i
              className={`icon icon--base icon--two ${
                page === 2 ? "icon--blue" : "icon--black"
              }`}
              onClick={() => setPage(2)}
            ></i>
            <i
              className={`icon icon--base icon--three ${
                page === 3 ? "icon--blue" : "icon--black"
              }`}
              onClick={() => setPage(3)}
            ></i>
            <i
              className="icon icon--base icon--next icon--black"
              onClick={() => {
                page < 3 ? setPage(page + 1) : setPage(page);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
