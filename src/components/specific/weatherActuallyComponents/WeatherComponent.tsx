"use client";
import { weatherDataFetch } from '@/helpers/actuallyWeather';
import { IData } from '@/interfaces/interface';
import React, { useState, useEffect } from 'react';

const WeatherActuallyComponent = () => {
  const [weatherData, setWeatherData] = useState<IData>();


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await weatherDataFetch(); 
        console.log(res.current); 
        setWeatherData(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData(); 
  }, []); 


  return (
    <div>
      {weatherData ? (
        <div>
          <p>Localización:{weatherData.location.name}</p>
          <p>Pais:{weatherData.location.country}</p>
          <p>Horario: {weatherData.location.localtime}</p>
          <p>Region: {weatherData.location.region}</p>
          <p>Temperatura: {weatherData.current.temp_c}</p>
          <p>Sensación térmica: {weatherData.current.feelslike_c}</p>
          <p>Velocidad del viento: {weatherData.current.wind_kph}km/h</p>
          <p>Humedad: {weatherData.current.humidity}%</p>
          <p>UV: {weatherData.current.uv}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
};

export default WeatherActuallyComponent;
