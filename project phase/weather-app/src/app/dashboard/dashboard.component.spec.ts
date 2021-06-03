import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/weather.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj<WeatherService>('service', [
      'getApiData',
      'getApiDataByCityName',
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call service getApiDataByCityName with input cityName', () => {
  //   // Arrange
  //   component.cityName = 'Budapest'
  //   weatherServiceSpy.getApiDataByCityName.and.returnValue(of(testTileData));

  //   // Act
  //   component.show()

  //   // Assert
  //   expect(weatherServiceSpy.getApiDataByCityName).toHaveBeenCalledOnceWith(
  //     'Budapest'
  //   );
  // });
});
