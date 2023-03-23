import React, { useEffect, useState } from 'react';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

   useEffect(() => {
    //getCovidData();
   }, []);

  return (
    <>
      <h6>live</h6>
      <h1>live covid tracker</h1>
      {data.recovered}
    </>
  );
}

export default Covid;


