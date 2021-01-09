// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating an instance, we need to specify the color and the width
// Every sharpie object is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount

export class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor (color: string, width: number) {  //When creating an instance, we need to specify the color and the width
        this.color = color;
        this.width = width;   
    }

    use () {
        return this.inkAmount--;
    }

    getInkAmount () {
        return this.inkAmount;
    }
}

let sharpie_1 = new Sharpie ('pink', 6.6);
console.log(sharpie_1.color, sharpie_1.width, sharpie_1.inkAmount);

sharpie_1.use();

console.log(sharpie_1.inkAmount);