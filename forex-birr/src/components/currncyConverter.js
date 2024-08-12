import { useState } from "react";

const CurrencyConverter = ({ banks }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const bank = banks.find((b) => b.name === selectedBank);
    const currency = bank?.currencies.find((c) => c.name === selectedCurrency);
    if (currency) {
      setResult({
        cashBuy: amount * currency.cashBuyRate,
        cashSell: amount * currency.cashSellRate,
        transferBuy: amount * currency.TansactionBuyRate,
        transferSell: amount * currency.TansactionSellRate,
      });
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <select onChange={(e) => setSelectedBank(e.target.value)}>
        <option value="">Select Bank</option>
        {banks.map((bank) => (
          <option key={bank.name} value={bank.name}>
            {bank.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        <option value="">Select Currency</option>
        {banks
          .find((b) => b.name === selectedBank)?.currencies.map((currency) => (
            <option key={currency.name} value={currency.name}>
              {currency.name}
            </option>
          ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleConvert}>Convert</button>
 
      {result && (
        <div>
          <p>Cash Buy: {result.cashBuy}</p>
          <p>Cash Sell: {result.cashSell}</p>
          <p>Transfer Buy: {result.transferBuy}</p>
          <p>Transfer Sell: {result.transferSell}</p>
        </div>
      )} 
    </div>
  );
};

export default CurrencyConverter;
