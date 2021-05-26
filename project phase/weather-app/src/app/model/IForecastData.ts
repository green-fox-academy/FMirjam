import { IForecastTemp } from './IForecastTemp';
import { IForecastWeatherDescription } from './IForecastWeatherDescr';

export interface IForecastData {
  temp: IForecastTemp;
  weather: IForecastWeatherDescription[];
}
