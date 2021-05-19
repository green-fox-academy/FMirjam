import { Component, Input, OnInit } from '@angular/core';
import { ITile } from '../model/tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input()
  tile: ITile;

  constructor() {}

  ngOnInit(): void {}

  onTileChecked() {
    console.log('Testing');
  }
}
