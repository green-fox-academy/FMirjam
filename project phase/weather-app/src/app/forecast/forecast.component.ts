import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/weather.service';
import { IForecastTile } from '../model/IForecastTile';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastTiles: IForecastTile[];
  subscription: Subscription;
  constructor(
    private service: WeatherService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((param) => {
      this.service
        .getForecastDataById(param.id)
        .subscribe((response) => (this.forecastTiles = response));
    });
  }
}
