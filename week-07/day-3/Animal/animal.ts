export class Animal {
    hungerValue: number = 50;
    thirstValue: number = 50;
  

    eat () {
       return this.hungerValue--;
    }

    drink () {
        return this.thirstValue--;
    }

    play () {
       return (this.hungerValue++ && this.thirstValue++);
    }

    getHungry () {
        return this.hungerValue;
    }
    
}