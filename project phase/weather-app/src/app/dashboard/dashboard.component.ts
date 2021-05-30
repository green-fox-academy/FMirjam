import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/weather.service';
import { ITile } from '../model/Itile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'weather-app';
  tiles: ITile[];
  cityName: string = '';

  constructor(private service: WeatherService, private router: Router) {
    this.service.printToConsole('Got the service');
  }

  ngOnInit(): void {
    this.service.getApiData().subscribe((response) => (this.tiles = response));
  }

  show() {
    this.service.getApiDataByCityName(this.cityName).subscribe((response) => {
      this.tiles.push(response);
    });
  }

  onGetForecast(id: number): void {
    this.router.navigate([`/forecast/${id}`]);
  }
}
