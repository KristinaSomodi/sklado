function ProductsTable() {
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
        <tr>
          <td>1234567</td>
          <td>product1</td>
          <td>33</td>
          <td className="icons">
            <i className="icon icon--base icon--edit icon--black "></i>
            <i className="icon icon--base icon--delete icon--black ml-29 "></i>
          </td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>product1</td>
          <td>33</td>
          <td className="icons">
            <i className="icon icon--base icon--edit icon--black "></i>
            <i className="icon icon--base icon--delete icon--black ml-29 "></i>
          </td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>product1</td>
          <td>33</td>
          <td className="icons">
            <i className="icon icon--base icon--edit icon--black "></i>
            <i className="icon icon--base icon--delete icon--black ml-29 "></i>
          </td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>product1</td>
          <td>33</td>
          <td className="icons">
            <i className="icon icon--base icon--edit icon--black "></i>
            <i className="icon icon--base icon--delete icon--black ml-29 "></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductsTable;
