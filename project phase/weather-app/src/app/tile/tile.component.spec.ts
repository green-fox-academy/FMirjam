import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITile } from '../model/Itile';

import { TileComponent } from './tile.component';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  let testTileData: ITile = {
    id: 1,
    city: 'Budapest',
    state: 'HU',
    degree: 25,
    image: 'testIcon',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit id = 1 when call showForecastData()', () => {
    // Arrange
    component.tile= testTileData;
    spyOn(component.getForecast, 'emit');

    // Act
    component.showForecastData();

    // Assert
    expect(component.getForecast.emit).toHaveBeenCalledOnceWith(1);
  });
});
