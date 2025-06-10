import type { Coordinates } from "@/api/types";
import { weatherApi } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEY = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
  forecast: (coords: Coordinates) => ["forecast", coords] as const,
  location: (coords: Coordinates) => ["location", coords] as const,
} as const;

export function useWeatherQuery(coord: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEY.weather(coord ?? { lat: 0, lon: 0 }),
    queryFn: () => (coord ? weatherApi.getCurrentWeather(coord) : null),
    enabled: !!coord,
  });
}

export function useForecastQuery(coord: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEY.forecast(coord ?? { lat: 0, lon: 0 }),
    queryFn: () => (coord ? weatherApi.getForcast(coord) : null),
    enabled: !!coord,
  });
}

export function useReverseGeocodeQuery(coord: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEY.location(coord ?? { lat: 0, lon: 0 }),
    queryFn: () => (coord ? weatherApi.reverseGeocode(coord) : null),
    enabled: !!coord,
  });
}
