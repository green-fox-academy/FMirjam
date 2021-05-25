import { Component, Input, OnInit } from '@angular/core';
import { ITile } from '../model/Itile';

@Component({
  selector: 'app-city-tyle',
  templateUrl: './city-tyle.component.html',
  styleUrls: ['./city-tyle.component.scss']
})
export class CityTyleComponent implements OnInit {

  @Input()
  cityTile: ITile;

  
  constructor() { }

  ngOnInit(): void {
  }

}
