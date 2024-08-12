import { useState, useEffect } from "react";

const HistoricalData = ({ selectedCurrency }) => {
  const [historicalRates, setHistoricalRates] = useState([]);

  useEffect(() => {
    if (selectedCurrency) {
      // Fetch historical data from your backend
      fetch(`/api/historical-rates?currency=${selectedCurrency}`)
        .then((res) => res.json())
        .then((data) => setHistoricalRates(data));
    }
  }, [selectedCurrency]);

  return (
    <div>
      <h2>Historical Data</h2>
      {selectedCurrency && (
        <ul>
          {historicalRates.map((rate, index) => (
            <li key={index}>
              {rate.date}: Cash Buy: {rate.cashBuy}, Cash Sell: {rate.cashSell}, Transfer Buy: {rate.transferBuy}, Transfer Sell: {rate.transferSell}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoricalData;
