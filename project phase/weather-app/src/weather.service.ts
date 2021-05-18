import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  printToConsole(arg) {
    console.log(arg);
  }
}
