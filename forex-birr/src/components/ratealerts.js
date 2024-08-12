import { useState } from "react";

const RateAlerts = ({ banks }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [threshold, setThreshold] = useState(0);

  const handleSetAlert = () => {
    // Send the alert to your backend
    fetch("/api/set-alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bank: selectedBank,
        currency: selectedCurrency,
        threshold,
      }),
    });
  };

  return (
    <div>
      <h2>Set Rate Alerts</h2>
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
        placeholder="Threshold"
        value={threshold}
        onChange={(e) => setThreshold(e.target.value)}
      />

      <button onClick={handleSetAlert}>Set Alert</button>
    </div>
  );
};

export default RateAlerts;
