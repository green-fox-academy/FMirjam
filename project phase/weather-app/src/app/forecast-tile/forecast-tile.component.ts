import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather.service';
import { IForecastTile } from '../model/IForecastTile';

@Component({
  selector: 'app-forecast-tile',
  templateUrl: './forecast-tile.component.html',
  styleUrls: ['./forecast-tile.component.scss'],
})
export class ForecastTileComponent implements OnInit {
  @Input()
  forecastTile: IForecastTile;

  constructor(private service: WeatherService) {}

  ngOnInit(): void {}
}
