import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private service: WeatherService) {}

  ngOnInit(): void {}

  showForecastData() {
    this.service.getForecastDataById(this.tile.id).subscribe((response) => {console.log(response)});
  }
}
