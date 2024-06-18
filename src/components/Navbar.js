import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h2 className="main-heading">E-commerce Dashboard</h2>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Sales Summary
        </Link>
        <Link className="nav-link" to="/revenue">
          Revenue Overview
        </Link>
        <Link className="nav-link" to="/performance">
          Product Performance
        </Link>
        <Link className="nav-link" to="/customer">
          Customer Engagement
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
