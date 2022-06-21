import ProductsService from "../../services/productsService";
import { Product } from "../../types/Product";
import { toast } from "react-toastify";

interface Props {
  products: Product[];
  productSearch: string;
  fetchProducts: () => void;
}

const ProductsTable: React.FC<Props> = (props) => {
  const { products, productSearch, fetchProducts } = props;

  const productsService = new ProductsService();

  function handleSearch(value: Product) {
    if (productSearch === "") {
      return value;
    } else if (value.name.includes(productSearch)) {
      return value;
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await productsService.deleteProduct(id);
      fetchProducts();
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
              <i
                className="icon icon--base icon--delete icon--black ml-29 "
                onClick={() => handleDelete(product.id)}
              ></i>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProductsTable;
