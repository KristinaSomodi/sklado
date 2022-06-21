import { randomUUID } from "crypto";
import React, { useState } from "react";
import ProductsService from "../../services/productsService";
import { Product } from "../../types/Product";
import { v4 as id } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddForm() {
  const [productBarcode, setProductBarcode] = useState<number>(1);
  const [productName, setProductName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const productsService = new ProductsService();
  const navigate = useNavigate();

  function barcode(event: React.ChangeEvent<HTMLInputElement>) {
    setProductBarcode(Number(event.target.value));
  }

  function name(event: React.ChangeEvent<HTMLInputElement>) {
    setProductName(event.target.value);
  }

  function details(event: React.ChangeEvent<HTMLInputElement>) {
    setProductDetails(event.target.value);
  }

  function quantity(event: React.ChangeEvent<HTMLInputElement>) {
    setProductQuantity(Number(event.target.value));
  }

  function handleProduct() {
    try {
      const product: Product = {
        id: id(),
        name: productName,
        barcode: productBarcode,
        quantity: productQuantity,
        details: productDetails,
      };
      productsService.postProduct(product);
      toast.success(`Product added`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
      navigate("/products");
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }
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
              onChange={(event) => barcode(event)}
              required
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
              onChange={(event) => name(event)}
              required
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
              onChange={(event) => details(event)}
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
              onChange={(event) => quantity(event)}
              required
            />
          </label>
        </div>

        <button
          className="btn btn--secondary btn--xl mt-80"
          onClick={() => handleProduct()}
        >
          ADD PRODUCT
        </button>
      </form>
    </>
  );
}

export default AddForm;
