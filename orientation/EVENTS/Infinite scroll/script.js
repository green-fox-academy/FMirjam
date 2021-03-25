const body = document.querySelector('body');
const randomNumberOfDivs = Math.floor(Math.random() * 10 + 5);

function createDivs(numberOfDivs) {
  for (let i = 0; i < numberOfDivs; i++) {
    let randomColour = Math.floor(Math.random() * 16777215).toString(16);
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = '#' + randomColour;
    body.appendChild(newDiv);
  }
}

createDivs(randomNumberOfDivs);

window.addEventListener('scroll', () => {
  let existingDivs = document.querySelectorAll('div').length;
  if (window.scrollY > existingDivs - window.innerHeight) {
    createDivs(10);
  }
});
