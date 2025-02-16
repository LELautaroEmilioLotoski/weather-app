
export const weatherDataFetch = async (city: string) => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=31c948b47c8b47b382c155533251502&q=${city}&days=7&aqi=no&alerts=yes&lang=es
`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    });
    const data = await res.json();
    console.log(data);
   
    return data;
  };
