import React, { useState, useEffect } from "react";

export const useFetch = (newUrl) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState({ previous: null, next: null });
  const [url, setUrl] = useState(newUrl);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const controller = new AbortController();
        setLoading(true);
        const response = await fetch(newUrl, { signal: controller.signal });
        const data = await response.json();
        console.log(data);
        setData(data.results);
        setPage((page) => ({
          ...page,
          previous: data.previous,
          next: data.next,
        }));
      } catch (e) {
        console.log(e.message);
        setisError(true);
      } finally {
        setLoading(false);
      }

      return () => {
        controller.abort();
      };
    };
    fetchNews();
  }, [newUrl]);
  console.log(page);
  return {
    loading,
    data,
    error,
    page,
  };
};
