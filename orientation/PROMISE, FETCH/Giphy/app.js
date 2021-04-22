const api_key = 'GO5zUOVHT7u6qu0JWO3DyA8OmU8JAocQ';
const request_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=food&rating=g&lang=en`;
const thumbnail = document.querySelector('.thumbnail');
const picture = document.querySelector('img');

window.onload = () => {
  getGiphy();
};

function getGiphy() {
  fetch(request_url)
    .then((response) => {
      return response.json();
    })
    .then((giphy) => {
      for (let i = 0; i < 16; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', giphy.data[i].images.original.url);
        thumbnail.appendChild(image);
        image.addEventListener('click', () => {
          picture.setAttribute('src', giphy.data[i].images.original.url);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
