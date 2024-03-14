import React from "react";
import "./pagination.css";

const Pagination = ({ page, handleClick }) => {
  return (
    <div className="d-grid gap-2 d-md-flex col-2 mx-auto justify-content-md-center Pagination">
      {page.previous ? (
        <i
          className="fa-solid fa-circle-arrow-left fa-2xl buttonNext"
          onClick={() => {
            handleClick(page.previous);
          }}
        ></i>
      ) : (
        <i className="fa-solid fa-circle-arrow-left fa-2xl buttonDis buttonNext"></i>
      )}
      {page.next ? (
        <i
          className="fa-solid fa-circle-arrow-right fa-2xl buttonNext"
          onClick={() => {
            handleClick(page.next);
          }}
        ></i>
      ) : (
        <i className="fa-solid fa-circle-arrow-right fa-2xl buttonDis buttonNext"></i>
      )}
    </div>
  );
};

export default Pagination;
