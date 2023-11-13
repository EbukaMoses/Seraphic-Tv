import React from "react";

const News = () => {
  const fetchNews = async () => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-10-13&pageSize=20&page=5&sortBy=publishedAt&apiKey=880be73cf1c6430e8e1c742521b86f74";
    const a = await fetch(url);
    const response = await a.json();
    console.log(response);
  };
  fetchNews();
  return <div>News</div>;
};

export default News;
