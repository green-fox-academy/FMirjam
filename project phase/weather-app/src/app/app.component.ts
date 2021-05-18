import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from 'src/weather.service';
import { TILES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  tiles = TILES;

  constructor(private service: WeatherService, private http: HttpClient) {
    this.service.printToConsole('Got the service');
  }

  ngOnInit() {
    let observable = this.http.get('URL');
    observable.subscribe((response) => console.log(response));
  }
}
