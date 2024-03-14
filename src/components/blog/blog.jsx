import React from "react";
import { useState } from "react";
import Header from "../header/header";
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import "./blog.css";
import CardList from "../cardList/cardList";
import { useFetch } from "../../customHooks/fetchHook";

const Blog = () => {
  const [url, setUrl] = useState(
    "https://api.spaceflightnewsapi.net/v4/blogs/",
  );

  const blogs = useFetch(url);

  const handlePageClick = (page) => {
    setUrl(page);
  };

  const handleSubmit = (submitValue) => {
    console.log(submitValue);
    setUrl(
      `https://api.spaceflightnewsapi.net/v4/blogs/?search=${submitValue}`,
    );
  };

  return (
    <div className="Blogs">
      <Search handleSubmit={handleSubmit} />
      <Pagination page={blogs.page} handleClick={handlePageClick}></Pagination>
      <main className="Main">
        {!blogs.isError ? (
          blogs.loading ? (
            <div className="loading">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <CardList data={blogs.data}></CardList>
          )
        ) : (
          <h1>Error</h1>
        )}
      </main>
    </div>
  );
};

export default Blog;
