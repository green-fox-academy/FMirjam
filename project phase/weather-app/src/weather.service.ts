import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITile } from './app/model/Itile';
import { IWeatherApiData } from './app/model/IWeatherApiData';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '100cb1887e2abc22cbc5d54fc670e448';
  constructor(private http: HttpClient) {}

  printToConsole(arg) {
    console.log(arg);
  }

  getApiData(): Observable<ITile>{
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
