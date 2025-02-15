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

export interface IData {
    location: IDataWeather; // Información sobre la ubicación
    current: ICurrentWeather; // Información del clima actual
}
