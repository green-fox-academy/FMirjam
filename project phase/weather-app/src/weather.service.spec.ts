import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ITile } from './app/model/Itile';
import { IWeatherApiData } from './app/model/IWeatherApiData';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let apiKey: string = '100cb1887e2abc22cbc5d54fc670e448';
  let service: WeatherService;
  let httpMock: HttpTestingController;
  let httpResponseOneCity: IWeatherApiData = {
    id: 1,
    name: 'Budapest',
    sys: {
      country: 'HU',
    },
    main: { temp: 25 },
    weather: [{ icon: 'testIcon' }],
  };

  let expectedResult: ITile = {
    id: 1,
    city: 'Budapest',
    state: 'HU',
    degree: 25,
    image: 'testIcon',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the expected observbale', (done) => {
    service.getApiDataByCityName('Budapest').subscribe((x) => {
      expect(x).toEqual(expectedResult);
      done();
    });

    let response = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=${apiKey}&units=metric`
    );
    response.flush(httpResponseOneCity);
  });
});
