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

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  write(): void {
    console.log(
      this.textColor + this.backgroundColor + this.text + '\u001b[0m'
    );
  }
}

let post_1 = new PostIt('\u001b[43m', 'Idea1', '\u001b[34m');

post_1.write();
