import { Component } from '@angular/core';
import { TILES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';

  seattleTile = TILES[0];
  miamiTile = TILES[1];
  barcelonaTile = TILES[2];
}
