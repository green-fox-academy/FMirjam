import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/weather.service';
import { ITile } from '../model/Itile';
import { of } from 'rxjs/internal/observable/of';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  let testTileData: ITile = {
    id: 1,
    city: 'Budapest',
    state: 'HU',
    degree: 25,
    image: 'testIcon',
  };

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj<WeatherService>('service', [
      'getApiData',
      'getApiDataByCityName',
      'printToConsole',
    ]);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DashboardComponent],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service getApiDataByCityName with input cityName', () => {
    // Arrange
    component.cityName = 'Budapest';
    weatherServiceSpy.getApiDataByCityName.and.returnValue(of(testTileData));

    // Act
    component.show();

    // Assert
    expect(weatherServiceSpy.getApiDataByCityName).toHaveBeenCalledOnceWith(
      'Budapest'
    );
  });
});
