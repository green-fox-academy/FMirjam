import { IForecastTemp } from './IForecastTemp';
import { IForecastWeather } from './IForecastWeather';

export interface IForecastData {
  temp: IForecastTemp;
  weather: IForecastWeather[];
}
