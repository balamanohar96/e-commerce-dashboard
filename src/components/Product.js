import React from "react";

const Product = ({ details }) => {
  return (
    <tr>
      <td>{details.id}</td>
      <td>{details.name}</td>
      <td>{details.quantity}</td>
      <td>{details.price}</td>
    </tr>
  );
};

export default Product;
