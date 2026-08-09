import axios from "axios";

async function countryLoader() {
  try {
    const [countryInfo, borders, cities, weatherRes] = await Promise.all([
      axios.get("https://countries.dev/name/rwanda"),
      axios.get("https://countries.dev/borders/rwanda"),
      axios.get("https://countries.dev/cities?country=RW"),
      axios.get(`https://wttr.in/Kigali?format=j1`),
    ]);
    console.log(weatherRes);
    const weather = {
      tempC: weatherRes.data.current_condition[0].temp_C,
      condition: weatherRes.data.current_condition[0].weatherDesc[0].value,
      url: weatherRes.data.current_condition[0].weatherIconUrl[0].value,
      fell: weatherRes.data.current_condition[0].FeelsLikeC,
      humidity: weatherRes.data.current_condition[0].humidity,
    };
    return {
      countryInfo: countryInfo.data,
      borders: borders.data,
      cities: cities.data.slice(0, 4),
      weather,
    };
  } catch (error) {
    throw new Response("Failed to load country data", {
      status: 500,
    });
  }
}

export default countryLoader;
