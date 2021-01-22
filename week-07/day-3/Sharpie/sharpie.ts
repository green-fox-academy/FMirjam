export class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;
  
    constructor(color: string, width: number) {
      //When creating an instance, we need to specify the color and the width
      this.color = color;
      this.width = width;
    }
  
    use() {
      return this.inkAmount--;
    }
  
    getInkAmount() {
      return this.inkAmount;
    }
  }