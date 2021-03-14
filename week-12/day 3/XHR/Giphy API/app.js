// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results' static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

window.onload = () => {
  const api_key = 'GO5zUOVHT7u6qu0JWO3DyA8OmU8JAocQ';
  const request_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=food&rating=g&lang=en`;

  let http = new XMLHttpRequest();

  http.open('GET', request_url, true);

  http.onload = () => {
    if (http.readyState == 4 && http.status == 200) {
      let data = JSON.parse(http.responseText).data; //rainbow guy video
      const thumbnail = document.querySelector('.thumbnail');
      const picture = document.querySelector('img');
      for (let i = 0; i < 16; i++) {
        let newImage = document.createElement('img');
        //setAttribute(name, value) value in this case the url of the given image
        newImage.setAttribute('src', data[i].images.fixed_width.url);//rainbow guy video
        thumbnail.appendChild(newImage);
        newImage.addEventListener('click', () => {
          picture.setAttribute('src', data[i].images.original.url);//rainbow guy video
        });
      }
    }
  };
  http.send();
};
