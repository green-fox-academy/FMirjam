const searchTextBox = document.querySelector('input');
const button = document.querySelector('button');
const searchingText = searchTextBox.value;
const characters = document.querySelector('.characters');
const movieDetails = document.querySelector('.movies');
let movies;

window.onload = () => {
  loadFilms();
};

button.addEventListener('click', () => {
  fetch(`https://swapi.dev/api/people/?search=${searchingText}`)
    .then((response) => {
      return response.json();
    })
    .then((character) => {
      let characterList = character.results;
      for (let i = 0; i < characterList.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = characterList[i].name;
        characters.appendChild(li);
        li.addEventListener('click', () => {
          let moviesOfCharacter = characterList[i].films;
          let filteredMovies = movies.filter((m) =>
            moviesOfCharacter.includes(m.url)
          );
          for (let j = 0; j < filteredMovies.length; j++) {
            let li = document.createElement('li');
            li.innerText = `${filteredMovies[j].title}: (${filteredMovies[j].release_date})`;
            movieDetails.appendChild(li);
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function loadFilms() {
  fetch('https://swapi.dev/api/films/')
    .then((response) => {
      return response.json();
    })
    .then((movie) => {
      movies = movie.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
