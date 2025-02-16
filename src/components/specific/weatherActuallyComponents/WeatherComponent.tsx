"use client"
import { weatherDataFetch } from "@/helpers/actuallyWeather"
import type { IData } from "@/interfaces/interface"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Droplets,
  Search,
  MapPin,
  Thermometer,
  Umbrella,
  CloudSnow,
  Sunrise,
  Sunset,
  Moon,
} from "lucide-react"

const WeatherActuallyComponent = () => {
  const [weatherData, setWeatherData] = useState<IData | null>(null)
  const [city, setCity] = useState("")
  const [selectedDay, setSelectedDay] = useState(0)

  const handleButton = async () => {
    if (!city) {
      alert("Por favor, ingresa una ciudad.")
      return
    }

    try {
      const res = await weatherDataFetch(city)

      if (res?.location?.name) {
        setWeatherData(res)
        setSelectedDay(0)
      } else {
        setWeatherData(null)
        alert("No se pudo encontrar la ciudad. Por favor, intenta de nuevo.")
      }
    } catch (error) {
      console.log("Error al buscar los datos del clima:", error)
      alert("No se pudo encontrar la ciudad. Por favor, intenta de nuevo.")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const getWeatherIcon = (condition: string) => {
    if (condition.toLowerCase().includes("sun") || condition.toLowerCase().includes("clear")) return Sun
    if (condition.toLowerCase().includes("cloud")) return Cloud
    if (condition.toLowerCase().includes("rain")) return CloudRain
    if (condition.toLowerCase().includes("snow")) return CloudSnow
    return Sun // Icono por defecto
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4 flex flex-col items-center">
      <Card className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden mb-8">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <MapPin className="text-white mr-2" />
            <Input
              type="text"
              placeholder="Buscar ciudad"
              value={city}
              onChange={handleChange}
              className="flex-grow bg-white/10 border-none text-white placeholder-white"
            />
            <Button onClick={handleButton} size="icon" variant="ghost" className="ml-2 text-white hover:bg-white/10">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {!weatherData ? (
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-4">Inserta una ciudad</h1>
              <p>Ingresa el nombre de una ciudad para ver su información climática.</p>
            </div>
          ) : weatherData.location.name == undefined ? (
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-4">Ciudad no encontrada</h1>
              <p>No se pudo encontrar la ciudad buscada. Por favor, intenta con otro nombre.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {weatherData.location.name}, {weatherData.location.country}
                </h2>
                <p className="text-white/80">{weatherData.location.localtime}</p>
                <div className="flex justify-center items-center mt-4">
                  {React.createElement(getWeatherIcon(weatherData.current.condition.text), {
                    className: "h-24 w-24 text-yellow-300 mr-4",
                  })}
                  <div>
                    <p className="text-6xl font-bold text-white">{weatherData.current.temp_c}°C</p>
                    <p className="text-xl text-white/80">{weatherData.current.condition.text}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-xl p-3">
                  <Thermometer className="h-6 w-6 text-red-300 mr-2" />
                  <div>
                    <p className="text-sm text-white/80">Sensación</p>
                    <p className="text-lg font-semibold text-white">{weatherData.current.feelslike_c}°C</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/20 rounded-xl p-3">
                  <Wind className="h-6 w-6 text-blue-300 mr-2" />
                  <div>
                    <p className="text-sm text-white/80">Viento</p>
                    <p className="text-lg font-semibold text-white">{weatherData.current.wind_kph} km/h</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/20 rounded-xl p-3">
                  <Droplets className="h-6 w-6 text-blue-300 mr-2" />
                  <div>
                    <p className="text-sm text-white/80">Humedad</p>
                    <p className="text-lg font-semibold text-white">{weatherData.current.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/20 rounded-xl p-3">
                  <Umbrella className="h-6 w-6 text-yellow-300 mr-2" />
                  <div>
                    <p className="text-sm text-white/80">Índice UV</p>
                    <p className="text-lg font-semibold text-white">{weatherData.current.uv}</p>
                  </div>
                </div>
              </div>

              <div className="text-center text-white/80">
                <p>Región: {weatherData.location.region}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {weatherData && weatherData.location.name && (
        <Card className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-6">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/20 mb-4">
                <TabsTrigger value="daily" className="text-white">
                  Pronóstico Diario
                </TabsTrigger>
                <TabsTrigger value="hourly" className="text-white">
                  Pronóstico por Hora
                </TabsTrigger>
              </TabsList>
              <TabsContent value="daily">
                <div className="flex overflow-x-auto py-4 mb-4">
                  {weatherData.forecast.forecastday.map((day, index) => (
                    <Button
                      key={day.date}
                      onClick={() => setSelectedDay(index)}
                      variant={selectedDay === index ? "default" : "ghost"}
                      className="flex-shrink-0 mr-2 text-white"
                    >
                      {formatDate(day.date)}
                    </Button>
                  ))}
                </div>
                {weatherData.forecast.forecastday[selectedDay] && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-white/20 text-white">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Temperaturas</h3>
                        <p>Máxima: {weatherData.forecast.forecastday[selectedDay].day.maxtemp_c}°C</p>
                        <p>Mínima: {weatherData.forecast.forecastday[selectedDay].day.mintemp_c}°C</p>
                        <p>Promedio: {weatherData.forecast.forecastday[selectedDay].day.avgtemp_c}°C</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/20 text-white">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Precipitaciones</h3>
                        <p>Total: {weatherData.forecast.forecastday[selectedDay].day.totalprecip_mm} mm</p>
                        <p>
                          Probabilidad de lluvia:{" "}
                          {weatherData.forecast.forecastday[selectedDay].day.daily_chance_of_rain}%
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/20 text-white">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Condiciones</h3>
                        <div className="flex items-center">
                          <img
                            src={weatherData.forecast.forecastday[selectedDay].day.condition.icon || "/placeholder.svg"}
                            alt="Weather icon"
                            className="w-12 h-12 mr-2"
                          />
                          <p>{weatherData.forecast.forecastday[selectedDay].day.condition.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/20 text-white">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Viento y Humedad</h3>
                        <p>Viento máximo: {weatherData.forecast.forecastday[selectedDay].day.maxwind_kph} km/h</p>
                        <p>Humedad promedio: {weatherData.forecast.forecastday[selectedDay].day.avghumidity}%</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/20 text-white md:col-span-2">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Sol y Luna</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p>
                              <Sunrise className="inline mr-2" /> Amanecer:{" "}
                              {weatherData.forecast.forecastday[selectedDay].astro.sunrise}
                            </p>
                            <p>
                              <Sunset className="inline mr-2" /> Atardecer:{" "}
                              {weatherData.forecast.forecastday[selectedDay].astro.sunset}
                            </p>
                          </div>
                          <div>
                            <p>
                              <Moon className="inline mr-2" /> Salida de la luna:{" "}
                              {weatherData.forecast.forecastday[selectedDay].astro.moonrise}
                            </p>
                            <p>Fase lunar: {weatherData.forecast.forecastday[selectedDay].astro.moon_phase}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="hourly">
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="bg-white/20">
                        <th className="p-2">Hora</th>
                        <th className="p-2">Temp</th>
                        <th className="p-2">Sensación</th>
                        <th className="p-2">Condición</th>
                        <th className="p-2">Viento</th>
                        <th className="p-2">Humedad</th>
                        <th className="p-2">Lluvia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weatherData.forecast.forecastday[selectedDay].hour.map((hour) => (
                        <tr key={hour.time} className="border-b border-white/20">
                          <td className="p-2">
                            {new Date(hour.time).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                          </td>
                          <td className="p-2">{hour.temp_c}°C</td>
                          <td className="p-2">{hour.feelslike_c}°C</td>
                          <td className="p-2">
                            <div className="flex items-center">
                              <img
                                src={hour.condition.icon || "/placeholder.svg"}
                                alt="Weather icon"
                                className="w-8 h-8 mr-2"
                              />
                              {hour.condition.text}
                            </div>
                          </td>
                          <td className="p-2">{hour.wind_kph} km/h</td>
                          <td className="p-2">{hour.humidity}%</td>
                          <td className="p-2">{hour.chance_of_rain}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default WeatherActuallyComponent

