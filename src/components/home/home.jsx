import { useState } from "react";
import "./home.css";
import CardList from "../cardList/cardList";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import { useFetch } from "../../customHooks/fetchHook";

function Home() {
  const [url, setUrl] = useState(
    "https://api.spaceflightnewsapi.net/v4/articles/",
  );
  const news = useFetch(url);

  const handlePageClick = (page) => {
    setUrl(page);
  };

  const handleSubmit = (submitValue) => {
    console.log(submitValue);
    setUrl(
      `https://api.spaceflightnewsapi.net/v4/articles/?search=${submitValue}`,
    );
  };

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} />
      <Pagination page={news.page} handleClick={handlePageClick}></Pagination>
      <main className="Main">
        {!news.isError ? (
          news.loading ? (
            <div className="loading">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <CardList data={news.data}></CardList>
          )
        ) : (
          <h1>Error</h1>
        )}
      </main>
    </div>
  );
}

export default Home;
