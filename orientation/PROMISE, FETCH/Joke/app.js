const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
  getJoke();
});

function getJoke() {
  fetch('http://api.icndb.com/jokes/random')
    .then((response) => {
      return response.json();
    })
    .then((joke) => {
      paragraph.innerHTML = joke.value.joke;
    })
    .catch((err) => {
      console.log(err);
    });
}
