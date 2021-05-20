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
  tiles: ITile[];
  cityName: string;

  constructor(private service: WeatherService) {
    this.service.printToConsole('Got the service');
  }

  ngOnInit(): void {
    this.service.getApiData().subscribe((response) => (this.tiles = response));
  }

  show() {
   
    //a service-ben csinálom meg ezt a function-t és itt meghívom újra?
    //de akkor a másik lekérést kell módosítani mert ott id-val kérjük le a bulk-ot, és itt meg az adott city-hez tartozó kell
    //this.cityName-mel kell lekérni

  }
}
