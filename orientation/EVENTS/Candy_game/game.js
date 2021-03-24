// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandyButton = document.querySelector('.create-candies');
const buyLollyPopsButton = document.querySelector('.buy-lollypops');
const makeCandyRainButton = document.querySelector('.candy-machine');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let candiesStatus = 0;
let lollypopsStatus = 3;
let candiesPerSec = 0;

createCandyButton.addEventListener('click', () => {
  candiesStatus++;
  candies.innerHTML = candiesStatus;
});

buyLollyPopsButton.addEventListener('click', () => {
  if (candiesStatus > 100) {
    lollypops.innerHTML += '🍭';
    lollypopsStatus++;
    candiesStatus -= 100;
    candies.innerHTML = candiesStatus;
  }
  if (lollypopsStatus > 9) {
    candiesPerSec = Math.floor(lollypopsStatus / 10);
    speed.innerHTML = candiesPerSec;
  }
});

makeCandyRainButton.addEventListener('click', () => {
  candiesPerSec *= 10;
  speed.innerHTML = candiesPerSec;
});
