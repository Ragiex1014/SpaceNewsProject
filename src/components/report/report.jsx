import React from "react";
import { useState } from "react";
import Header from "../header/header";
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import "./report.css";
import CardList from "../cardList/cardList";
import { useFetch } from "../../customHooks/fetchHook";

const Report = () => {
  const [url, setUrl] = useState(
    "https://api.spaceflightnewsapi.net/v4/reports/",
  );

  const reports = useFetch(url);

  const handlePageClick = (page) => {
    setUrl(page);
  };

  const handleSubmit = (submitValue) => {
    console.log(submitValue);
    setUrl(
      `https://api.spaceflightnewsapi.net/v4/reports/?search=${submitValue}`,
    );
  };

  return (
    <div className="Blogs">
      <Search handleSubmit={handleSubmit} />
      <Pagination
        page={reports.page}
        handleClick={handlePageClick}
      ></Pagination>
      <main className="Main">
        {!reports.isError ? (
          reports.loading ? (
            <div className="loading">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <CardList data={reports.data}></CardList>
          )
        ) : (
          <h1>Error</h1>
        )}
      </main>
    </div>
  );
};

export default Report;
