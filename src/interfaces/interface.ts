export interface IDataWeather {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: number,
    name: string,
    region: string,
    tz_id: string
}
export interface IWeatherCondition {
    text: string; // Descripción de la condición (ej. "Partly cloudy")
    icon: string; // URL del ícono que representa la condición climática
    code: number; // Código de la condición (opcional, en caso de necesitarlo)
}

export interface ICurrentWeather {
    last_updated: string; // Última hora de actualización
    temp_c: number; // Temperatura en grados Celsius
    temp_f: number; // Temperatura en grados Fahrenheit
    feelslike_c: number; // Sensación térmica en grados Celsius
    feelslike_f: number; // Sensación térmica en grados Fahrenheit
    condition: IWeatherCondition; // Condición climática actual
    wind_kph: number; // Velocidad del viento en km/h
    wind_mph: number; // Velocidad del viento en mph
    wind_dir: string; // Dirección del viento (ej. "W")
    humidity: number; // Porcentaje de humedad
    uv: number; // Índice UV
    precip_mm: number; // Precipitación en mm
    cloud: number; // Nubosidad como porcentaje
    vis_km: number; // Visibilidad en km
}

export interface ILocation {
    name: string; // Nombre de la ciudad
    region: string; // Región de la ciudad
    country: string; // País
    lat: number; // Latitud
    lon: number; // Longitud
    tz_id: string; // Zona horaria
    localtime_epoch: number; // Fecha y hora en formato epoch
    localtime: string; // Fecha y hora en formato local
}

export interface IWeatherCondition {
    text: string; // Descripción del estado del clima (ej. "Sunny")
    icon: string; // URL del ícono del clima
    code: number; // Código del estado del clima
}

export interface ICurrentWeather {
    last_updated_epoch: number; // Fecha y hora de la última actualización en formato epoch
    last_updated: string; // Fecha y hora de la última actualización
    temp_c: number; // Temperatura en grados Celsius
    temp_f: number; // Temperatura en grados Fahrenheit
    is_day: number; // Indicador si es de día (1) o de noche (0)
    condition: IWeatherCondition; // Condición del clima actual
    wind_mph: number; // Velocidad del viento en mph
    wind_kph: number; // Velocidad del viento en km/h
    wind_degree: number; // Dirección del viento en grados
    wind_dir: string; // Dirección cardinal del viento (ej. "SW")
    pressure_mb: number; // Presión atmosférica en milibares
    pressure_in: number; // Presión atmosférica en pulgadas
    precip_mm: number; // Precipitación en mm
    precip_in: number; // Precipitación en pulgadas
    humidity: number; // Humedad relativa en porcentaje
    cloud: number; // Porcentaje de nubosidad
    feelslike_c: number; // Sensación térmica en grados Celsius
    feelslike_f: number; // Sensación térmica en grados Fahrenheit
    windchill_c: number; // Efecto de enfriamiento del viento en grados Celsius
    windchill_f: number; // Efecto de enfriamiento del viento en grados Fahrenheit
    heatindex_c: number; // Índice de calor en grados Celsius
    heatindex_f: number; // Índice de calor en grados Fahrenheit
    dewpoint_c: number; // Punto de rocío en grados Celsius
    dewpoint_f: number; // Punto de rocío en grados Fahrenheit
    vis_km: number; // Visibilidad en kilómetros
    vis_miles: number; // Visibilidad en millas
    uv: number; // Índice UV
    gust_mph: number; // Ráfaga de viento máxima en mph
    gust_kph: number; // Ráfaga de viento máxima en km/h
}

export interface IForecastDay {
    date: string; // Fecha del pronóstico (formato YYYY-MM-DD)
    date_epoch: number; // Fecha del pronóstico en formato epoch
    day: {
        maxtemp_c: number; // Temperatura máxima en grados Celsius
        maxtemp_f: number; // Temperatura máxima en grados Fahrenheit
        mintemp_c: number; // Temperatura mínima en grados Celsius
        mintemp_f: number; // Temperatura mínima en grados Fahrenheit
        avgtemp_c: number; // Temperatura promedio en grados Celsius
        avgtemp_f: number; // Temperatura promedio en grados Fahrenheit
        maxwind_mph: number; // Velocidad máxima del viento en mph
        maxwind_kph: number; // Velocidad máxima del viento en km/h
        totalprecip_mm: number; // Precipitación total en mm
        totalprecip_in: number; // Precipitación total en pulgadas
        totalsnow_cm: number; // Nieve total en cm
        avgvis_km: number; // Visibilidad promedio en kilómetros
        avgvis_miles: number; // Visibilidad promedio en millas
        avghumidity: number; // Humedad promedio en porcentaje
        daily_will_it_rain: number; // Indicador si lloverá (1) o no (0)
        daily_chance_of_rain: number; // Probabilidad de lluvia en porcentaje
        daily_will_it_snow: number; // Indicador si nevará (1) o no (0)
        daily_chance_of_snow: number; // Probabilidad de nieve en porcentaje
        condition: IWeatherCondition; // Condición climática general del día
        uv: number; // Índice UV promedio
    };
    astro: {
        sunrise: string; // Hora del amanecer
        sunset: string; // Hora del atardecer
        moonrise: string; // Hora de la salida de la luna
        moonset: string; // Hora de la puesta de la luna
        moon_phase: string; // Fase lunar
        moon_illumination: number; // Porcentaje de iluminación de la luna
        is_moon_up: number; // Indicador si la luna está visible (1) o no (0)
        is_sun_up: number; // Indicador si el sol está visible (1) o no (0)
    };
    hour: IHourlyWeather[]; // Pronóstico por hora
}

export interface IHourlyWeather {
    time_epoch: number; // Fecha y hora en formato epoch
    time: string; // Fecha y hora en formato local
    temp_c: number; // Temperatura en grados Celsius
    temp_f: number; // Temperatura en grados Fahrenheit
    is_day: number; // Indicador si es de día (1) o de noche (0)
    condition: IWeatherCondition; // Condición climática
    wind_mph: number; // Velocidad del viento en mph
    wind_kph: number; // Velocidad del viento en km/h
    wind_degree: number; // Dirección del viento en grados
    wind_dir: string; // Dirección cardinal del viento
    pressure_mb: number; // Presión atmosférica en milibares
    pressure_in: number; // Presión atmosférica en pulgadas
    precip_mm: number; // Precipitación en mm
    precip_in: number; // Precipitación en pulgadas
    snow_cm: number; // Cantidad de nieve en cm
    humidity: number; // Humedad relativa en porcentaje
    cloud: number; // Porcentaje de nubosidad
    feelslike_c: number; // Sensación térmica en grados Celsius
    feelslike_f: number; // Sensación térmica en grados Fahrenheit
    windchill_c: number; // Enfriamiento por viento en grados Celsius
    windchill_f: number; // Enfriamiento por viento en grados Fahrenheit
    heatindex_c: number; // Índice de calor en grados Celsius
    heatindex_f: number; // Índice de calor en grados Fahrenheit
    dewpoint_c: number; // Punto de rocío en grados Celsius
    dewpoint_f: number; // Punto de rocío en grados Fahrenheit
    will_it_rain: number; // Indicador si lloverá (1) o no (0)
    chance_of_rain: number; // Probabilidad de lluvia en porcentaje
    will_it_snow: number; // Indicador si nevará (1) o no (0)
    chance_of_snow: number; // Probabilidad de nieve en porcentaje
    vis_km: number; // Visibilidad en kilómetros
    vis_miles: number; // Visibilidad en millas
    gust_mph: number; // Ráfaga de viento máxima en mph
    gust_kph: number; // Ráfaga de viento máxima en km/h
    uv: number; // Índice UV
}

export interface IForecast {
    forecastday: IForecastDay[]; // Array de pronósticos diarios
}

export interface IData {
    location: ILocation; // Información sobre la ubicación
    current: ICurrentWeather; // Condiciones climáticas actuales
    forecast: IForecast; // Pronóstico del clima
}
