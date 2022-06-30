/* eslint-disable react-hooks/exhaustive-deps */

import ProductsService from "../../services/productsService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";
import { v4 as id } from "uuid";
import { toast } from "react-toastify";

function Form() {
  const [productId, setProductId] = useState<string>("");
  const [productBarcode, setProductBarcode] = useState<number>(0);
  const [productName, setProductName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [isChange, setIsChange] = useState<boolean>(false);

  const productsService = new ProductsService();

  const params = useParams();
  const navigate = useNavigate();

  const fetchById = async () => {
    try {
      if (params.productId) {
        const res = await productsService.getProduct(params.productId);
        setProductBarcode(res.barcode);
        setProductDetails(res.details);
        setProductName(res.name);
        setProductQuantity(res.quantity);
        setProductId(res.id);
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  const handleEdit = async () => {
    try {
      if (
        isChange === true &&
        productName !== "" &&
        productQuantity !== 0 &&
        productBarcode !== 0
      ) {
        await productsService.editProduct(
          {
            id: productId,
            name: productName,
            barcode: productBarcode,
            quantity: productQuantity,
            details: productDetails,
          },
          productId
        );
        toast.success(`Product edited`, {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 3000,
        });
        navigate("/products", { replace: true });
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await productsService.deleteProduct(id);
      toast.success(`Product deleted`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  //addForm
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

  useEffect(() => {
    fetchById();
  }, []);
  return (
    <div>
      <form className="addProduct ml-40 mt-32">
        <div className="title--form">Add new product</div>
        <div className="field mt-16">
          <label htmlFor="barcode" className="field__label ">
            Barcode
            <input
              type="text"
              placeholder="Barcode"
              value={productBarcode ? productBarcode : ""}
              className="input input--form mt-8"
              onChange={(event) => {
                setProductBarcode(Number(event.target.value));
                setIsChange(true);
              }}
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="name" className="field__label ">
            Name
            <input
              type="text"
              placeholder="Name"
              value={productName}
              className="input input--form mt-8"
              onChange={(event) => {
                setProductName(event.target.value);
                setIsChange(true);
              }}
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="details" className="field__label ">
            Details
            <input
              type="text"
              placeholder="Details"
              value={productDetails}
              className="input input--form mt-8"
              onChange={(event) => {
                setProductDetails(event.target.value);
                setIsChange(true);
              }}
            />
          </label>
        </div>
        <div className="field mt-16">
          <label htmlFor="quantity" className="field__label ">
            Quantity
            <input
              type="number"
              placeholder="Quantity"
              value={productQuantity ? productQuantity : ""}
              className="input input--form input--form-quantity mt-8"
              onChange={(event) => {
                setProductQuantity(Number(event.target.value));
                setIsChange(true);
              }}
              required
            />
          </label>
        </div>
        {productId === "" ? (
          <button
            type="button"
            className="btn btn--secondary btn--xl mt-80 isDisabled"
            onClick={() => handleProduct()}
            disabled={
              productBarcode !== 1 &&
              productName !== "" &&
              productQuantity !== 1
                ? false
                : true
            }
          >
            ADD PRODUCT
          </button>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn--secondary btn--xl mt-80"
              onClick={() => handleEdit()}
            >
              SAVE
            </button>
            <button
              type="button"
              className="btn btn--delete btn--xl mt-16"
              onClick={() => {
                handleDelete(productId);
                navigate("/products", { replace: true });
              }}
            >
              DELETE PRODUCT
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
