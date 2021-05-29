import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather.service';
import { IForecastTile } from '../model/IForecastTile';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastTiles: IForecastTile[];
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    // this.service
    //   .getForecastDataById()
    //   .subscribe((response) => (this.forecastTiles = response));
  }
}
