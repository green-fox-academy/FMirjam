import { Reservationy } from './reservationy';

class Reservation implements Reservationy {
  code: string;
  day: string;

  constructor() {
      
  }
  getDowBooking(): string;
  getCodeBooking(): string;
}
