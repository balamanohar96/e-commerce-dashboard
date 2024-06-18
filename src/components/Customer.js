import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Customer = () => {
  const [customerEngagement, setCustomerEngagement] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("customerEngagement");
    const json = JSON.parse(data);
    setCustomerEngagement(json);
  }, []);
  if (customerEngagement.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th>New Customers</th>
          <td>{customerEngagement.new_customers}</td>
        </tr>
        <tr>
          <th>Returning Customers</th>
          <td>{customerEngagement.returning_customers}</td>
        </tr>
        <tr>
          <th>Average Customer Satisfaction Rating</th>
          <td>{customerEngagement.customer_satisfaction.average_rating}</td>
        </tr>
        <tr>
          <th>Total Customer Reviews</th>
          <td>{customerEngagement.customer_satisfaction.total_reviews}</td>
        </tr>
        <tr>
          <th>Average Orders Per Customer</th>
          <td>
            {customerEngagement.order_frequency.average_orders_per_customer}
          </td>
        </tr>
        <tr>
          <th>Total Revenue</th>
          <td>{customerEngagement.revenue_metrics.total_revenue}</td>
        </tr>
        <tr>
          <th>Average Order Value</th>
          <td>{customerEngagement.revenue_metrics.average_order_value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
