import React from "react";
import useRevenueDetails from "../customHooks/useRevenueDetails";
import RevenueItem from "./RevenueItem";
import Shimmer from "./Shimmer";

const Revenue = () => {
  const [details, error] = useRevenueDetails();
  if (!error) {
    if (details.length === 0) {
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
            <th>Date</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, i) => {
            return <RevenueItem key={i} index={i} details={detail} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Revenue;
