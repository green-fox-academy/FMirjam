// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
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
    
}

let leopard = new Animal();

leopard.eat();
console.log(leopard.hungerValue);

leopard.drink();
console.log(leopard.thirstValue);

leopard.play();
console.log(leopard.hungerValue, leopard.thirstValue);
