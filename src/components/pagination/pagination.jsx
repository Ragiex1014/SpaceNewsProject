import React from "react";
import "./pagination.css";

const Pagination = ({ page, handleClick }) => {
  return (
    <div className="d-grid gap-2 d-md-flex col-2 mx-auto justify-content-md-center Pagination">
      {page.previous ? (
        <button
          className="buttonPrev"
          type="button"
          onClick={() => {
            handleClick(page.previous);
          }}
        >
          Previous
        </button>
      ) : (
        <button className="buttonDis" type="button">
          Previous
        </button>
      )}
      {page.next ? (
        <button
          className="buttonNext"
          type="button"
          onClick={() => {
            handleClick(page.next);
          }}
        >
          Next
        </button>
      ) : (
        <button className="buttonDis" type="button">
          Previous
        </button>
      )}
    </div>
  );
};

export default Pagination;
