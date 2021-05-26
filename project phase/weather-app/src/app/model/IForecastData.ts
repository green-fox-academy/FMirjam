import { IForecastWeatherIcon } from './IFirecastWeatherIcon';
import { IForecastTemp } from './IForecastTemp';
import { IForecastWeatherDescription } from './IForecastWeatheDescr';


export interface IForecastData {
  temp: IForecastTemp;
  description: IForecastWeatherDescription[];
  icon: IForecastWeatherIcon[];
}
