import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h2>Oops! Something Went Wrong</h2>
      <h2 style={{ marginBottom: "15px" }}>
        Error {error.status}: Page {error.statusText}
      </h2>
      <Link className="nav-link" to="/">
        Go to Sales Summary
      </Link>
    </div>
  );
};

export default Error;
