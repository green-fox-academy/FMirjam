// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const timeOut = setTimeout(() => {
  alert('Bomb exploaded');
}, 10000);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Bomb defused');
  clearTimeout(timeOut);
});

const interval = setInterval(updateTime, 1000);
const display = document.querySelector('.display');

function updateTime() {
  let currentNumber = display.textContent;
  currentNumber--;
  display.textContent = currentNumber;
  if (display.textContent === '0') {
    clearInterval(interval);
  }
}
