import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/weather.service';
import { ITile } from '../model/Itile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input()
  tile: ITile;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showForecastData(forecastPage: string) {
    // this.service.getForecastDataById(this.tile.id).subscribe((response) => {console.log(response)});
    this.router.navigate([`${forecastPage}`]);
  }
}
