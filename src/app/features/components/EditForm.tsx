import ProductsService from "../../services/productsService";

import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditForm() {
  // #9 - Edit Quantity Page, Implement fetch by selected
  // ID to prefill form with data of selected item

  //  and implement PUT method with error and success
  //   messages after submit

  const [productId, setProductId] = useState<string>("");
  const [productBarcode, setProductBarcode] = useState<number>(1);
  const [productName, setProductName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const productsService = new ProductsService();

  const params = useParams();
  const navigate = useNavigate();

  function name(event: React.ChangeEvent<HTMLInputElement>) {
    setProductName(event.target.value);
  }

  function details(event: React.ChangeEvent<HTMLInputElement>) {
    setProductDetails(event.target.value);
  }

  function quantity(event: React.ChangeEvent<HTMLInputElement>) {
    setProductQuantity(Number(event.target.value));
  }

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
      console.log(error);
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  const handleEdit = async () => {
    try {
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
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchById();
  }, []);

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
              value={productBarcode}
              className="input input--form mt-8"
              onChange={(event) =>
                setProductBarcode(Number(event.target.value))
              }
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
              onChange={(event) => name(event)}
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
              value={productQuantity}
              className="input input--form mt-8"
              onChange={(event) => quantity(event)}
            />
          </label>
        </div>
        <button
          className="btn btn--secondary btn--xl mt-80"
          onClick={() => {
            handleEdit();
            navigate("/products", { replace: true });
          }}
        >
          SAVE
        </button>
        <button className="btn btn--delete btn--xl mt-16">
          DELETE PRODUCT
        </button>
      </form>
    </>
  );
}

export default EditForm;
