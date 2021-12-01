import products from "../../products";
import ProductsItem from "./ProductsItem";

const ProductsList = () => {
  return (
    <div className="container">
      <ul className="row">
        {products.map((item) => (
          <li key={item.id} className="col-4 my-2 d-flex">
            <ProductsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
