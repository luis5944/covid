import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const ulrNews =
  "https://newsapi.org/v2/everything?language=es&q=coronavirus&from=2020-08-10&sortBy=publishedAt&apiKey=8d461b4b16534642b955473385154874";
export const fetchNews = async () => {

  const response = await fetch(ulrNews);
  const {articles} = await response.json();
  // const {data:{articles}} = await axios.get(ulrNews);
  return articles;
};

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
