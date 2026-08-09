import axios from "axios";
import type { LoaderFunctionArgs } from "react-router-dom";

async function countryLoader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const city = url.searchParams.get("city") ?? "";
    const countryName = url.searchParams.get("name");
    const code = url.searchParams.get("code");
    if (!countryName || !code) {
      throw new Response("Missing required query parameters", { status: 400 });
    }
    const encodedName = encodeURIComponent(countryName);
    const encodedCode = encodeURIComponent(code.slice(0, 2));
    const encodedCity = encodeURIComponent(city);
    const [countryInfo, borders, cities, weatherRes] = await Promise.all([
      axios.get(`https://countries.dev/name/${encodedName}`, {
        signal: request.signal,
      }),
      axios.get(`https://countries.dev/borders/${encodedName}`, {
        signal: request.signal,
      }),
      axios.get(`https://countries.dev/cities?country=${encodedCode}`, {
        signal: request.signal,
      }),
      axios.get(`https://wttr.in/${encodedCity}?format=j1`, {
        signal: request.signal,
      }),
    ]);

    const countryData = Array.isArray(countryInfo.data)
      ? countryInfo.data[0]
      : countryInfo.data;

    const weather = {
      tempC: weatherRes.data.current_condition[0].temp_C,
      condition: weatherRes.data.current_condition[0].weatherDesc[0].value,
      url: weatherRes.data.current_condition[0].weatherIconUrl[0].value,
      city,
      humidity: weatherRes.data.current_condition[0].humidity,
      timezone: countryData.timezones[0],
    };

    return {
      countryInfo: countryData,
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
