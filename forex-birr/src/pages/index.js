import React, { useEffect, useState } from 'react';
import ForexTable from '../components/ForexTable';
import getLatest from './api/forexapi';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
 getLatest().then((res)=>{
  setData(res[0])
    console.log(res,'sebah')})
  }, []);
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center my-8">Forex Rates</h1>
    <ForexTable data={data.rates} />
  </div>
  );
}
