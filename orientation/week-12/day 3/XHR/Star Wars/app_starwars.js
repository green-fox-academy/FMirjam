const searchTextBox = document.querySelector('input');
const button = document.querySelector('button');
loadFilms();
let movies;

button.addEventListener('click', () => {
  let http = new XMLHttpRequest();
  const searchText = searchTextBox.value;
  http.open('GET', `https://swapi.dev/api/people/?search=${searchText}`);

  http.onload = () => {
    if (http.readyState == 4 && http.status == 200) {
      let _characters = JSON.parse(http.responseText).results;
      const characters = document.querySelector('.characters');

      for (let i = 0; i < _characters.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = _characters[i].name;
        characters.appendChild(li);
        li.addEventListener('click', () => {
          const characterFilms = _characters[i].films;
          const filteredMovies = movies.filter((m) =>
            characterFilms.includes(m.url)
          );
          const _movies = document.querySelector('.movies');
          for (let j = 0; j < filteredMovies.length; j++) {
            let li = document.createElement('li');
            li.innerText = `${filteredMovies[j].title}: (${filteredMovies[j].release_date})`;
            _movies.appendChild(li);
          }
        });
      }
    }
  };
  http.send();
});

function loadFilms() {
  let http = new XMLHttpRequest();
  http.open('GET', 'https://swapi.dev/api/films/');

  http.onload = () => {
    movies = JSON.parse(http.responseText).results;
  };
  http.send();
}
