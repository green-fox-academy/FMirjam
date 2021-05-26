import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IForecastData } from './app/model/IForecastData';
import { IForecastGroupData } from './app/model/IForecastGroupData';
import { ITile } from './app/model/Itile';
import { IWeatherApiData } from './app/model/IWeatherApiData';
import { IWeatherGroupData } from './app/model/IWeatherGroupData';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '100cb1887e2abc22cbc5d54fc670e448';
  ids: string[] = ['5809844', '4164138', '3128760', '2643743', '3054643'];
  cnt: number = 5;
  constructor(private http: HttpClient) {}

  printToConsole(arg) {
    console.log(arg);
  }

  getApiData(): Observable<ITile[]> {
    return this.http
      .get<IWeatherGroupData>( //IWetaherGroupData típus
        `https://api.openweathermap.org/data/2.5/group?id=${this.ids.join(
          ','
        )}&appid=${this.apiKey}`
      )
      .pipe(
        tap((x) => console.log(x)),
        map((data) => {
          //rxjs map
          return data.list.map((y) => {
            //array map
            return {
              id: y.id,
              city: y.name,
              state: y.sys.country,
              degree: Math.round(y.main.temp - 272.15),
              image: y.weather[0].icon,
            };
          });
        })
      );
  }

  getApiDataByCityName(cityName: string): Observable<ITile> {
    return this.http
      .get<IWeatherApiData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`
      )
      .pipe(
        // tap((z) => console.log(z)),
        map((data) => {
          return {
            id: data.id,
            city: data.name,
            state: data.sys.country,
            degree: Math.round(data.main.temp - 272.15),
            image: data.weather[0].icon,
          };
        })
      );
  }

  getForecastDataById(): Observable<IForecastData> {
    return this.http
      .get<IForecastGroupData>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?id=5809844&cnt=5&appid=${this.apiKey}`
      )
      .pipe(
        tap((v) => console.log(v)),
        map((data) => {
          return data.list.map((x) => {
            // console.log(x)
            return {
              temp: x.temp.day,
              description: x.description[0].main,
              icon: x.icon[0].icon,
            };
          });
        })
      );
  }
}
