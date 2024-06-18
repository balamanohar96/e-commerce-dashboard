import React from "react";
import Shimmer from "./Shimmer";
import Product from "./Product";
import useProductDetails from "../customHooks/useProductDetails";

const Body = () => {
  const [products, error] = useProductDetails();

  if (!error) {
    if (products.length === 0) {
      return <Shimmer />;
    }
  } else {
    return (
      <h2 className="error-msg">Failed to fetch the data, reload the page.</h2>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <Product key={product.id} details={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Body;
