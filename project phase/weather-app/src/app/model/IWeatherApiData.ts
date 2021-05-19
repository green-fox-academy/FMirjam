import { IMain } from './IMain';
import { ISys } from './ISys';
import { IWeather } from './IWeather';

export interface IWeatherApiData {
  id: number;
  name: string;
  sys: ISys;
  main: IMain;
  weather: IWeather[];
}
