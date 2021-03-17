const searchTextBox = document.querySelector('input');
const button = document.querySelector('button');

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
          listFilms(_characters[i].films);
        });
      }
    }
  };
  http.send();
});

function listFilms() {
  let http = new XMLHttpRequest();
  http.open('GET', 'https://swapi.dev/api/films/?search');

  http.onload = () => {
    if (http.readyState == 4 && http.status == 200) {
      let movies = JSON.parse(http.responseText).results;
      const _movies = document.querySelector('.movies');

      for (let j = 0; j < movies.length; j++) {
        let li = document.createElement('li');
        li.innerText = `${movies[j].title}: (${movies[j].release_date})`;
        _movies.appendChild(li);
      }
    }
  };
  http.send();
}
