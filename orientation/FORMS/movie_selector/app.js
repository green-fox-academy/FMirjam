const genreSelector = document.querySelector('#genre');
const movieSelector = document.querySelector('#movie');
const result = document.querySelector('p');

const movies = {
  'sci-fi': ['Moon', '2001: A Space Odyssey', 'Contact'],
  drama: ['Darkest Hour', 'There Will Be Blood', 'American Beauty'],
  comedy: ['Airplane!', 'Deadpool', 'Wayne World'],
};

genreSelector.addEventListener('change', (event) => {
  let selectedIndex = event.target.selectedIndex;
  let selectedGenre = event.target[selectedIndex].value;
  if (movies[selectedGenre] !== undefined) {
    movieSelector.innerHTML = '';
    movies[selectedGenre].forEach((movie, index) => {
      let optionElement = new Option(movie);
      movieSelector.add(optionElement);
      if (index === 0) {
        result.innerHTML = `The selected movie is: ${movie}`;
      }
    });
  } else {
    movieSelector.innerHTML = '';
    let selectMovieOption = new Option('Select a movie');
    movieSelector.add(selectMovieOption)
    result.innerHTML = `The selected movie is: -`
  }
});

movieSelector.addEventListener('change', (event) => {
  let selectedIndex2 = event.target.selectedIndex;
  let selectedMovie = event.target[selectedIndex2].value;
  result.innerHTML = `The selected movie is: ${selectedMovie}`;
});
