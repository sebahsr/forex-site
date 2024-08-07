import React from 'react';

const BankList = ({ banks }) => {
  return (
    <div>
      <h2>Forex Rates for Ethiopian Banks</h2>
      <ul>
        {banks.map((bank) => (
          <li key={bank.id}>
            <h3>{bank.name}</h3>
            <p>USD: {bank.rates.USD} Birr</p>
            <p>EUR: {bank.rates.EUR} Birr</p>
            {/* Add more currencies as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankList;
