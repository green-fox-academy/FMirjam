import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITile } from './app/model/tile';

export interface IWeatherApiData {
  id: number;
  name: string;
  sys: ISys;
  main: IMain;
  weather: IWeather[];
}

export interface IWeather {
  icon: string;
}

export interface IMain {
  temp: number;
}

export interface ISys {
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '100cb1887e2abc22cbc5d54fc670e448';
  constructor(private http: HttpClient) {}

  printToConsole(arg) {
    console.log(arg);
  }

  getApiData(): Observable<ITile> {
    return this.http
      .get<IWeatherApiData>(
        `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${this.apiKey}`
      )
      .pipe(
        tap((x) => console.log(x)),
        map((x) => {
          return {
            id: x.id,
            city: x.name,
            state: x.sys.country,
            degree: x.main.temp,
            image: x.weather[0].icon,
          };
        })
      );
  }
}
