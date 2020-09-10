import React, { useEffect, useState } from "react";
import { Cards } from "./components/Cards/Cards";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import { Chart } from "./components/Chart/Chart";

import styles from "./App.module.css";
import { fetchData } from "./api/fetchAPI";

import covid from "./images/covid.png";

const App = () => {
  const [state, setState] = useState({
    data: {},
    country: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setState({ data, country: "" });
    };
    getData();
  }, [setState]);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setState({ data, country });
  };

  return (
    <div className={styles.container}>
      <img
        src={covid}
        className={styles.image}
        
        alt="covid"
      />
      <Cards data={state.data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={state.data} country={state.country} />
    </div>
  );
};

export default App;
