import React from 'react';

const ForexRate = ({ rate, currency }) => {
  return (
    <div>
      <h3>{currency}</h3>
      <p>{rate} Birr</p>
    </div>
  );
};

export default ForexRate;
