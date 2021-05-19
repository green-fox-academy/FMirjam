import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITile } from './app/model/tile';

export interface IWeather {
  id: number;
  name:string;
  sys: string;
  main: number;
  weather: object;
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
      .get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${this.apiKey}`
      )
      .pipe(
        tap((x) => console.log(x)),
        map((x) => {
          return {
            id: x.id,
            city: x.name,
            state: x.sys,
            degree: x.main,
            image: x.weather[0].icon,
          };
        })
      );
  }
}
