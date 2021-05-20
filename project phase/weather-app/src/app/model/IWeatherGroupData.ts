import { IWeatherApiData } from './IWeatherApiData';

export interface IWeatherGroupData {
  cnt: number;
  list: IWeatherApiData[];
}
