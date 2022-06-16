import { Product } from "../../types/Product";

interface Props {
  products: Product[];
}

const ProductsTable: React.FC<Props> = (props, handleSearch) => {
  const { products } = props;
  const { handle } = handleSearch();
  return (
    <table className="table mt-32">
      <thead>
        <tr>
          <th className="table__header">
            Barcode <i className="icon icon--base icon--sort icon--grayd"></i>
          </th>
          <th className="table__header">
            Name <i className="icon icon--base icon--sort icon--grayd"></i>
          </th>
          <th className="table__header">
            Quantity <i className="icon icon--base icon--sort icon--grayd"></i>
          </th>
        </tr>
      </thead>

      <tbody>
        {products.filter(handle).map((product) => {
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
    </table>
  );
};

export default ProductsTable;
