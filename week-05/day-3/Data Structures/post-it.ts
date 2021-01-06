// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let post_1 = new PostIt ('orange', 'Idea1', 'blue');
let post_2 = new PostIt ('pink', 'Awesome', 'black');
let post_3 = new PostIt ('yellow', 'Superb', 'green');

console.log(post_1);
console.log(post_2);
console.log(post_3);