import React from "react";
import "./notFoundPage.css";
import { Link } from "react-router-dom";

const notFoundPage = () => {
  return (
    <div>
      <h1>Error 404 not found</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default notFoundPage;
