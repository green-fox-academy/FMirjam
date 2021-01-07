// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
    gasAmount: number;

    constructor (gasAmount?: number) {
        this.gasAmount = gasAmount;
    }

    refill (car: Car) {
        return this.gasAmount -= car.getCapacity();
    }
}

let station = new Station(600);


class Car {

    gasAmountCar: number;
    capacity: number;

    constructor (gasAmountCar: number = 0, capacity: number = 100) {
        this.gasAmountCar = gasAmountCar;
        this.capacity = capacity;
    }

    getCapacity () {
        return this.capacity;
    }

    gasAmountForCar () {
        return this.gasAmountCar += this.capacity;
    }

}

let car_01 = new Car();

car_01.getCapacity();
car_01.gasAmountForCar();
station.refill(car_01);

console.log(car_01);
console.log(station);




