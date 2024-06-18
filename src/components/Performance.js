import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Performance = () => {
  const [productPerformance, setProductPerformance] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("productsPerformance");
    const json = JSON.parse(data);
    setProductPerformance(json.products);
  }, []);
  if (productPerformance.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Revenue</th>
            <th>Reviews Count</th>
            <th>Total Orders</th>
            <th>Total Sales</th>
            <th>Last Ordered Date</th>
          </tr>
        </thead>
        <tbody>
          {productPerformance.map((each) => {
            return (
              <tr key={each.product_id}>
                <td>{each.product_id}</td>
                <td>{each.name}</td>
                <td>{each.category}</td>
                <td>{each.rating}</td>
                <td>{each.revenue}</td>
                <td>{each.reviews_count}</td>
                <td>{each.total_orders}</td>
                <td>{each.total_sales}</td>
                <td>{each.last_order_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Performance;
