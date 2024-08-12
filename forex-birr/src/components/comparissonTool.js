import { useState } from "react";

const ComparisonTool = ({ banks }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const getRates = () => {
    return banks.map((bank) => {
      const currency = bank.currencies.find(
        (c) => c.name === selectedCurrency
      );
      return {
        bankName: bank.name,
        cashBuy: currency?.cashBuyRate || "N/A",
        cashSell: currency?.cashSellRate || "N/A",
        transferBuy: currency?.TansactionBuyRate || "N/A",
        transferSell: currency?.TansactionSellRate || "N/A",
      };
    });
  };

  return (
    <div>
      <h2>Comparison Tool</h2>
      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        <option value="">Select Currency</option>
        {[
          ...new Set(banks.flatMap((bank) =>
            bank.currencies.map((c) => c.name)
          )),
        ].map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      {selectedCurrency && (
        <table>
          <thead>
            <tr>
              <th>Bank</th>
              <th>Cash Buy</th>
              <th>Cash Sell</th>
              <th>Transfer Buy</th>
              <th>Transfer Sell</th>
            </tr>
          </thead>
          <tbody>
            {getRates().map((rate) => (
              <tr key={rate.bankName}>
                <td>{rate.bankName}</td>
                <td>{rate.cashBuy}</td>
                <td>{rate.cashSell}</td>
                <td>{rate.transferBuy}</td>
                <td>{rate.transferSell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComparisonTool;
