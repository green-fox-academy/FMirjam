import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/weather.service';
import { ITile } from './model/Itile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
