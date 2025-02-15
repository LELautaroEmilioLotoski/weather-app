
export const weatherDataFetch = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=31c948b47c8b47b382c155533251502&q=Chile&aqi=no`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    });
    const data = await res.json();
    console.log(data);
   
    return data;
  };
