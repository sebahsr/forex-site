import React, { useEffect, useState } from 'react';
import ForexTable from '../components/ForexTable'
// import getLatest from './api/forexapi';
// import CurrencyConverter from '../components/currncyConverter';
// import ComparisonTool from '../components/comparissonTool';
// import HistoricalData from '../components/HistoricalData';
// import Favorites from '../components/favourites';
// import RateAlerts from '../components/ratealerts';
// import CurrencyNews from '../components/CurrencyNews';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
 getLatest().then((res)=>{
  setData(res[0])
    console.log(res,'sebah')})
  }, []);
  return (
    <div>
      <header>
        <h1>Forex Tracker Dashboard</h1>
        <p>Monitor, compare, and convert currency rates effortlessly.</p>
      </header>

      {/* <section>
        <h2>Currency Converter</h2>
        <CurrencyConverter banks={data.rates} />
      </section>

     <section>
        <h2>Comparison Tool</h2>
        <ComparisonTool banks={data.rates} />
      </section>

      <section>
        <h2>Historical Data</h2>
        {/* Assuming the selected currency comes from some state or prop
        <HistoricalData selectedCurrency="USD" />
      </section>
 
      {/* <section>
        <h2>Favorites/Watchlist</h2>
        <Favorites banks={data.rates} />
      </section> 

      <section>
        <h2>Set Rate Alerts</h2>
        <RateAlerts banks={data.rates} />
      </section> */}

       {/*<section>
        <h2>Currency News and Insights</h2>
        {/* Assuming the selected currency comes from some state or prop 
        <CurrencyNews selectedCurrency="USD" />
      </section>*/}
      <section> 
        <h2>All Banks</h2>
        {/* Assuming the selected currency comes from some state or prop */}
        <ForexTable data={data.rates} />
      </section>

      <footer>
        <p>&copy; 2024 Forex Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
