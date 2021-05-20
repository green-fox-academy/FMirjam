import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather.service';
import { ITile } from './model/Itile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  tiles: ITile[]
 
  constructor(private service: WeatherService) {
    this.service.printToConsole('Got the service');
  }

  ngOnInit(): void {
    this.service
      .getApiData()
      .subscribe((response) => (this.tiles = response));
  }

  getCityWeather() {
    console.log('Testing');
  }
}
