class Car {
    private static SERIES_NUMBER = 0;

    private _seriesNumber: number;

    private _ownerName: string;

    private constructor(public brandName: string) {
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
}

    public static buyCar(brandName: string, ownerName: string) {
        let car = new Car(brandName);
        car.ownerName = ownerName;

        return car;
    }

    public startCar(): void {  
        this._startEngine();

    }
    private _startEngine(): void {

    }

    public get seriesNumber(): number {
        return this._seriesNumber;
    }

    public get ownerName(): string {
        return this._ownerName;
    }

    public set ownerName(name: string) {
        this._ownerName = name;
    }
}

let car = Car.buyCar('Mazda', 'Mirjam');
car.startCar();
console.log('Brand name: ', car.brandName);
console.log('Series number: ', car.seriesNumber);
console.log('Owner name: ', car.ownerName);


let car2 = Car.buyCar('Mazda', 'Olivér');
console.log('Brand name: ', car2.brandName);
console.log('Series number: ', car2.seriesNumber);
