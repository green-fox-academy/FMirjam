// Interfaces

interface Point { // define the shape of the point object
    x: number,
    y: number
    draw: () => void //no implementation, just define
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint ({
    x: 1,
    y: 2
})

// Inline annotation for simple cases

//     let drawPoint = (point: {x: number, y: number}) => {

//     }


//Classes

//Properties and methods

//Place for implementation as well

class Point {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    draw_01 () {
        console.log('a: ' + this.a + ', b: ' + this.b)
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(1, 2); //constructor
point.draw_01();

//if we do not want to define parameters => optional
// constructor(a?: number, b?: number) {
//     this.a = a;
//     this.b = b;
// }

// let point = new Point();




//Access modifiers


