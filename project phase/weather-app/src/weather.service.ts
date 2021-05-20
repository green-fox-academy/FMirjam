import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITile } from './app/model/Itile';
import { IWeatherGroupData } from './app/model/IWeatherGroupData';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '100cb1887e2abc22cbc5d54fc670e448';
  response: string[] = ['5809844', '4164138', '3128760', '2643743', '3054643'];
  constructor(private http: HttpClient) {}

  printToConsole(arg) {
    console.log(arg);
  }

  getApiData(): Observable<ITile[]> {
    return this.http
      .get<IWeatherGroupData>( //IWetaherGroupData típus
        `https://api.openweathermap.org/data/2.5/group?id=${this.response.join(
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
              image: y.weather[0].main,
            };
          });
        })
      );
  }
}
