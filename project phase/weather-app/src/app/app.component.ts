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

  constructor(service: WeatherService) {
    service.printToConsole('Got the service');
  }
}
