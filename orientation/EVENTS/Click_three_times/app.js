const button = document.querySelector('button');
const paragraph = document.querySelector('p');
let clickCounter = 0;

window.onload = () => {
button.addEventListener('click', () => {
  clickCounter++;
});
setTimeout(() => {
  if (clickCounter > 2) {
    paragraph.innerHTML = `5 seconds elapsed and clicked ${clickCounter} times`;
  }
}, 5000);
};
