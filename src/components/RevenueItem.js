import React from "react";

const RevenueItem = ({ details ,index }) => {
  return (
    <tr>
      <td>{index+1}</td>
      <td>{details.date.slice(0,10)}</td>
      <td>{details.revenue}</td>
    </tr>
  );
};

export default RevenueItem;
