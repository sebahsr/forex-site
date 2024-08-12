import { useState, useEffect } from "react";

const CurrencyNews = ({ selectedCurrency }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (selectedCurrency) {
      // Fetch news related to the selected currency
      fetch(`/api/currency-news?currency=${selectedCurrency}`)
        .then((res) => res.json())
        .then((data) => setNews(data));
    }
  }, [selectedCurrency]);

  return (
    <div>
      <h2>Currency News and Insights</h2>
      {news.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrencyNews;
