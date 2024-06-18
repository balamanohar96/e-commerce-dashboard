import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import productPerformance from "../utils/productPerformance.json";
import customerEngagement from "../utils/customerEngament.json";

const Body = () => {
  useEffect(() => {
    window.localStorage.setItem("productsPerformance", JSON.stringify(productPerformance));
    window.localStorage.setItem("customerEngagement", JSON.stringify(customerEngagement));
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
