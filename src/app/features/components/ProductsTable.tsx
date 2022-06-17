import { useState } from "react";
import { Product } from "../../types/Product";

interface Props {
  products: Product[];
  productSearch: string;
}

const ProductsTable: React.FC<Props> = (props) => {
  const { products, productSearch } = props;

  function handleSearch(value: Product) {
    if (productSearch === "") {
      return value;
    } else if (value.name.includes(productSearch)) {
      return value;
    }
  }

  return (
    <tbody>
      {products.filter(handleSearch).map((product) => {
        return (
          <tr key={product.id}>
            <td>{product.barcode}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td className="icons">
              <i className="icon icon--base icon--edit icon--black "></i>
              <i className="icon icon--base icon--delete icon--black ml-29 "></i>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProductsTable;
